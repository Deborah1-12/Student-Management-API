import { Module } from '@nestjs/common';
import { CourseController } from '../courses/courses.controller';
import { CourseService } from '../courses/courses.service';

@Module({
  imports: [],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
