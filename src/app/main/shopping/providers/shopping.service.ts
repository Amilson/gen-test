import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as actions from '@store/actions';
import * as selectors from '@store/selectors';
import { CoreCommonsService } from 'src/app/core/services';

@Injectable()
export class ShoppingService extends CoreCommonsService {
  constructor(http: HttpClient, private store: Store, private router: Router) {
    super(http);
  }

  private handleData() {
    this.__data$ = this.store.select(selectors.shopping.selectAll);
    this.__control$ = this.store.select(selectors.shopping.selectControl());

    this.__onDataChanged$.next(null);
  }

  resolve(params: any, queryParams: any) {
    this.__params = params;
    this.__queryParams = queryParams;
    this.handleData();
  }

  action(event: any) {
    const { store } = this;
    if (event?.type === 'clear') {
      store.dispatch(actions.shopping.clear());
    } else if (event?.type === 'finish') {
      store.dispatch(actions.shopping.finish());
    } else {
      store.dispatch(actions.shopping.action({ data: event }));
    }
  }
}
