import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
  standalone: false
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    
    const visibleDigits = value.slice(-4);
    const maskedDigits = value.slice(0, -4).replace(/./g, '*');
    return `${maskedDigits}${visibleDigits}`;
  }

}
