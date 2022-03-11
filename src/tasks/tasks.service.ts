import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { task, taskDocument } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectModel(task.name) private taskModel: Model<taskDocument>) {}

  create(createTaskDto: CreateTaskDto) {
    const createdtask = new this.taskModel(createTaskDto);
    return createdtask.save();
  }

  findAll() {
    return this.taskModel.find().exec();
  }

  findOne(id: string) {
    return this.taskModel.findById(id).exec();
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate({
      _id: id
  }, {
    $set: updateTaskDto
  }, {
    new: true
  });
}

  remove(id: string) {
    return this.taskModel.deleteOne({
      _id: id,
    }).exec();
  }
}
