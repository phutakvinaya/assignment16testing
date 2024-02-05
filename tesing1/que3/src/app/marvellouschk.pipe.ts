import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk'
})
export class MarvellouschkPipe implements PipeTransform {

  transform(value: number): string {
    if (this.isPrime(value)) {
      return 'Prime';
    } else if (this.isPerfect(value)) {
      return 'Perfect';
    } else if (this.isOdd(value)) {
      return 'Odd';
    } else {
      return 'Unknown';
    }
  }

  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  private isPerfect(num: number): boolean {
    if (num <= 1) return false;

    let sum = 1; // Start with 1 as a divisor
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) {
          sum += num / i;
        }
      }
    }

    return sum === num;
  }

  private isOdd(num: number): boolean {
    return num % 2 !== 0;
  }

}
