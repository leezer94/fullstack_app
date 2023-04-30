import { IsOptional, IsString } from 'class-validator';

export class EditTodoDto {
  @IsString()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  status?: 'NOT_STARTED' | 'IN PROGRESS' | 'COMPLETED';
}
