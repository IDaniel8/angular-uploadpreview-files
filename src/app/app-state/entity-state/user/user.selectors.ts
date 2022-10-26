import { createSelector } from '@ngrx/store';
import { adapter, userReducer } from './user.reducer';
import { entityReducer } from '../entity.reducer';

const userFeatureSelector = createSelector(
  entityReducer.selectAppEntitiesState,
  userReducer.selectUsersState
);

const userAdapterSelectors = adapter.getSelectors();

export const selectAllUsers = createSelector(
  userFeatureSelector,
  userAdapterSelectors.selectAll
);
