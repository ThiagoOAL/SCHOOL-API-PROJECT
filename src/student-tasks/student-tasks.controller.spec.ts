import { Test, TestingModule } from '@nestjs/testing';
import { StudentTasksController } from './student-tasks.controller';
import { StudentTasksService } from './student-tasks.service';

describe('StudentTasksController', () => {
  let controller: StudentTasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentTasksController],
      providers: [StudentTasksService],
    }).compile();

    controller = module.get<StudentTasksController>(StudentTasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
