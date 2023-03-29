import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromShopping } from '@store/reducers';

declare type State = fromShopping.State;

export const selectState = createFeatureSelector<fromShopping.State>(fromShopping.featureKey);

export const selectAll = createSelector(selectState, fromShopping.selectAll);

export const selectAllData = () => {
  return createSelector(selectAll, (entities: any[]): any[] => {
    return entities;
  });
};

export const selectResumeTotal = () => {
  return createSelector(selectAll, (entities: any[]): number => {
    const total = entities?.reduce((accumulator: number, previousValue: any) => {
      accumulator += previousValue.total;
      return accumulator;
    }, 0);

    return total || 0;
  });
};

export const selectResumeQtd = () => {
  return createSelector(selectAll, (entities: any[]): number => {
    const qtd = entities?.reduce((accumulator: number, previousValue: any) => {
      accumulator += previousValue.qtd;
      return accumulator;
    }, 0);

    return qtd || 0;
  });
};

export const selectControl = () => {
  return createSelector(selectState, (state: State): any => {
    return state.control;
  });
};
