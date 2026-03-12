import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { documentDetailsEntity } from "../entities/document-details.entity";
import { createDocumentDetailsDto } from "../dto/document.details.dto";

@Injectable()
export class DocumentDetailsService {
    constructor(@InjectRepository(documentDetailsEntity) private readonly Rep: Repository <documentDetailsEntity>){}
    async create(createDocumentDetailsDto:createDocumentDetailsDto){
        return await this.Rep.save(createDocumentDetailsDto)  
    }
}