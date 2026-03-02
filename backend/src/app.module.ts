import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectsModule } from './subjects/subjects.module';
import { SchoolClassesModule } from './school-classes/school-classes.module';
import { TeacherOnboardingModule } from './teacher-onboarding/teacher-onboarding.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      port: 5432,
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '1234',
      database: 'school_management_system',
      autoLoadEntities: true,
      synchronize: false,
    }),
    TeacherModule,
    SubjectsModule,
    SchoolClassesModule,
    TeacherOnboardingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
