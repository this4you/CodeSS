import {createReducer, on } from '@ngrx/store';
import { userActions } from '../actions';
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
    on(userActions.setUser, (state, payload) => {
        return ({
            ...state,
            ...payload
        })
    })
);