import { createAction, props } from '@ngrx/store';
import { Link } from 'src/app/model/link.model';

export default {
    setLinks: createAction(
        'set:codes',
        props<{codes:Link[]}>()
    ),
    getLinks: createAction(
        "get:codes"
    )
}