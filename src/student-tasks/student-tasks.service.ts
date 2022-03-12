import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentTaskDto } from './dto/create-student-task.dto';
import { UpdateStudentTaskDto } from './dto/update-student-task.dto';
import { StudentTask, StudentTaskDocument } from './entities/student-task.entity';

@Injectable()
export class StudentTasksService {
  constructor(@InjectModel(StudentTask.name) private StudentTaskModel: Model<StudentTaskDocument>) {}

  create(createStudentTaskDto: CreateStudentTaskDto) {
    const createdStudentTask = new this.StudentTaskModel(createStudentTaskDto);
    return createdStudentTask.save();
  }

  findAll() {
    return this.StudentTaskModel.find().populate('student').populate('task').exec();
  
  }

  findOne(id: string) {
    return this.StudentTaskModel.findById(id).exec();
  }

  update(id: string, updateStudentTaskDto: UpdateStudentTaskDto) {
    return this.StudentTaskModel.findByIdAndUpdate({
      _id: id
    },{
      $set: updateStudentTaskDto

    },{
      new: true
    });
  }

  remove(id: string) {
    return this.StudentTaskModel.deleteOne({
      _id: id,
    }).exec();
  }
}
