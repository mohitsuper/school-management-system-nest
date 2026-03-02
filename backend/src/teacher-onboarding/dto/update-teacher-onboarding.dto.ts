import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherOnboardingDto } from './create-teacher-onboarding.dto';

export class UpdateTeacherOnboardingDto extends PartialType(CreateTeacherOnboardingDto) {}
