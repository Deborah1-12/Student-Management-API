import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { EnrollmentService } from './enrollments.service';
import { EnrollmentDto, enrollmentSchema } from './dto/enrollmentDto';
import { ZodValidationPipe } from 'src/common/pipes/pipe';

@Controller('/enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}
  //defining the routes for enrollments
  @Post()
  @UsePipes(new ZodValidationPipe(enrollmentSchema))
  enroll(@Body() body:EnrollmentDto){
    return this.enrollmentService.enroll(body)
  }
  @Get()
  enrolledStudents(@Query('studentId') studentId) {
    return this.enrollmentService.enrolledStudents(studentId);
  }

  @Get()
  enrolledCourses(@Query('courseId') courseId) {
    return this.enrollmentService.enrolledCourses(courseId);
  }
}