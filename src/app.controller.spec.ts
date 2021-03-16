import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';

describe('AppController', () => {
  let appController: CalculatorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorController],
      providers: [CalculatorService],
    }).compile();

    appController = app.get<CalculatorController>(CalculatorController);
  });

  describe('root', () => {
    it('should return 5', () => {
      expect(appController.getSum(2, 3)).toBe(5);
    });
  });
});
