import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';
import { StudentTasksModule } from './student-tasks/student-tasks.module';

@Module({
  imports: [TasksModule, MongooseModule.forRoot('mongodb://localhost/school'), StudentsModule, UsersModule, StudentTasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
