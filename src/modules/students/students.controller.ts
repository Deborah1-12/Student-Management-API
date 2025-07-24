import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { StudentService } from './students.service.js';
import {
  CreateStudentDto,
  createStudentSchema,
} from './dto/createStudentDto.js';
import { ZodValidationPipe } from '../../common/pipes/pipe.js';
import { UpdateStudentDto, UpdateStudentSchema } from './dto/updateStudent.dto.js';
import { Student } from './interface/students.interface.js';

@Controller('/students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createStudentSchema))
  createStudent(@Body() dto: CreateStudentDto) {
    return this.studentService.createStudent(dto);
  }

  @Get() 
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }
  @Get(':id')
  //when searching for something using is always add the param decorator
  findOne(@Param('id') id) {
    return this.studentService.findOne(id);
  }

  @Patch(':id')
  updateStudent(
    @Param('id') id,
    @Body(new ZodValidationPipe(UpdateStudentSchema)) dto: UpdateStudentDto,
  ) {
    return this.studentService.updateStudent(id, dto);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id) {
    return this.studentService.deleteStudent(id);
  }
}
