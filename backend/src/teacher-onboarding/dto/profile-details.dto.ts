import { IsNotEmpty } from "class-validator";

export class CreateProfiledetilsDto {
    @IsNotEmpty({message:'name is must required'})
    name?: string;

    @IsNotEmpty()
    dob?: string;

    @IsNotEmpty()
    email?: string;

    @IsNotEmpty()
    phoneNumber?: string;
}
