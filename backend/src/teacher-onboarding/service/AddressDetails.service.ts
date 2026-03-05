import { InjectRepository } from "@nestjs/typeorm";
import { CreateTeacherAddressInfo } from "../dto/address-details.dto";
import { addressDetailsEntity } from "../entities/address-details.entity";
import { Repository } from "typeorm";

export class AddressDetailsService {
    constructor(@InjectRepository(addressDetailsEntity) private readonly repo: Repository<addressDetailsEntity>){}
    async createAddress(CreateTeacherAddressInfo:CreateTeacherAddressInfo){
        return await this.repo.save(CreateTeacherAddressInfo)
    }
}