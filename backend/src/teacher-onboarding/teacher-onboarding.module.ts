import { Module } from '@nestjs/common';
import { TeacherOnboardingService } from './teacher-onboarding.service';
import { TeacherOnboardingController } from './teacher-onboarding.controller';
import { profileDetails } from './service/personalDetails.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { personalDetailsEntity } from './entities/personal-details.entity';
import { TeacherOnboarding } from './entities/teacher-onboarding.entity';
import { AddressDetailsService } from './service/AddressDetails.service';
import { addressDetailsEntity } from './entities/address-details.entity';
import { SeleryDetailsService } from './service/SeleryDetails.service';

@Module({
  imports:[TypeOrmModule.forFeature([personalDetailsEntity,TeacherOnboarding,addressDetailsEntity])],
  controllers: [TeacherOnboardingController],
  providers: [TeacherOnboardingService,profileDetails,AddressDetailsService,SeleryDetailsService],
})
export class TeacherOnboardingModule {}
