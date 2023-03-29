import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as actions from '@store/actions';
import * as selectors from '@store/selectors';
import { firstValueFrom } from 'rxjs';
import { CoreCommonsService } from 'src/app/core/services';
import { ProductDetailsAddToCart } from 'src/app/interfaces';

@Injectable()
export class ProductDetailsService extends CoreCommonsService {
  constructor(http: HttpClient, private store: Store, private router: Router) {
    super(http);
  }

  private handleData() {
    const { __params } = this;
    const { id } = __params;
    this.store.dispatch(actions.productDetails.load({ id }));

    this.__data$ = this.store.select(selectors.productDetails.selectById({ id }));
    this.__control$ = this.store.select(selectors.productDetails.selectControl());

    this.__onDataChanged$.next(null);
  }

  resolve(params: any, queryParams: any) {
    this.__params = params;
    this.__queryParams = queryParams;
    this.handleData();
  }

  addToCart(data: ProductDetailsAddToCart) {
    this.store.dispatch(actions.shopping.add({ ...data }));
    this.router.navigate(['/shopping']);
  }

  async changeProduct(type: string) {
    const { __params, store, router } = this;
    const { id } = __params;
    const data = await firstValueFrom(store.select(selectors.productDetails.selectById({ id })));
    const action = data._links[type];
    router.navigate([`/product/details/${action}`]);
  }
}
