import { Module } from '@nestjs/common';
import { CourseController } from '../courses/courses.controller';
import { CourseService } from '../courses/courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
