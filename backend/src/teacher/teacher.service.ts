import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}
  async create(createTeacherDto: CreateTeacherDto) {
    const exits = await this.teacherRepository.findOne({
      where: { email: createTeacherDto.email },
    });
    if (exits) throw new BadGatewayException('This teacher is ready exits');
    const teacher = this.teacherRepository.create(createTeacherDto);
    return await this.teacherRepository.save(teacher);
  }

  async findAll() {
    return await this.teacherRepository.find();
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
