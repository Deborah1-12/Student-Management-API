import { Module } from '@nestjs/common';
import { StudentModule } from './modules/students/student.module';
import { CourseModule } from './modules/courses/courses.module';
import { EnrollmentModule } from './modules/enrollments/enrollments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [StudentModule, CourseModule, EnrollmentModule, MongooseModule.forRoot('mongodb+srv://abanghannah3:xmEYNcg4CUs2vx8P@student-management-syst.bafyxdu.mongodb.net/'), AuthModule]
})
export class AppModule {}
