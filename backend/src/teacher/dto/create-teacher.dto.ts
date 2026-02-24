import { IsEmail, IsNotEmpty, IsString, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateTeacherDto {
 
  
  @IsNotEmpty({ message: 'name is a required field' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'email is a required field' })
  @IsEmail({}, { message: 'Enter valid email' })
  email: string;

  @IsArray({ message: 'subjectIds must be an array' })
  @ArrayNotEmpty({ message: 'At least one subject is required' })
  @IsString({ each: true })
  subjectIds: string[];

  @IsArray({ message: 'classIds must be an array' })
  @ArrayNotEmpty({ message: 'At least one class is required' })
  @IsString({ each: true })
  classIds: string[];
}