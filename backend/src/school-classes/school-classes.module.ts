import { Module } from '@nestjs/common';
import { SchoolClassesService } from './school-classes.service';
import { SchoolClassesController } from './school-classes.controller';
import { SchoolClass } from './entities/school-class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolClass])],
  controllers: [SchoolClassesController],
  providers: [SchoolClassesService],
})
export class SchoolClassesModule {}
