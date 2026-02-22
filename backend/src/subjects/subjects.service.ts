import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly SubjectRepo: Repository<Subject>,
  ) {}
  async create(createSubjectDto: CreateSubjectDto) {
    const exits = await this.SubjectRepo.find({
      where: { name: createSubjectDto.name },
    });
    if (exits.length > 0) {
      throw new BadGatewayException('Subject already exits');
    }
    const res = this.SubjectRepo.create(createSubjectDto);
    return await this.SubjectRepo.save(res);
  }

  async findAll() {
    return await this.SubjectRepo.find();
  }

  async findOne(id: string) {
    return await this.SubjectRepo.find({ where: { id } });
  }

  async update(id: string, updateSubjectDto: UpdateSubjectDto) {
    const UpdateSubject = await this.SubjectRepo.findOne({ where: { id } });
    if (!UpdateSubject) {
      throw new BadGatewayException('Not exits');
    }
    Object.assign(UpdateSubject, updateSubjectDto);
    return await this.SubjectRepo.save(UpdateSubject);
  }

  async remove(id: string) {
    return await this.SubjectRepo.delete(id);
  }
}
