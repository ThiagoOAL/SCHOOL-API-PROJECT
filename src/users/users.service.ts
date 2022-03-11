import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { user, userDocument } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(user.name) private userModel: Model<userDocument>) {}

  create(createUserDto: CreateUserDto) {
    const createduser = new this.userModel(createUserDto);
    return createduser.save();

  }

  findAll() {
    //return this.userModel.find().exec();
    return this.userModel.find().populate('dependents').exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate({
      _id: id
  }, {
    $set: updateUserDto
  }, {
    new: true
  });
}

  remove(id: string) {
    return this.userModel.deleteOne({
      _id: id,
    }).exec();
  }
}
