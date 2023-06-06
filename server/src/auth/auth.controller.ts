import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { RtGuard } from './guard';
import { GetUser, Public } from '../auth/decorator';
import { Response, Request } from 'express';

//  this does the job for '/auth/'
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // which becomes 'auth/signup' by default
  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  signup(@Body() dto: AuthDto) {
    // DTO ( Data Transfer Object )

    return this.authService.signup(dto);
  }

  // can modify the http status code
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.signin(dto, res);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(
    @Req() req: Request,
    @GetUser('sub') userId: number,
    @Res({ passthrough: true }) res: Response,
  ) {
    const token = req.cookies.access_token;

    res.setHeader('Authorization', `Bearer ${token}`);
    // res.header('Authorization', `Bearer ${token}`);

    return this.authService.logout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetUser('sub') userId: number,
    @GetUser('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshTokens({
      userId,
      refreshToken,
    });
  }
}
