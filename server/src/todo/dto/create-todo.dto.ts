import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  roomId: number;

  @IsString()
  @IsOptional()
  status?: 'BACKLOG' | 'TODO' | 'IN_PROGRESS' | 'DONE' | 'CANCELED';

  @IsString()
  priority: 'Low' | 'Medium' | 'High';
}
