import { Injectable } from '@nestjs/common';
import { CreateStudentTaskDto } from './dto/create-student-task.dto';
import { UpdateStudentTaskDto } from './dto/update-student-task.dto';

@Injectable()
export class StudentTasksService {
  create(createStudentTaskDto: CreateStudentTaskDto) {
    return 'This action adds a new studentTask';
  }

  findAll() {
    return `This action returns all studentTasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentTask`;
  }

  update(id: number, updateStudentTaskDto: UpdateStudentTaskDto) {
    return `This action updates a #${id} studentTask`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentTask`;
  }
}
