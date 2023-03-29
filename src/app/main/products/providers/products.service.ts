import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as actions from '@store/actions';
import * as selectors from '@store/selectors';
import { CoreCommonsService } from 'src/app/core/services';
import { PaginationSortOptions } from 'src/app/interfaces';

@Injectable()
export class ProductsService extends CoreCommonsService {
  constructor(http: HttpClient, private store: Store, private router: Router) {
    super(http);
  }

  private handleData() {
    const { store, __queryParams } = this;
    store.dispatch(actions.products.load());

    let sort: PaginationSortOptions = {
      ...__queryParams
    };
    if (!sort.field) {
      sort = {
        field: 'ratting',
        type: 'number',
        direction: 'desc'
      };
    }

    this.__data$ = store.select(selectors.products.selectAllData({ sort }));
    this.__control$ = store.select(selectors.products.selectControl());
    this.__onDataChanged$.next(null);
  }

  resolve(params: any, queryParams: any) {
    this.__params = params;
    this.__queryParams = queryParams;
    this.handleData();
  }

  order(params: string) {
    try {
      const obj = JSON.parse(params);
      this.router.navigate(['/'], {
        queryParams: obj
      });
    } catch (e) {
      // not to do
    }
  }
}
