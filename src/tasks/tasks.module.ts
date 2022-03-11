import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { task, taskSchema } from './entities/task.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: task.name, schema: taskSchema }])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
