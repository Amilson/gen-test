import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromProducts } from '@store/reducers';
import { sortResult } from 'src/app/core/utils';
import { PaginationSortOptions } from 'src/app/interfaces';

declare type State = fromProducts.State;

export const selectState = createFeatureSelector<fromProducts.State>(fromProducts.featureKey);

export const selectAll = createSelector(selectState, fromProducts.selectAll);

export const selectAllData = (props: { sort: PaginationSortOptions }) => {
  return createSelector(selectAll, (entities: any[]): any[] => {
    const { field, type, direction } = props.sort;
    return sortResult(entities, {
      [field]: {
        type,
        direction
      }
    });
  });
};

export const selectById = (props: { id: string }) => {
  return createSelector(selectAll, (entities: any[]): any => {
    return entities.find(({ id }) => {
      return id === props.id;
    });
  });
};

export const selectControl = () => {
  return createSelector(selectState, (state: State): any => {
    return state.control;
  });
};
