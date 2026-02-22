import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectsModule } from './subjects/subjects.module';
import { SchoolClassesModule } from './school-classes/school-classes.module';

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
      synchronize: true,
    }),
    TeacherModule,
    SubjectsModule,
    SchoolClassesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
