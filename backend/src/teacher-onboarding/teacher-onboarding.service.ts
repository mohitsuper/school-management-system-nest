import { Injectable } from '@nestjs/common';
import { CreateTeacherOnboardingDto } from './dto/create-teacher-onboarding.dto';
import { UpdateTeacherOnboardingDto } from './dto/update-teacher-onboarding.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherOnboarding } from './entities/teacher-onboarding.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherOnboardingService {
  constructor(
    @InjectRepository(TeacherOnboarding)
    private readonly rep: Repository<TeacherOnboarding>,
  ) {}
  async createTeacherOnboarding(
    createTeacherOnboardingDto: CreateTeacherOnboardingDto,
  ) {
    const res = this.rep.create({
      personalId: { id: createTeacherOnboardingDto?.personalId },
      addressId: { id: createTeacherOnboardingDto?.addressId },
      seleryId: { id: createTeacherOnboardingDto?.seleryId },
      documentId: { id: createTeacherOnboardingDto?.documentId },
    });
    return await this.rep.save(res);
  }

  findAll() {
    return `This action returns all teacherOnboarding`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacherOnboarding`;
  }

  update(id: number, updateTeacherOnboardingDto: UpdateTeacherOnboardingDto) {
    return `This action updates a #${id} teacherOnboarding`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacherOnboarding`;
  }
}
