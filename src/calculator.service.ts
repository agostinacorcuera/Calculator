import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService { 
    getSum(a: number, b: number): number {
        return +a + +b;
    }

    getSubtract(a: number, b: number): number {
      return a - b;
    }

    getDivide(a: number, b: number): number {
    return a / b;
    }

    getMultiply(a: number, b: number): number {
      return a * b;
    }
}
