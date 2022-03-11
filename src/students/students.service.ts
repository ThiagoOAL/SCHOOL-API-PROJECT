import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { student, studentDocument } from './entities/student.entity';


@Injectable()
export class StudentsService {
  constructor(@InjectModel(student.name) private studentModel: Model<studentDocument>) {}

  create(CreateStudentDto: CreateStudentDto) {
    const createdstudent = new this.studentModel(CreateStudentDto);
    return createdstudent.save();
  }

  findAll() {
    return this.studentModel.find().populate('responsibles').exec();
  }

  findOne(id: string) {
    return this.studentModel.findById(id).exec();
  }

  update(id: string, updateTaskDto: UpdateStudentDto) {
    return this.studentModel.findByIdAndUpdate({
      _id: id
  }, {
    $set: updateTaskDto
  }, {
    new: true
  });
}

  remove(id: string) {
    return this.studentModel.deleteOne({
      _id: id,
    }).exec();
  }
}