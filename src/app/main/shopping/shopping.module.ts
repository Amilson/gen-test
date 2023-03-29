import { CommonModule } from '@angular/common';
import { inject, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenButtonModule, GenOptionModule, GenSelectModule } from '@gen-style';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as effects from '@store/effects';
import * as reducers from '@store/reducers';
import * as services from '@store/services';
import { GenPipesModule } from 'src/app/core/pipes';
import { DataComponent } from './data';
import { FilterComponent } from './filter';
import { NoProductsComponent } from './no-products';
import { ShoppingResolver, ShoppingResumeService, ShoppingService } from './providers';
import { ResumeComponent } from './resume';
import { ShoppingComponent } from './shopping.component';
import { TableListComponent } from './table-list';

@NgModule({
  declarations: [
    ShoppingComponent,
    TableListComponent,
    FilterComponent,
    DataComponent,
    ResumeComponent,
    NoProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingComponent,
        resolve: {
          data: () => {
            return inject(ShoppingResolver).resolve();
          }
        },
        runGuardsAndResolvers: 'always'
      }
    ]),
    GenButtonModule,
    GenSelectModule,
    GenOptionModule,
    GenPipesModule,
    StoreModule.forFeature(reducers.fromShopping.featureKey, reducers.fromShopping.reducer),
    StoreModule.forFeature(reducers.fromShopping.featureKey, reducers.fromShopping.reducer),
    EffectsModule.forFeature([effects.ShoppingEffects, effects.ShoppingEffects])
  ],
  providers: [
    ShoppingResolver,
    ShoppingService,
    ShoppingResumeService,
    services.shopping.ShoppingService
  ]
})
export class ShoppingModule {}
