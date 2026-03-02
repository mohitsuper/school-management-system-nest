import { Test, TestingModule } from '@nestjs/testing';
import { TeacherOnboardingController } from './teacher-onboarding.controller';
import { TeacherOnboardingService } from './teacher-onboarding.service';

describe('TeacherOnboardingController', () => {
  let controller: TeacherOnboardingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherOnboardingController],
      providers: [TeacherOnboardingService],
    }).compile();

    controller = module.get<TeacherOnboardingController>(TeacherOnboardingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
