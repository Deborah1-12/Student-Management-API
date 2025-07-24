import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/createStudentDto';
import { UpdateStudentDto } from './dto/updateStudent.dto';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student)private studentRepo:Repository<Student>){
  }
  async createStudent(dto: CreateStudentDto){
   return await this.studentRepo.save(dto)

  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepo.find()
  }

  async findOne(id: number) {
    const students = await this.studentRepo.findOne({
      where: {id}
    })
    if (!students) throw new NotFoundException()
    return students;
  }

  async updateStudent(id:number, dto:UpdateStudentDto) {
   return await this.studentRepo.update({id}, dto)
  }
  async deleteStudent(id:number) {
    return await this.studentRepo.delete({id})
  }
}
