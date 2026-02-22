import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSchoolClassDto {
  @IsOptional()
  id?: string;

  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  status?: boolean;

  @IsNotEmpty()
  room?: string;
}
