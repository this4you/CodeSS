import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { UserReducer } from './user.reducer';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';

export interface State {
    user: User
}

export const reducers: ActionReducerMap<State> = {
    user: UserReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
