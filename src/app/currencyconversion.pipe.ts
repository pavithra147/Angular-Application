import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconversion'
})
export class CurrencyconversionPipe implements PipeTransform {

  transform(dollar: number, ...args: number[]): number {
  
    return dollar*80;
  }

}
