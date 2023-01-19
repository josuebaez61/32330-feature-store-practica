import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectUsersData = createSelector(
  selectUserState,
  (usersState) => usersState.data
);

export const selectTotalNumberOfUsers = createSelector(
  selectUserState,
  (usersState) => usersState.total
);
