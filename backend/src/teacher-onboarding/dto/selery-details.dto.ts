import { isNotEmpty, IsNotEmpty, IsOptional } from "class-validator";

export class CreateSeleryInfo {
    @IsOptional()
    id?:string

    @IsNotEmpty()
    bankName:string

    @IsNotEmpty()
    accountNumber:string
    
    @IsNotEmpty()
    ifsc_code:string

    @IsNotEmpty()
    basicSelery:string

}
