import { createAction, props } from '@ngrx/store';

import { Error } from '@appmodels/error.model';
import { IUser } from '@appmodels/user.model';

export const getUserListRequest = createAction('[USERS] Get User List Request');
export const getUserListSuccess = createAction(
  '[USERS] Get User List Success',
  props<{ users: IUser[] }>()
);
export const getUserListError = createAction(
  '[USERS] Get User List Error',
  props<{ error: Error }>()
);
