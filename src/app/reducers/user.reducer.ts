import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '../model/user.model';

const initialState: User = {
    id: '',
    name: '',
    login: '',
    email: '',
    avatar: ''
}

export const UserReducer = createReducer(
    initialState,
    on(UserActions.initUserData, (state, payload) => {
        return ({
            ...state,
            ...payload
        })
    })
);