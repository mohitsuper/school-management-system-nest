import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSubjectDto {
  @IsOptional()
  id?: string;

  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  status?: boolean;
}
