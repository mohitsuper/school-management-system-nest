import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherOnboardingService } from './teacher-onboarding.service';
import { CreateTeacherOnboardingDto } from './dto/create-teacher-onboarding.dto';
import { UpdateTeacherOnboardingDto } from './dto/update-teacher-onboarding.dto';
import { profileDetails } from './service/personalDetails.service';
import { CreateProfiledetilsDto } from './dto/profile-details.dto';
import { AddressDetailsService } from './service/AddressDetails.service';

@Controller('teacher-onboarding')
export class TeacherOnboardingController {
  constructor(
    private readonly teacherOnboardingService: TeacherOnboardingService, 
    private readonly profileDetailsService:profileDetails,
    private readonly AddressDetailsService:AddressDetailsService

  ) {}
  @Post()
  create(@Body() createTeacherOnboardingDto: CreateTeacherOnboardingDto) {
    return this.teacherOnboardingService.createTeacherOnboarding(createTeacherOnboardingDto);
  }

  @Post('/profile')
  createProfile(@Body() CreateProfiledetilsDto:CreateProfiledetilsDto){
    return this.profileDetailsService.create(CreateProfiledetilsDto)
  }
  
  @Post('/address')
  createAddressInfo(@Body() CreateProfiledetilsDto:CreateProfiledetilsDto){
    return this.AddressDetailsService.createAddress(CreateProfiledetilsDto)
  }
  @Get()
  findAll() {
    return this.teacherOnboardingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherOnboardingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherOnboardingDto: UpdateTeacherOnboardingDto) {
    return this.teacherOnboardingService.update(+id, updateTeacherOnboardingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherOnboardingService.remove(+id);
  }
}
