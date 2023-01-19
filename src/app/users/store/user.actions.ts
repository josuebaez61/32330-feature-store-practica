import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/user.model';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ page: number; per_page: number; }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: IUser[]; total: number; }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const resetUsers = createAction('[User] Reset Users')
