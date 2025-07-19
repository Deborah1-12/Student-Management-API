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
  createStudentDto,
  createStudentSchema,
} from './dto/createStudentDto.js';
import { ZodValidationPipe } from '../../common/pipes/pipe.js';

@Controller('/students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createStudentSchema))
  createStudent(@Body() body: createStudentDto) {
    return this.studentService.createStudent(body);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }
  @Get('/:id')
  //when searching for something using is always add the param decorator
  findOne(@Param('id') id) {
    return this.studentService.findOne(id);
  }

  @Patch('/:id')
  updateStudent(
    @Param('id') id,
    @Body(new ZodValidationPipe(createStudentSchema)) body: createStudentDto,
  ) {
    return this.studentService.updateStudent(id, body);
  }

  @Delete('/:id')
  deleteStudent(@Param('id') id) {
    return this.studentService.deleteStudent(id);
  }
}
