import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SchoolClassesService } from './school-classes.service';
import { CreateSchoolClassDto } from './dto/create-school-class.dto';
import { UpdateSchoolClassDto } from './dto/update-school-class.dto';

@Controller('classes')
export class SchoolClassesController {
  constructor(private readonly schoolClassesService: SchoolClassesService) {}

  @Post()
  create(@Body() createSchoolClassDto: CreateSchoolClassDto) {
    return this.schoolClassesService.create(createSchoolClassDto);
  }

  @Get()
  findAll(@Query('status') status:boolean) {
    return this.schoolClassesService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolClassesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolClassDto: UpdateSchoolClassDto) {
    return this.schoolClassesService.update(id, updateSchoolClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolClassesService.remove(id);
  }
}
