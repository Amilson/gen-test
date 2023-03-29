import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { products } from '@store/actions';

export const featureKey = 'gen-products';

export interface State extends EntityState<any> {
  control: {
    isLoading: boolean;
  };
  error: any;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: (item: any) => {
    return item.id;
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
  on(products.clear, (state: any) => {
    return adapter.removeAll(state);
  }),
  on(products.updateAll, (state, action) => {
    return adapter.upsertMany(action.data, {
      ...state
    });
  }),
  on(products.updateControl, (state, action) => {
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
