import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/users/models/user.model';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  data: IUser[];
  total: number;
  error: unknown;
}

export const initialState: State = {
  data: [],
  total: 0,
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, action) => ({ ...state, data: action.data, total: action.total })),
  on(UserActions.loadUsersFailure, (state, action) => ({ ...state, error: action.error })),
  on(UserActions.resetUsers, () =>  initialState),

);
