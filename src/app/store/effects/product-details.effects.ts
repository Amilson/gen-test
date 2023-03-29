import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { productDetails as actions } from '@store/actions';
import { productDetails as services } from '@store/services';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductDetailsEffects {
  load$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(actions.load),
        map(({ id }) => {
          this.service.load(id);
        })
      );
    },
    {
      dispatch: false
    }
  );

  constructor(private actions$: Actions, private service: services.ProductDetailsService) {
    // not to do
  }
}
