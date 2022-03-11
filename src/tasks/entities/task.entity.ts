import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type taskDocument = task & Document;

@Schema()
export class task {
  @Prop({ required: true })
  title: string;

  @Prop()
  active: boolean;

  @Prop()
  type: string;
}

export const taskSchema = SchemaFactory.createForClass(task);