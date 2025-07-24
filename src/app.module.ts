import { Module } from '@nestjs/common';
import { StudentModule } from './modules/students/student.module';
import { CourseModule } from './modules/courses/courses.module';
import { EnrollmentModule } from './modules/enrollments/enrollments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from './config/typeorm.config';


@Module({
  imports: [StudentModule, CourseModule, EnrollmentModule, TypeOrmModule.forRoot(pgConfig)]
})
export class AppModule {}
