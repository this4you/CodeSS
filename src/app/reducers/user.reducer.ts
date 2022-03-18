import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
export const UserReducer = createReducer(
    {
        login: "",
        email: ""
    },
    on(UserActions.initUserData, (state, payload) => {
        return ({
            ...state,
            email: payload.email,
            login: payload.login
        })
    })
);