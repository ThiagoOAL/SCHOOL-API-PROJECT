import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { user, userSchema} from 'src/users/entities/user.entity';

export type studentDocument = student & Document;

@Schema()
export class student {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  birthDate: Date;

  @Prop()
  active: boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }] })
  responsibles: user[];

}

export const studentSchema = SchemaFactory.createForClass(student);