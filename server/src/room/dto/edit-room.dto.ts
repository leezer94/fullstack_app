import { IsOptional, IsString } from 'class-validator';

export class EditRoomDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  description?: string;
}
