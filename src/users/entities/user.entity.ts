import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { student, studentSchema} from 'src/students/entities/student.entity';

export type userDocument = user & Document;

@Schema()
export class user {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  role: string;

  @Prop({ required: true })
  birthDate: Date;

  @Prop()
  active: boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'student' }] })
  dependents: student[];


}

export const userSchema = SchemaFactory.createForClass(user);

