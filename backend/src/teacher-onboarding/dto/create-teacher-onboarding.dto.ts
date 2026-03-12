import { IsNotEmpty } from "class-validator";

export class CreateTeacherOnboardingDto {
    @IsNotEmpty()
    personalId?:string

    @IsNotEmpty()
    addressId?:string

    @IsNotEmpty()
    seleryId:string
    
    @IsNotEmpty()
    documentId?:string
}

