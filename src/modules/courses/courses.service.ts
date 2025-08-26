import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { registerCourseDto } from './dto/createCourseDto';
import { UpdateCourseDto } from './dto/updateCourseDto';
import { Course } from './course.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CourseService {
  constructor(
      @InjectModel(Course.name)
      private readonly courseModel: Model<Course>){}
  async getAllCourses() {
    return this.courseModel.find().exec();
  }

  async getOneCourse(id: number) {
      return this.courseModel.findById(id).exec()
  }

  async registerCourse(dto: registerCourseDto) {
    const course = new this.courseModel(dto)
    return await course.save()

  }

  async updateCourse(id, dto: UpdateCourseDto) {
    return this.courseModel.findByIdAndUpdate(id, dto).exec()
  }

  async deleteCourse(id:number) {
    return this.courseModel.findByIdAndDelete
}
}
