import { createAction, props } from '@ngrx/store';

const clear = createAction('[Products] Clear All');
const load = createAction('[Products] Load');
const updateAll = createAction('[Products] Update All', props<{ data: any[] }>());
const updateControl = createAction('[Products] Update Control', props<{ data: any }>());

export { clear, load, updateAll, updateControl };
