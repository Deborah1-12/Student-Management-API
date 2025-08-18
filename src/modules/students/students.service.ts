import { Injectable} from '@nestjs/common';
import { CreateStudentDto } from './dto/createStudentDto';
import { UpdateStudentDto } from './dto/updateStudent.dto';
import { Model } from 'mongoose';
import { Student } from './students.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<Student>){}
  
  
  async createStudent(dto: CreateStudentDto){
    const user = new this.studentModel(dto);
   return await user.save();

  }

  async findAll() {
    return this.studentModel.find().exec()
  }

  async findOne(id: number) {
  
    return this.studentModel.findById(id).exec()
  }

  async updateStudent(id:number, dto:UpdateStudentDto) {
   return this.studentModel.findByIdAndUpdate(id, dto).exec()
  }
  async deleteStudent(id:number) {
    return this.studentModel.findByIdAndDelete(id).exec()
  }
}
