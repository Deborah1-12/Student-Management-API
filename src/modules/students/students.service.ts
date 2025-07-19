import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  createStudent(body){
    return{
      message: 'Student created successfully',
      data: body
    }
  }

  findAll() {
    return {
      message: 'All the students in my university',
      data: 'students data'
    }
  }

  findOne(id: number) {
    return {
      message: `this is a student with ${id}`,
    }
  }
  updateStudent(id, body ) {
    return{
      message: `student details with ${id} has been updated`,
      data: {
        body,
        id: `${id}`
      }
    }
  }
  deleteStudent(id) {
    return{
      message: `student details with ${id} has been updated`
    }
  }
}
