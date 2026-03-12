import { Injectable } from "@nestjs/common";
import { CreateSeleryInfo } from "../dto/selery-details.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { seleryDetailsEntity } from "../entities/selery-details.entity";
import { Repository } from "typeorm";

@Injectable()
export class SeleryDetailsService {
    constructor(@InjectRepository(seleryDetailsEntity) private readonly Rep: Repository <seleryDetailsEntity>){}
    async create(CreateSeleryInfo:CreateSeleryInfo){
        return await this.Rep.save(CreateSeleryInfo)  
    }
}