import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { SECRET_KEY } from '../constants/keys';
import { EXPIRATION_TIME } from '../constants/expirations';
import { ERROR_MESSAGE } from '../constants/errorMessages';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  // where DI is happening
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    // generate password hash
    const hash = await argon.hash(dto.password);

    try {
      return await this.prisma.user.create({
        data: {
          email: dto.email,
          firstName: dto.firstName,
          lastName: dto.lastName,
          hash,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(ERROR_MESSAGE.AUTH.ALREADY_TAKEN);
        }
      }
    }

    throw Error;
  }

  async signin(dto: AuthDto, res: Response) {
    // find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    // if user does not exist throw exception
    if (!user) throw new ForbiddenException(ERROR_MESSAGE.AUTH.IN_CORRECT);

    // compare password
    const pwMatches = await argon.verify(user.hash, dto.password);

    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException(ERROR_MESSAGE.AUTH.IN_CORRECT);

    // send back the user

    const tokens = await this.signTokens(user.id, user.email);

    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);

    res.setHeader('Authorization', `Bearer ${tokens.access_token}`);
    res.cookie('access_token', tokens.access_token, {
      httpOnly: true,
      maxAge: 60 * 15 * 30 * 100,
      secure: true,
      sameSite: 'lax',
    });

    return tokens;
  }

  // sending access_token using jwt
  async signTokens(
    userId: number,
    email: string,
  ): Promise<{
    access_token: string;
    refresh_token: string;
  }> {
    const payload = {
      sub: userId,
      email,
    };
    const access_secret = this.config.get(SECRET_KEY.ACCESS_SECRET);
    const refresh_secret = this.config.get(SECRET_KEY.REFRESH_SECRET);

    const [access_token, refresh_token] = await Promise.all([
      this.jwt.signAsync(payload, {
        expiresIn: EXPIRATION_TIME.ACCESS_TOKEN,
        secret: access_secret,
      }),
      this.jwt.signAsync(payload, {
        expiresIn: EXPIRATION_TIME.REFRESH_TOKEN,
        secret: refresh_secret,
      }),
    ]);

    return {
      access_token,
      refresh_token,
    };
  }

  async updateRefreshTokenHash(userId: number, refresh_token: string) {
    const hash = await argon.hash(refresh_token);

    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRT: hash,
      },
    });
  }

  async logout(userId: number) {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRT: {
          not: null,
        },
      },
      data: {
        hashedRT: null,
      },
    });
  }

  async refreshTokens({
    userId,
    refreshToken,
  }: {
    userId: number;
    refreshToken: string;
  }) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user && !user.hashedRT) throw new ForbiddenException('Access denied');

    const refreshTokenMatches = await argon.verify(user.hashedRT, refreshToken);

    if (!refreshTokenMatches) throw new ForbiddenException('Access denied');

    const tokens = await this.signTokens(user.id, user.email);

    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);

    return tokens;
  }
}
