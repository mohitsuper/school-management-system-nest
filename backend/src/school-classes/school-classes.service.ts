import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSchoolClassDto } from './dto/create-school-class.dto';
import { UpdateSchoolClassDto } from './dto/update-school-class.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SchoolClass } from './entities/school-class.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolClassesService {
  constructor(
    @InjectRepository(SchoolClass)
    private readonly SchoolClassRep: Repository<SchoolClass>,
  ) {}

  async create(createSchoolClassDto: CreateSchoolClassDto) {
    const exits = await this.SchoolClassRep.find({
      where: { name: createSchoolClassDto.name },
    });
    if (exits.length >0) {
      throw new BadGatewayException('Class is a already exits');
    }
    const res = this.SchoolClassRep.create(createSchoolClassDto);
    return await this.SchoolClassRep.save(res);
  }

  async findAll(status:boolean) {
    let where:any = {};
    if(status){
      where.status = true
    }
    return await this.SchoolClassRep.find({where});
  }

  async findOne(id: string) {
    return await this.SchoolClassRep.find({ where: { id } });
  }

  async update(id: string, updateSchoolClassDto: UpdateSchoolClassDto) {
    const findUpdates = await this.SchoolClassRep.findOne({ where: { id } });
    if (!findUpdates) {
      throw new NotFoundException('Not exits');
    }
    Object.assign(findUpdates, updateSchoolClassDto);
    return await this.SchoolClassRep.save(findUpdates);
  }

  async remove(id: string) {
    const res = this.SchoolClassRep.delete(id);
    return res;
  }
}
