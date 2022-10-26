import * as userActions from './user.actions';

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';

import { Error } from '@appmodels/error.model';
import { IUser } from '@appmodels/user.model';

export const adapter = createEntityAdapter<IUser>();

export interface UserState extends EntityState<IUser> {
  error: Error | null;
}
const initialState: UserState = {
  ...adapter.getInitialState(),
  error: null,
};

export const userReducer = createFeature({
  name: 'users',
  reducer: createReducer(
    initialState,
    on(userActions.getUserListSuccess, (state, action) => {
      return {
        ...adapter.addMany(action.users, state),
        error: null,
      };
    }),
    on(userActions.getUserListError, (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    })
  ),
});
