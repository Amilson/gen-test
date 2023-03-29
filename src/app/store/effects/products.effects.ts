import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { products as actions } from '@store/actions';
import { products as services } from '@store/services';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
  load$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(actions.load),
        map(() => {
          this.service.load();
        })
      );
    },
    {
      dispatch: false
    }
  );

  constructor(private actions$: Actions, private service: services.ProductsService) {
    // not to do
  }
}
