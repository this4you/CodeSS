import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { initUserData, loadUserData, updateUserData } from '../actions/user.actions';
import { User } from '../model/user.model';
import { UserApiService } from '../services/api/user-api.service';
//import { MoviesService } from './movies.service';
@Injectable()
export class UserEffects {

    loadUserData$ = createEffect(() => this.actions$.pipe(
        ofType(loadUserData),
        mergeMap(() => this.userApiService.get()
            .pipe(
                map(user => {
                    return initUserData(user as User); //({ type: 'InitUserData', payload: user })
                }),
                catchError(() => EMPTY)
            ))
    ));

    updateUserData$ = createEffect(() => this.actions$.pipe(
        ofType(updateUserData),
        exhaustMap(user =>
            this.userApiService.update(user)
                .pipe(map(() => initUserData(user))))
    ));

    constructor(
        private actions$: Actions,
        private userApiService: UserApiService
    ) { }
}