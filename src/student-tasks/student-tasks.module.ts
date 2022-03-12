import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentTasksService } from './student-tasks.service';
import { StudentTasksController } from './student-tasks.controller';
import { StudentTask, StudentTaskSchema } from './entities/student-task.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: StudentTask.name, schema: StudentTaskSchema }])],
  controllers: [StudentTasksController],
  providers: [StudentTasksService]
})
export class StudentTasksModule {}
