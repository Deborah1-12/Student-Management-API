import { Module } from '@nestjs/common';
import { StudentModule } from './modules/students/student.module';
import { CourseModule } from './modules/courses/courses.module';
import { EnrollmentModule } from './modules/enrollments/enrollments.module';


@Module({
  imports: [StudentModule, CourseModule, EnrollmentModule]
})
export class AppModule {}
