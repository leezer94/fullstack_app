import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto, EditRoomDto } from './dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async getPrivateRooms() {
    return await this.prisma.privateRoom.findMany();
  }

  async getMyPrivateRooms(userId: number) {
    return await this.prisma.privateRoom.findMany({
      where: {
        ownerId: userId,
      },
    });
  }

  async getTodosByRoomId(roomId: number) {
    return this.prisma.privateRoom.findMany({
      where: {
        id: roomId,
      },
    });
  }

  async createPrivateRoom({ user, dto }: { user: any; dto: CreateRoomDto }) {
    return await this.prisma.privateRoom.create({
      data: {
        ownerId: user.id,
        participants: [user],
        ...dto,
      },
    });
  }

  async modifyPrivateRoom({
    userId,
    dto,
  }: {
    userId: number;
    dto: EditRoomDto;
  }) {
    return this.prisma;
  }

  async deletePrivateRoom({
    userId,
    roomId,
  }: {
    userId: number;
    roomId: number;
  }) {
    return this.prisma;
  }
}
