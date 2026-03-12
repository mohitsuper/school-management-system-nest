import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherOnboardingService } from './teacher-onboarding.service';
import { CreateTeacherOnboardingDto } from './dto/create-teacher-onboarding.dto';
import { UpdateTeacherOnboardingDto } from './dto/update-teacher-onboarding.dto';
import { profileDetails } from './service/personalDetails.service';
import { CreateProfiledetilsDto } from './dto/profile-details.dto';
import { AddressDetailsService } from './service/AddressDetails.service';
import { CreateTeacherAddressInfo } from './dto/address-details.dto';
import { CreateSeleryInfo } from './dto/selery-details.dto';
import { SeleryDetailsService } from './service/SeleryDetails.service';
import { createDocumentDetailsDto } from './dto/document.details.dto';
import { DocumentDetailsService } from './service/DocumentDetails.service';

@Controller('teacher-onboarding')
export class TeacherOnboardingController {
  constructor(
    private readonly teacherOnboardingService: TeacherOnboardingService, 
    private readonly profileDetailsService:profileDetails,
    private readonly AddressDetailsService:AddressDetailsService,
    private readonly SeleryDetailsService:SeleryDetailsService,
    private readonly DocumentDetailsService:DocumentDetailsService
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
  createAddressInfo(@Body() CreateTeacherAddressInfo:CreateTeacherAddressInfo){
    return this.AddressDetailsService.createAddress(CreateTeacherAddressInfo)
  }

  @Post('/selery')
  createSeleryInfo(@Body() CreateSeleryInfo:CreateSeleryInfo){
    return this.SeleryDetailsService.create(CreateSeleryInfo)
  }


   @Post('/document')
  createDocumentInfo(@Body() createDocumentDetailsDto:createDocumentDetailsDto){
    return this.DocumentDetailsService.create(createDocumentDetailsDto)
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
