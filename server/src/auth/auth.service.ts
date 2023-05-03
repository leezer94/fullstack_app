import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { SECRET_KEY } from '../constants/keys';

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
      // save the new user in the db
      // const { id, email } = await this.prisma.user.create({
      //   data: {
      //     email: dto.email,
      //     hash,
      //   },
      // });
      return await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      // const tokens = await this.signTokens(id, email);

      // await this.updateRefreshTokenHash(id, tokens.refresh_token);

      // return tokens;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
    }

    throw Error;
  }

  async signin(dto: AuthDto) {
    // find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');

    // compare password
    const pwMatches = await argon.verify(user.hash, dto.password);

    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

    // send back the user

    const tokens = await this.signTokens(user.id, user.email);

    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);

    return tokens;
  }

  // sending access_token using jwt
  async signTokens(
    userId: number,
    email: string,
  ): Promise<{
    access_token: string;
    refresh_token: string;
    jwt_token: string;
  }> {
    const payload = {
      sub: userId,
      email,
    };
    const access_secret = this.config.get(SECRET_KEY.ACCESS_SECRET);
    const refresh_secret = this.config.get(SECRET_KEY.REFRESH_SECRET);
    const jwt_secret = this.config.get(SECRET_KEY.JWT_SECRET);

    const [access_token, refresh_token, jwt_token] = await Promise.all([
      this.jwt.signAsync(payload, {
        expiresIn: 60 * 15,
        secret: access_secret,
      }),
      this.jwt.signAsync(payload, {
        expiresIn: 60 * 60 * 24 * 7,
        secret: refresh_secret,
      }),
      this.jwt.signAsync(payload, {
        expiresIn: 60 * 15,
        secret: jwt_secret,
      }),
    ]);

    return {
      access_token,
      refresh_token,
      jwt_token,
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

  logout() {
    return;
  }

  refreshTokens() {
    return;
  }
}
