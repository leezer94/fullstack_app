import {
  Body,
  Controller,
  Get,
  Patch,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { EditUserDto } from './dto/edit-user.dto';
import { UserService } from './user.service';
import { Request, Response } from 'express';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('me')
  getMe(
    @Req() req: Request,
    @GetUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    const token = req.cookies['authorization'];

    res.header('Authorization', `Bearer ${token}`);

    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
