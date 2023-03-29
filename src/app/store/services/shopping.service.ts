import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { shopping as actions } from '@store/actions';
import * as selectors from '@store/selectors';
import { firstValueFrom } from 'rxjs';
import { CoreCommonsService } from 'src/app/core/services';

@Injectable()
export class ShoppingService extends CoreCommonsService {
  constructor(http: HttpClient, private store: Store, private router: Router) {
    super(http);
  }

  private async handleAdd(id: string, size: number) {
    const { store } = this;
    const data = await firstValueFrom(store.select(selectors.productDetails.selectById({ id })));

    const { price, name } = data;

    store.dispatch(
      actions.updateOne({
        data: {
          id,
          name,
          size,
          price,
          qtd: 1
        }
      })
    );
  }

  public add(id: string, size: number) {
    this.handleAdd(id, size);
  }

  public finish() {
    this.router.navigate(['/shopping-success']);
    this.store.dispatch(actions.clear());
  }
}
