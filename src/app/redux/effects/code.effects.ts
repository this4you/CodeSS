import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { CodeModel } from 'src/app/model/code.model';
import { codeActions } from 'src/app/redux/actions';
import { CodeApiService } from 'src/app/services/api/code-api.service';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private codeApiService: CodeApiService
    ) { }

    loadCodesData$ = createEffect(() => this.actions$.pipe(
        ofType(codeActions.getCodes),
        exhaustMap(payload =>
            this.codeApiService.getAll(payload.params)
                .pipe(
                    map((codes) => codeActions.setCodes({ codes: codes as CodeModel[] })),
                    catchError(() => EMPTY)))
    ));
}