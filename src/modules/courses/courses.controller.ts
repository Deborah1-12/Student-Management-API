import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CourseService } from './courses.service';
import { ZodValidationPipe } from '../../common/pipes/pipe';
import { registerCourseDto, registerCourseSchema } from './dto/createCourseDto';
import { UpdateCourseDto, UpdateCourseSchema } from './dto/updateCourseDto';

@Controller('/courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  // defining the routes for the courses
  @Post()
  @UsePipes(new ZodValidationPipe(registerCourseSchema))
  registerCourse(@Body() dto: registerCourseDto) {
    return this.courseService.registerCourse(dto);
  }
  @Get()
  getAllCourses() {
    return this.courseService.getAllCourses();
  }

  @Get('/:id')
  getOneCourse(@Param('id') id) {
    return this.courseService.getOneCourse(id);
  }

  @Patch('/:id')
  updateCourse(
    @Param('id') id,
    @Body(new ZodValidationPipe(UpdateCourseSchema)) dto: UpdateCourseDto,
  ) {
    return this.courseService.updateCourse(id, dto);
  }

  @Delete('/:id')
  deleteCourse(@Param('id') id) {
    return this.courseService.deleteCourse(id);
  }
}
