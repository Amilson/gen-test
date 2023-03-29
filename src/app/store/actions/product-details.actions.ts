import { createAction, props } from '@ngrx/store';

const clear = createAction('[ProductDetails] Clear All');
const load = createAction('[ProductDetails] Load', props<{ id: string }>());
const updateAll = createAction('[ProductDetails] Update All', props<{ data: any[] }>());
const updateControl = createAction('[ProductDetails] Update Control', props<{ data: any }>());

export { clear, load, updateAll, updateControl };
