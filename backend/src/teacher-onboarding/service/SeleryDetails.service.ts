import { Injectable } from "@nestjs/common";
import { CreateSeleryInfo } from "../dto/selery-details.dto";

@Injectable()
export class SeleryDetailsService {
    
    async create(CreateSeleryInfo:CreateSeleryInfo){
        return
    }
}