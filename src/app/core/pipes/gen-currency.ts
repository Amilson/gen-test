import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genCurrency'
})
export class GenCurrencyPipe implements PipeTransform {
  private currencyCode: string = 'BRL';

  private currentLocale: string = 'pt-BR';

  constructor(private currencyPipe: CurrencyPipe) {
    // not to do
  }

  transform(value: any, ...args: any[]) {
    const { currencyCode, currentLocale } = this;
    if (!value) return '0';
    return this.currencyPipe.transform(`${value}`, currencyCode, 'symbol', '', currentLocale);
  }
}
