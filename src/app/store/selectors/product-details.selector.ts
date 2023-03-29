import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromProductDetails } from '@store/reducers';

declare type State = fromProductDetails.State;

export const selectState = createFeatureSelector<fromProductDetails.State>(
  fromProductDetails.featureKey
);

export const selectAll = createSelector(selectState, fromProductDetails.selectAll);

export const selectAllData = () => {
  return createSelector(selectAll, (entities: any[]): any[] => {
    return entities;
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
