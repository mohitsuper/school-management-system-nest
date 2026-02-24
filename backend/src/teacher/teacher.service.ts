import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { In, Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from '../subjects/entities/subject.entity';
import { SchoolClass } from 'src/school-classes/entities/school-class.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,

    @InjectRepository(Subject)
    private readonly subjectRep: Repository<Subject>,

    @InjectRepository(SchoolClass)
    private readonly  classesRep: Repository<SchoolClass>
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    console.log("---",createTeacherDto.email)
    const exists = await this.teacherRepository.findOne({
      where: { email: createTeacherDto.email },
    });

    if (exists) {
      throw new BadGatewayException('Teacher already exists');
    }

    const subjects = await this.subjectRep.findBy({
      id: In(createTeacherDto.subjectIds),
    });

    const classes = await this.classesRep.findBy({
      id: In(createTeacherDto.classIds)
    })
    console.log("subjects",subjects)

    if (!subjects.length) {
      throw new BadGatewayException('Subjects not found');
    }

    if(!classes.length){
       throw new BadGatewayException('Classes not found');
    }
    const teacher = this.teacherRepository.create({
      name: createTeacherDto.name,
      email: createTeacherDto.email,
      subjects,
      classes
    });

    return await this.teacherRepository.save(teacher);
  }

  async findAll() {
    return await this.teacherRepository.find({ relations: ['subjects'] });
  }

  async findOne(id: string) {
    return await this.teacherRepository.findOne({ where: { id } });
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto) {
    const teacher = await this.teacherRepository.findOne({
      where: { id },
    });
    if (!teacher) {
      throw new BadGatewayException('Teacher not found');
    }
    Object.assign(teacher, updateTeacherDto);
    return await this.teacherRepository.save(teacher);
  }

  async remove(id: string) {
    return await this.teacherRepository.delete(id);
  }
}
