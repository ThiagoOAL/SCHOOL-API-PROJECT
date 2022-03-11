import { Test, TestingModule } from '@nestjs/testing';
import { StudentTasksService } from './student-tasks.service';

describe('StudentTasksService', () => {
  let service: StudentTasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentTasksService],
    }).compile();

    service = module.get<StudentTasksService>(StudentTasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
