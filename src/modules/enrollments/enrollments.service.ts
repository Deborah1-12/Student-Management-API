import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollments } from './enrollments.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EnrollmentService {
   constructor(
        @InjectModel(Enrollments.name)
        private readonly enrollmentModel: Model<Enrollments>){}

  //the logic and the return messages
  enrolledStudents(studentEmail) {
  return this.enrollmentModel.find({studentEmail}).exec()
  }
  enrolledCourses(courseTitle) {
  return this.enrollmentModel.find({courseTitle}).exec() 
  }

  async enroll(dto){
    const enrollments = new this.enrollmentModel(dto)
    return await enrollments.save(dto)
  }
}