import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Subject } from 'src/subjects/entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher,Subject])],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
