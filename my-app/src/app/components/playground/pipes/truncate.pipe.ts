import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    const [decimal, foo] = args;
    const decimalNumber = 10 ** decimal;
    return Math.trunc(value * decimalNumber) / decimalNumber;
  }
}
