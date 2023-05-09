import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { OauthService } from './oauth.service';
import { GoogleOAuthGuard } from './guard/google.guard';
import { Public } from 'src/auth/decorator';

@Controller('auth/google')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @Public()
  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Req() req) {
    console.log('req', req);

    return;
  }

  @Public()
  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Req() req) {
    return this.oauthService.googleLogin(req);
  }
}
