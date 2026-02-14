import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateTeacherDto {
  @IsNotEmpty({ message: 'name is a required field' })
  @IsString()
  name?: string;

  @IsNotEmpty({ message: 'email is a required field' })
  @IsString()
  @IsEmail({}, { message: 'Enter valid email' })
  email?: string;

  @IsNotEmpty({ message: 'subject is a required field' })
  @IsString()
  subject?: string;
}
