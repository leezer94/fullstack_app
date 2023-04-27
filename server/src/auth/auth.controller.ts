import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

//  this does the job for '/auth/'
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // which becomes 'auth/signup' by default
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    // DTO ( Data Transfer Object )

    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
