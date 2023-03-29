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
import { LoadingComponent } from './loading';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsResolver, ProductDetailsService } from './providers';
import { SizeComponent } from './size';
import { StarComponent } from './star';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    FilterComponent,
    DataComponent,
    StarComponent,
    SizeComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: ProductDetailsComponent,
        resolve: {
          data: () => {
            return inject(ProductDetailsResolver).resolve();
          }
        },
        runGuardsAndResolvers: 'always'
      }
    ]),
    GenButtonModule,
    GenSelectModule,
    GenOptionModule,
    GenPipesModule,
    StoreModule.forFeature(
      reducers.fromProductDetails.featureKey,
      reducers.fromProductDetails.reducer
    ),
    StoreModule.forFeature(reducers.fromShopping.featureKey, reducers.fromShopping.reducer),
    EffectsModule.forFeature([effects.ProductDetailsEffects, effects.ShoppingEffects])
  ],
  providers: [
    ProductDetailsResolver,
    ProductDetailsService,
    services.productDetails.ProductDetailsService,
    services.shopping.ShoppingService
  ]
})
export class ProductDetailsModule {}
