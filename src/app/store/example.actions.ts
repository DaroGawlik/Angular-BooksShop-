import { Action, createAction, props } from '@ngrx/store';
// import { Action } from 'rxjs/internal/scheduler/Action';

// APPROACH 1

export const increment = createAction(
  '[Example] Increment',
  props<{ orders: number }>()
);
export const decrement = createAction(
  '[Example] Decrement',
  props<{ order: number }>()
);

// APPROACH 2

// export const INCREMENT = '[Counter] Increment';

// export class IncrementAction implements Action {
//   readonly type = INCREMENT;

//   constructor(public orders: number) {}
// }

// export type CounterActions = IncrementAction;
