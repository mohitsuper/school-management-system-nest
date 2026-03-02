import { Module } from '@nestjs/common';
import { TeacherOnboardingService } from './teacher-onboarding.service';
import { TeacherOnboardingController } from './teacher-onboarding.controller';
import { profileDetails } from './service/personalDetails.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { personalDetailsEntity } from './entities/personal-details.entity';
import { TeacherOnboarding } from './entities/teacher-onboarding.entity';

@Module({
  imports:[TypeOrmModule.forFeature([personalDetailsEntity,TeacherOnboarding])],
  controllers: [TeacherOnboardingController],
  providers: [TeacherOnboardingService,profileDetails],
})
export class TeacherOnboardingModule {}
