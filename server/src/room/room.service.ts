import { Injectable, ForbiddenException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto, EditRoomDto } from './dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async getAllPrivateRooms() {
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

  async getParticipantsByRoomId(roomId: number) {
    const privateRoom = await this.prisma.privateRoom.findUnique({
      where: {
        id: roomId,
      },
    });

    if (!privateRoom)
      throw new ForbiddenException('Private room does not exist');

    return privateRoom.participants;
  }

  async getTodosByRoomId(roomId: number) {
    const privateRoom = await this.prisma.privateRoom.findUnique({
      where: {
        id: roomId,
      },
      include: { todos: true },
    });

    if (!privateRoom)
      throw new ForbiddenException('Private room does not exist');

    return privateRoom.todos;
  }

  async joinPrivateRoom({ user, roomId }: { user: User; roomId: number }) {
    const privateRoom = await this.prisma.privateRoom.findUnique({
      where: { id: roomId },
    });

    const userAlreadyExist = privateRoom.participants.find(
      (participant) => participant['id'] === user.id,
    );

    if (userAlreadyExist)
      throw new ForbiddenException('User already exist in the list');

    if (!privateRoom)
      throw new ForbiddenException('Private room does not exist');

    const newParticipants = [...privateRoom.participants, user];

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

  async modifyPrivateRoom({
    user,
    roomId,
    dto,
  }: {
    user: User;
    roomId: number;
    dto: EditRoomDto;
  }) {
    const privateRoom = await this.prisma.privateRoom.findUnique({
      where: { id: roomId },
    });

    if (!privateRoom || user.id !== privateRoom.ownerId)
      throw new ForbiddenException('Access to resource denied');

    return await this.prisma.privateRoom.update({
      where: {
        id: roomId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deletePrivateRoom({ user, roomId }: { user: User; roomId: number }) {
    const privateRoom = await this.prisma.privateRoom.findUnique({
      where: {
        id: Number(roomId),
      },
    });

    if (!privateRoom || user.id !== privateRoom.ownerId)
      throw new ForbiddenException('Access to resource denied');

    return await this.prisma.privateRoom.delete({
      where: {
        id: Number(roomId),
      },
    });
  }
}
