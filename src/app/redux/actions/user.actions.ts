import { createAction, props } from '@ngrx/store';
import { User } from '../../model/user.model';

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