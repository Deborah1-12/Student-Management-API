import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/entities/course.entity';
import { Repository } from 'typeorm';
import { registerCourseDto } from './dto/createCourseDto';
import { UpdateCourseDto } from './dto/updateCourseDto';

@Injectable()
export class CourseService {
  constructor(@InjectRepository(Course)private courseRepo:Repository<Course>){
    }
  //the business logic and the return messages for the courses
  async getAllCourses() {
    return await this.courseRepo.find()
  }

  async getOneCourse(id: number) {
  const courses =  await this.courseRepo.findOne({
    where: {id}
  })
   if (!courses) throw new NotFoundException()
      return courses;
  }

  async registerCourse(dto: registerCourseDto) {
    return await this.courseRepo.save(dto)
  }

  async updateCourse(id, dto: UpdateCourseDto) {
    return await this.courseRepo.update({id}, dto)
  }

  async deleteCourse(id:number) {
    return await this.courseRepo.delete({id})
}
}
