import { Module } from '@nestjs/common';
import { StudentController } from '../students/students.controller';
import { StudentService } from '../students/students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
