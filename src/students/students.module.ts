import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { student, studentSchema } from './entities/student.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: student.name, schema: studentSchema }])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}