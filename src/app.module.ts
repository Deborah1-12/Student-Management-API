import { Module } from '@nestjs/common';
import { StudentModule } from './modules/students/student.module';
import { CourseModule } from './modules/courses/courses.module';
import { EnrollmentModule } from './modules/enrollments/enrollments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}),
    StudentModule,
    CourseModule,
    EnrollmentModule,
    MongooseModule.forRoot(
      process.env.MONGO_URI || ''
    ),
    AuthModule,
  ],
})

export class AppModule {}


