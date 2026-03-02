import {  Injectable } from "@nestjs/common";
import { CreateProfiledetilsDto } from "../dto/profile-details.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { personalDetailsEntity } from "../entities/personal-details.entity";
import { Repository } from "typeorm";

@Injectable()
export class profileDetails {
     constructor(@InjectRepository(personalDetailsEntity) private readonly personalDetailsRep: Repository<personalDetailsEntity>){}
     async create(createProfileDetails:CreateProfiledetilsDto){
        return await this.personalDetailsRep.save(createProfileDetails);
    }
}