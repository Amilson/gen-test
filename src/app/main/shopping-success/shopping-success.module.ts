import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenButtonModule } from '@gen-style';
import { ShoppingSuccessComponent } from './shopping-success.component';

@NgModule({
  declarations: [ShoppingSuccessComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingSuccessComponent
      }
    ]),
    GenButtonModule
  ]
})
export class ShoppingSuccessModule {}
