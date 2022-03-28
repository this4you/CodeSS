import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap} from 'rxjs/operators';
import { userActions } from 'src/app/redux/actions'; 
import { User } from '../../model/user.model';
import { UserApiService } from '../../services/api/user-api.service';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userApiService: UserApiService
    ) { }
    
    loadUserData$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.getUser),
        mergeMap(() => this.userApiService.get()
            .pipe(
                map(user => {
                    return userActions.setUser(user as User);
                }),
                catchError(() => EMPTY)
            ))
    ));

    updateUserData$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.updateUser),
        exhaustMap(user =>
            this.userApiService.update(user)
                .pipe(map(() => userActions.setUser(user))))
    ));
}