import { createReducer, on, createFeature } from '@ngrx/store';
import * as homeActions from './home.actions';

export interface HomeState {
  counter: number;
}
const initialState: HomeState = {
  counter: 0,
};

export const homeReducer = createFeature({
  name: 'home',
  reducer: createReducer(
    initialState,
    on(homeActions.homeCounterActionSum, (state) => {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }),
    on(homeActions.homeCounterActionSubstract, (state) => {
      return {
        ...state,
        counter: state.counter - 1,
      };
    })
  ),
});
