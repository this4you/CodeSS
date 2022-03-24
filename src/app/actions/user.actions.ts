import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

export const initUserData = createAction(
    'InitUserData',
    props<User>()
);

export const updateUserData = createAction(
    "UpdateUserData",
    props<User>()
);

export const updateUserAvatar = createAction(
    "UpdateUserData",
    props<FormData>()
);

export const loadUserData = createAction('LoadUserData')