import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/models/app-state.model';
import { IUser } from '../models/user.model';
import { selectTotalNumberOfUsers, selectUsersData } from '../store/user.selectors';
import { loadUsers, resetUsers } from '../store/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users$: Observable<IUser[]>;
  public totalUsers$: Observable<number>;

  constructor(private readonly store: Store<AppState>) {
    this.users$ = this.store.select(selectUsersData);
    this.totalUsers$ = this.store.select(selectTotalNumberOfUsers)
  }

  loadUsers(page: number, per_page: number): void {
    this.store.dispatch(loadUsers({ page, per_page }));
  }

  resetUsers(): void {
    this.store.dispatch(resetUsers());
  }
}
