import { Test, TestingModule } from '@nestjs/testing';
import { TeacherOnboardingService } from './teacher-onboarding.service';

describe('TeacherOnboardingService', () => {
  let service: TeacherOnboardingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherOnboardingService],
    }).compile();

    service = module.get<TeacherOnboardingService>(TeacherOnboardingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
