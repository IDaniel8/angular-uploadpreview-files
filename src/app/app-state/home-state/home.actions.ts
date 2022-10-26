import { createAction } from '@ngrx/store';

/*
  Guide to write actions
  To consider write proper actions the rules are
  [COMPONENT_STATE_RELATED] {FEATURE_RELATED_REDUX_KEY} {ACTION_RELATED}

  in this example
  [HOME] Counter Sum | Substract
*/
export const homeCounterActionSum = createAction('[HOME] Counter Sum');
export const homeCounterActionSubstract = createAction(
  '[HOME] Counter Substract'
);
