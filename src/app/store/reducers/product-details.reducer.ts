import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { productDetails } from '@store/actions';

export const featureKey = 'gen-product-details';

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
  on(productDetails.clear, (state: any) => {
    return adapter.removeAll(state);
  }),
  on(productDetails.updateAll, (state, action) => {
    return adapter.upsertMany(action.data, {
      ...state
    });
  }),
  on(productDetails.updateControl, (state, action) => {
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
