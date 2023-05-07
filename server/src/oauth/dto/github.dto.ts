import { IsNotEmpty, IsString } from 'class-validator';

export class GithubDto {
  @IsString()
  @IsNotEmpty()
  readonly code: string;
}
