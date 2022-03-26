import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

// export const initUserData = createAction(
//     'InitUserData',
//     props<User>()
// );

// export const updateUserData = createAction(
//     "UpdateUserData",
//     props<User>()
// );

// export const loadUserData = createAction('LoadUserData')


export default {
    setUser: createAction(
        'set:user',
        props<User>()
    ),
    updateUser: createAction(
        "update:user",
        props<User>()
    ),
    getUser: createAction('get:user')
}