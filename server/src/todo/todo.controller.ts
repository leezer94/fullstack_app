import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { TodoService } from './todo.service';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { CreateTodoDto, EditTodoDto } from '../todo/dto';
import { HttpStatus } from '@nestjs/common';

@UseGuards(JwtGuard)
@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos(@GetUser('id') userId: number) {
    return this.todoService.getTodos(userId);
  }

  @Post()
  createTodo(@GetUser('id') userId: number, @Body() dto: CreateTodoDto) {
    return this.todoService.createTodo({ userId, dto });
  }

  @Patch(':id')
  modifyTodo(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) todoId: number,
    @Body() dto: EditTodoDto,
  ) {
    return this.todoService.editTodoById({ userId, todoId, dto });
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  deleteAllTodos(@GetUser('id') userId: number) {
    return this.todoService.deleteAllTodo(userId);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteTodoById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) todoId: number,
  ) {
    return this.todoService.deleteTodoById({ userId, todoId });
  }
}
