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

@Controller('/courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  // defining the routes for the courses
  @Post()
  @UsePipes(new ZodValidationPipe(registerCourseSchema))
  registerCourse(@Body() body: registerCourseDto) {
    return this.courseService.registerCourse(body);
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
    @Body(new ZodValidationPipe(registerCourseSchema)) body: registerCourseDto,
  ) {
    return this.courseService.updateCourse(id, body);
  }

  @Delete('/:id')
  deleteCourse(@Param('id') id) {
    return this.courseService.deleteCourse(id);
  }
}
