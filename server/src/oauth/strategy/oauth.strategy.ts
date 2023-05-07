import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github2';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { SECRET_KEY } from '../../constants';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubOAuthStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private config: ConfigService, private prisma: PrismaService) {
    super({
      clientID: config.get(SECRET_KEY.GITHUB_CLIENT_ID),
      clientSecret: config.get(SECRET_KEY.GITHUB_CLIENT_SECRET),
      callbackURL: config.get(SECRET_KEY.GITHUB_CALLBACK_URL),
      // scope: ['public_profile'],
    });
  }

  async validate(accessToken: string, _refreshToken: string, profile: Profile) {
    const { id } = profile;
    const user = await this.usersService.findOrCreate(id, 'github');

    // if (!user) {
    //   // UnauthorizedException here might not make sense...
    //   throw new UnauthorizedException();
    // }

    return user;
  }
}
