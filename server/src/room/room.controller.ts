import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { CreateRoomDto } from 'src/room/dto';
import { RoomService } from './room.service';
import { User } from '@prisma/client';
import { EditRoomDto } from './dto/edit-room.dto';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get()
  getAllPrivateRooms() {
    return this.roomService.getAllPrivateRooms();
  }

  @Get(':id')
  getMyPrivateRooms(@GetUser('id') userId: number) {
    return this.roomService.getMyPrivateRooms(userId);
  }

  @Get('todos/:id')
  getTodosByRoomId(@Param('id', ParseIntPipe) roomId: number) {
    return this.roomService.getTodosByRoomId(roomId);
  }

  @Get('participants/:id')
  getParticipantsByRoomId(@Param('id', ParseIntPipe) roomId: number) {
    return this.roomService.getParticipantsByRoomId(roomId);
  }

  @Patch(':id')
  modifyPrivateRoom(
    @GetUser() user: User,
    @Param('id', ParseIntPipe) roomId: number,
    @Body() dto: EditRoomDto,
  ) {
    return this.roomService.modifyPrivateRoom({ user, roomId, dto });
  }

  @Patch('/join/:id')
  joinPrivateRoom(
    @GetUser() user: User,
    @Param('id', ParseIntPipe) roomId: number,
  ) {
    return this.roomService.joinPrivateRoom({ user, roomId });
  }

  @Post()
  createPrivateRoom(@GetUser() user: User, @Body() dto: CreateRoomDto) {
    return this.roomService.createPrivateRoom({ user, dto });
  }

  @Delete(':id')
  deletePrivateRoom(@GetUser() user: User, @Param('id') roomId: number) {
    return this.roomService.deletePrivateRoom({ user, roomId });
  }
}
