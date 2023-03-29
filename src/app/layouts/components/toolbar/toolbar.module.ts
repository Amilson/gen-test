import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenButtonModule } from '@gen-style';
import { StoreModule } from '@ngrx/store';
import * as reducers from '@store/reducers';
import { ToolbarLayoutComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarLayoutComponent],
  exports: [ToolbarLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    GenButtonModule,
    StoreModule.forFeature(reducers.fromShopping.featureKey, reducers.fromShopping.reducer)
  ]
})
export class ToolbarLayoutModule {}
