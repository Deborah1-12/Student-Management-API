import { Module } from '@nestjs/common';
import { StudentController } from '../students/students.controller';
import { StudentService } from '../students/students.service';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
