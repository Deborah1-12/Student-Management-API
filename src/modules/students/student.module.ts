import { Module } from '@nestjs/common';
import { StudentController } from '../students/students.controller';
import { StudentService } from '../students/students.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './students.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Student.name,
    schema: StudentSchema
  }])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
