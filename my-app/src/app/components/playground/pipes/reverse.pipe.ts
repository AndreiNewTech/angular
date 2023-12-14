import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const reverseString = value.split('').reverse().join('');
    return reverseString;
  }
}
