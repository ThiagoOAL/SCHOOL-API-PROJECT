import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentTaskDto } from './create-student-task.dto';

export class UpdateStudentTaskDto extends PartialType(CreateStudentTaskDto) {}
