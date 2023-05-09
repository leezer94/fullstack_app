import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { CreateRoomDto } from 'src/room/dto';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get()
  getPrivateRooms() {
    return this.roomService.getPrivateRooms();
  }

  @Get(':id')
  getMyPrivateRooms(@GetUser('id') userId: number) {
    return this.roomService.getMyPrivateRooms(userId);
  }

  @Get('todos/:id')
  getTodosByRoomId(@Param('id', ParseIntPipe) roomId: number) {
    return this.roomService.getTodosByRoomId(roomId);
  }
  @Post()
  createPrivateRoom(@GetUser() user: any, @Body() dto: CreateRoomDto) {
    return this.roomService.createPrivateRoom({ user, dto });
  }
}
