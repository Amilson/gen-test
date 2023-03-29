import { createAction, props } from '@ngrx/store';

const action = createAction('[Shopping] Action', props<{ data: any }>());
const add = createAction('[Shopping] Add', props<{ id: string; size: number }>());
const clear = createAction('[Shopping] Clear All');
const finish = createAction('[Shopping] Finish');
const load = createAction('[Shopping] Load');
const updateControl = createAction('[Shopping] Update Control', props<{ data: any }>());
const updateOne = createAction('[Shopping] Update All', props<{ data: any }>());

export { action, add, clear, finish, load, updateControl, updateOne };
