import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { UserReducer } from './user.reducer';
import { environment } from '../../environments/environment';

export interface State {
    user: {login: string; email:string;}
}

export const reducers: ActionReducerMap<State> = {
    user: UserReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
