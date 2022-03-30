import { ActionReducerMap, MetaReducer} from '@ngrx/store';
import { UserReducer } from './user.reducer';
import { environment } from '../../../environments/environment';
import { User } from '../../model/user.model';
import { CodeData } from 'src/app/model/codeData.model';
import { CodeReducer } from './code.reducer';
import { LinkData } from 'src/app/model/linkData.model';
import { LinkReducer } from './link.reducer';

export interface State {
    user: User,
    codeData : CodeData,
    linksData: LinkData,
}



export const reducers: ActionReducerMap<State> = {
    user: UserReducer,
    codeData: CodeReducer,
    linksData: LinkReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
