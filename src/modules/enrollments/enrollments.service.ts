import { Injectable } from '@nestjs/common';

@Injectable()
export class EnrollmentService {
  //the logic and the return messages
  enrolledStudents(studentId) {
    return {
      message: `Student with ID ${studentId} has no enrolled courses yet.`,
    };
  }
  enrolledCourses(courseId) {
    return {
      message: `Student with ID ${courseId} has no enrolled courses yet.`,
    };
  }

  enroll(body){
    return {
      message: 'enrollment Successful',
      data: body
    }
  }
}