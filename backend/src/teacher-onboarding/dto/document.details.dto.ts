import { IsNotEmpty, IsOptional, Length, Matches } from 'class-validator';

export class createDocumentDetailsDto {
  @IsOptional()
  id?: string;

  @IsNotEmpty()
  @Length(12, 12, { message: "Aadhaar number must be exactly 12 digits" })
  @Matches(/^[0-9]+$/, { message: "Aadhaar number must contain only numbers" })
  addharNumber: string;

  @IsNotEmpty()
  @Length(10, 10, { message: 'PAN number must be exactly 10 characters' })
  @Matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, {
    message: 'PAN must be in format ABCDE1234F',
  })
  panNumber: string;

  @IsOptional()
  status: boolean;
}
