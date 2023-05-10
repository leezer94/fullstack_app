import { Injectable, ForbiddenException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto, EditRoomDto } from './dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async getPrivateRooms() {
    return await this.prisma.privateRoom.findMany({
      include: { todos: true },
    });
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

  async joinPrivateRoom({ user, roomId }: { user: User; roomId: number }) {
    const currentParticipants = await this.prisma.privateRoom.findUnique({
      where: { id: roomId },
    });

    const userAlreadyExist = currentParticipants.participants.find(
      (participant) => participant['id'] === user.id,
    );

    if (userAlreadyExist)
      throw new ForbiddenException('User already exist in the list');

    const newParticipants = [...currentParticipants.participants, user];

    return await this.prisma.privateRoom.update({
      where: {
        id: roomId,
      },
      data: {
        participants: newParticipants as any[],
      },
    });
  }

  async createPrivateRoom({ user, dto }: { user: User; dto: CreateRoomDto }) {
    return await this.prisma.privateRoom.create({
      data: {
        ownerId: user.id,
        participants: [user],
        ...dto,
      },
    });
  }

  async modifyPrivateRoom({ user, dto }: { user: User; dto: EditRoomDto }) {
    return this.prisma;
  }

  async deletePrivateRoom({ user, roomId }: { user: User; roomId: number }) {
    const privateRoom = await this.prisma.privateRoom.findUnique({
      where: {
        id: Number(roomId),
      },
    });

    console.log(privateRoom.ownerId === user.id);
    if (!privateRoom || user.id !== privateRoom.ownerId)
      throw new ForbiddenException('Access to resource denied');

    return await this.prisma.privateRoom.delete({
      where: {
        id: Number(roomId),
      },
    });
  }
}
