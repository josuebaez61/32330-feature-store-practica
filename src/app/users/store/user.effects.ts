import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UserActions from './user.actions';
import { IUser } from '../models/user.model';

export interface IUsersListResponse {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        IUser[];
  support:     Support | null;
}

export interface Support {
  url:  string;
  text: string;
}

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(UserActions.loadUsers),
      concatMap((action) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.loadUsers(action.page, action.per_page).pipe(
          map(({ data, total }) => UserActions.loadUsersSuccess({ data, total })),
          catchError(error => of(UserActions.loadUsersFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private readonly httpClient: HttpClient) {}

  private loadUsers(page = 1, per_page = 6): Observable<IUsersListResponse> {
    return this.httpClient.get<IUsersListResponse>('https://reqres.in/api/users', {
      params: {
        page,
        per_page,
      },
    })
  }
}
