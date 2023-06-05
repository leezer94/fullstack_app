import { IsOptional, IsString } from 'class-validator';

export class EditTodoDto {
  @IsString()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  status?: 'BACKLOG' | 'TODO' | 'IN_PROGRESS' | 'DONE' | 'CANCELED';

  @IsString()
  priority: 'Low' | 'Medium' | 'High';
}
