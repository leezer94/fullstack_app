import { Module } from '@nestjs/common';
import { OauthController } from './oauth.controller';
import { OauthService } from './oauth.service';
import { AtStrategy } from '../auth/strategy';
import { GoogleStrategy } from './strategy/google.strategy';

@Module({
  controllers: [OauthController],
  providers: [OauthService, GoogleStrategy, AtStrategy],
})
export class OauthModule {}
