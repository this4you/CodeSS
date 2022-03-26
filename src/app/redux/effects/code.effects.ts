import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap} from 'rxjs/operators';
import { userActions } from 'src/app/redux/actions'; 
import { CodeApiService } from 'src/app/services/api/code-api.service';
//import { MoviesService } from './movies.service';
@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private codeApiService: CodeApiService
    ) { }

    
}