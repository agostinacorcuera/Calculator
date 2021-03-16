import { Controller, Get, Param } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller("/calculator")
export class CalculatorController {
    constructor(private readonly calculatorService: CalculatorService) {}

    @Get('/sum/:a/:b')
    getSum(@Param('a') a: number, @Param('b') b: number): number {
      return this.calculatorService.getSum(a, b);
    }

    @Get('/subtract/:a/:b')
    getSubtract(@Param('a') a: number, @Param('b') b: number): number {
      return this.calculatorService.getSubtract(a, b);
    }

    @Get('/divide/:a/:b')
    getDivide(@Param('a') a: number, @Param('b') b: number): number {
      return this.calculatorService.getDivide(a, b);
    }

    @Get('/multiply/:a/:b')
    getMultiply(@Param('a') a: number, @Param('b') b: number): number {
      return this.calculatorService.getMultiply(a, b);
    }
}