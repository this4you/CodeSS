import { createReducer, on } from '@ngrx/store';
import { codeActions } from '../actions';
import { CodeData } from 'src/app/model/codeData.model';

const initialState: CodeData = {
    codes: []
}

export const CodeReducer = createReducer(
    initialState,
    on(codeActions.setCodes, (state, payload) => {
        return ({
            ...state,
            codes : payload.codes
        })
    })
);