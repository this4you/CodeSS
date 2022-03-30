import { createReducer, on } from '@ngrx/store';
import { linkActions } from '../actions';
import { LinkData } from 'src/app/model/linkData.model';

const initialState: LinkData = {
    links: []
}

export const LinkReducer = createReducer(
    initialState,
    on(linkActions.setLinks, (state, payload) => {
        return ({
            ...state,
            links : payload.codes
        })
    })
);