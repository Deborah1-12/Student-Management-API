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
  enroll(@Body() dto:EnrollmentDto){
    return this.enrollmentService.enroll(dto)
  }
  @Get('allStudents')
  enrolledStudents(@Query('studentEmail') studentEmail) {
    return this.enrollmentService.enrolledStudents(studentEmail);
  }

  @Get('allCourses')
  enrolledCourses(@Query('courseTitle') courseTitle) {
    return this.enrollmentService.enrolledCourses(courseTitle);
  }
}