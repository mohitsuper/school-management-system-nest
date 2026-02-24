import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Subject } from '../subjects/entities/subject.entity';
import { SchoolClass } from 'src/school-classes/entities/school-class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher,Subject,SchoolClass])],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
