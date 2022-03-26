import { createAction, props } from '@ngrx/store';
import { CodeModel } from '../../model/code.model';

export default {
    setCodes: createAction(
        'set:codes',
        props<{codes:CodeModel[]}>()
    ),
    getCodes: createAction(
        "get:codes",
        props<{categoryId?: string, limit?: number}>()
    )
}