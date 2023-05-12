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
  status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
}
