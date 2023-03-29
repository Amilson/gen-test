import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { shopping as actions } from '@store/actions';
import { shopping as services } from '@store/services';
import { map } from 'rxjs/operators';

@Injectable()
export class ShoppingEffects {
  add$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(actions.add),
        map(({ id, size }) => {
          this.service.add(id, size);
        })
      );
    },
    {
      dispatch: false
    }
  );

  finish$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(actions.finish),
        map(() => {
          this.service.finish();
        })
      );
    },
    {
      dispatch: false
    }
  );

  constructor(private actions$: Actions, private service: services.ShoppingService) {
    // not to do
  }
}
