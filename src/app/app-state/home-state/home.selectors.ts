import { createSelector } from '@ngrx/store';
import { homeReducer } from './home.reducer';

const homeFeatureSelector = homeReducer.selectHomeState;

export const homeCounterSelector = createSelector(
  homeFeatureSelector,
  (state) => state.counter
);
