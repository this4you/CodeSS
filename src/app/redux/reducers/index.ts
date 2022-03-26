import { ActionReducerMap, MetaReducer} from '@ngrx/store';
import { UserReducer } from './user.reducer';
import { environment } from '../../../environments/environment';
import { User } from '../../model/user.model';
import { CodeData } from 'src/app/model/codeData.model';
import { CodeReducer } from './code.reducer';

export interface State {
    user: User,
    codeData : CodeData
}

export const reducers: ActionReducerMap<State> = {
    user: UserReducer,
    codeData: CodeReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
