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
import { ProductsComponent } from './products.component';
import { ProductResolver, ProductsService } from './providers';
import { StarComponent } from './star';
import { TableListComponent } from './table-list';

@NgModule({
  declarations: [
    ProductsComponent,
    FilterComponent,
    TableListComponent,
    DataComponent,
    StarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
        resolve: {
          data: () => {
            return inject(ProductResolver).resolve();
          }
        },
        runGuardsAndResolvers: 'always'
      }
    ]),
    GenButtonModule,
    GenSelectModule,
    GenOptionModule,
    GenPipesModule,
    StoreModule.forFeature(reducers.fromProducts.featureKey, reducers.fromProducts.reducer),
    EffectsModule.forFeature([effects.ProductsEffects])
  ],
  providers: [ProductResolver, ProductsService, services.products.ProductsService]
})
export class ProductsModule {}
