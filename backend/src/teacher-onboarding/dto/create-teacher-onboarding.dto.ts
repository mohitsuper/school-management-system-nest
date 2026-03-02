import { IsNotEmpty } from "class-validator";

export class CreateTeacherOnboardingDto {
    @IsNotEmpty()
    personalId?:string
}
