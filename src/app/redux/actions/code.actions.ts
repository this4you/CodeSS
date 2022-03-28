import { createAction, props } from '@ngrx/store';
import { CodeParams } from 'src/app/services/api/code-api.service';
import { CodeModel } from '../../model/code.model';

export default {
    setCodes: createAction(
        'set:codes',
        props<{codes:CodeModel[]}>()
    ),
    getCodes: createAction(
        "get:codes",
        props<{params: CodeParams}>()
    )
}