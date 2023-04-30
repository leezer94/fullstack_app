import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  status: 'NOT_STARTED' | 'IN PROGRESS' | 'COMPLETED';
}
