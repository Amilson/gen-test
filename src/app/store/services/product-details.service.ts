import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { productDetails as actions } from '@store/actions';
import { firstValueFrom, map } from 'rxjs';
import { CoreCommonsService } from 'src/app/core/services';

@Injectable()
export class ProductDetailsService extends CoreCommonsService {
  private route = '/assets/data/products.json';

  constructor(http: HttpClient, private store: Store) {
    super(http);
  }

  private update(data: any[]) {
    this.store.dispatch(
      actions.updateAll({
        data
      })
    );
  }

  private updateControl(data: any) {
    this.store.dispatch(actions.updateControl({ data }));
  }

  private async loadData(id: string) {
    const { route } = this;
    this.updateControl({ isLoading: true });

    try {
      const data: any = await firstValueFrom(
        this.get(route).pipe(
          map((resp: any) => {
            return resp.find((_: any) => {
              return _.id === id;
            });
          })
        )
      );

      this.update([data]);
    } catch (e) {
      // not to do
    }

    setTimeout(() => {
      this.updateControl({ isLoading: false });
    }, 1000);
  }

  public load(id: string) {
    this.loadData(id);
  }
}
