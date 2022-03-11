import { Module } from '@nestjs/common';
import { StudentTasksService } from './student-tasks.service';
import { StudentTasksController } from './student-tasks.controller';

@Module({
  controllers: [StudentTasksController],
  providers: [StudentTasksService]
})
export class StudentTasksModule {}
