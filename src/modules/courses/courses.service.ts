import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  //the business logic and the return messages for the courses
  getAllCourses() {
    return 'This are all the courses in my university';
  }

  getOneCourse(id) {
    return {
      message: `this is the course with this id:${id}`,
    };
  }

  registerCourse(body) {
    return {
      message: 'course registered successfully',
      data: body,
    };
  }

  updateCourse(id, body) {
    return {
      message: `course with ${id} updated successfully`,
      data: body,
    };
  }

  deleteCourse(id) {
    return {
      message: `course with ${id} deleted successfully`,
    };
  }
}
