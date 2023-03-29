import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { shopping } from '@store/actions';

export const featureKey = 'gen-shopping';

export interface State extends EntityState<any> {
  control: {
    isLoading: boolean;
  };
  error: any;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: (item: any) => {
    return `${item.id}-${item.size}`;
  }
});

export const initialState: State = adapter.getInitialState({
  control: {
    isLoading: false
  },
  error: null,
  pagination: null
});

export const reducer = createReducer(
  initialState,
  on(shopping.clear, (state: any) => {
    return adapter.removeAll(state);
  }),
  on(shopping.action, (state, action) => {
    const { data } = action;
    const { type, model } = data;
    const { id, size, price } = model;
    let { qtd } = model;
    const handledId = `${id}-${size}`;
    if (qtd === 1 && type === 'sub') {
      return adapter.removeOne(handledId, {
        ...state
      });
    }
    if (type === 'sub') {
      qtd -= 1;
    } else {
      qtd += 1;
    }
    const handledPrice = price * qtd;

    const handledData = {
      ...model,
      total: handledPrice,
      qtd
    };

    return adapter.upsertOne(handledData, {
      ...state
    });
  }),
  on(shopping.updateOne, (state, action) => {
    const { data } = action;
    const { id, size, qtd, price } = data;
    const handled = state.entities[`${id}-${size}`];
    const handledQtd = (handled?.qtd || 0) + (qtd || 1);
    const handledPrice = price * handledQtd;
    const handledData = {
      ...data,
      total: handledPrice,
      qtd: handledQtd
    };

    return adapter.upsertOne(handledData, {
      ...state
    });
  }),
  on(shopping.updateControl, (state, action) => {
    return {
      ...state,
      control: {
        ...state.control,
        ...action.data
      }
    };
  })
);

export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
