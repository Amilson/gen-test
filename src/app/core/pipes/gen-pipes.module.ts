import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenCurrencyPipe } from './gen-currency';

@NgModule({
  declarations: [GenCurrencyPipe],
  imports: [CurrencyPipe],
  exports: [GenCurrencyPipe],
  providers: [CurrencyPipe]
})
export class GenPipesModule {}
