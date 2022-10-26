import { combineReducers, createFeature } from '@ngrx/store';

import { userReducer, UserState } from './user/user.reducer';

export interface EntityState {
  [userReducer.name]: UserState;
}

export const entityReducer = createFeature({
  name: 'appEntities',
  reducer: combineReducers({
    [userReducer.name]: userReducer.reducer,
  }),
});
