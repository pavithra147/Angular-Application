import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconversion'
})
export class CurrencyconversionPipe implements PipeTransform {

  transform(dollar: number): number {
  
    return dollar*80;
  }

}
