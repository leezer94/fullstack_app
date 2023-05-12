import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from 'src/todo/dto';
import { EditTodoDto } from './dto/edit-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getTodos(userId: number) {
    return await this.prisma.todo.findMany({
      where: {
        userId,
      },
    });
  }

  async createTodo({ userId, dto }: { userId: number; dto: CreateTodoDto }) {
    const newTodo = await this.prisma.todo.create({
      data: {
        userId,
        status: 'NOT_STARTED',
        ...dto,
      },
    });

    return newTodo;
  }

  async editTodoById({
    userId,
    todoId,
    dto,
  }: {
    userId: number;
    todoId: number;
    dto: EditTodoDto;
  }) {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id: todoId,
      },
    });

    if (!['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'].includes(dto.status)) {
      throw new ForbiddenException('Not valid status');
    }

    if (!todo || todo.userId !== userId) {
      throw new ForbiddenException('Access to resource denied');
    }

    return this.prisma.todo.update({
      where: {
        id: todoId,
      },
      data: { ...dto },
    });
  }

  async deleteTodoById({ userId, todoId }: { userId: number; todoId: number }) {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id: todoId,
      },
    });

    if (!todo || todo.userId !== userId) {
      throw new ForbiddenException('Access to resource denied');
    }

    return await this.prisma.todo.delete({
      where: {
        id: todoId,
      },
    });
  }

  async deleteAllTodo(userId: number) {
    return await this.prisma.todo.deleteMany({
      where: {
        userId,
      },
    });
  }
}
