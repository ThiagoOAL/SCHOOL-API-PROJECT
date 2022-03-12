import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentTasksService } from './student-tasks.service';
import { CreateStudentTaskDto } from './dto/create-student-task.dto';
import { UpdateStudentTaskDto } from './dto/update-student-task.dto';

@Controller('student-tasks')
export class StudentTasksController {
  constructor(private readonly studentTasksService: StudentTasksService) {}

  @Post()
  create(@Body() createStudentTaskDto: CreateStudentTaskDto) {
    return this.studentTasksService.create(createStudentTaskDto);
  }

  @Get()
  findAll() {
    return this.studentTasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentTasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentTaskDto: UpdateStudentTaskDto) {
    return this.studentTasksService.update(id, updateStudentTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentTasksService.remove(id);
  }
}
