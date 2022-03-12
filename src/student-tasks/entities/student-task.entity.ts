import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { student, studentSchema} from 'src/students/entities/student.entity';
import { task} from 'src/tasks/entities/task.entity';

export type StudentTaskDocument = StudentTask & Document;

@Schema()
export class StudentTask {

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'student' }] })
  student: student[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task' }] })
  task: task[];

  @Prop({ required: true })
  dateTime: Date;
  
  @Prop({ required: true })
  score: number;

  @Prop()
  text: string;

}

export const StudentTaskSchema = SchemaFactory.createForClass(StudentTask);

