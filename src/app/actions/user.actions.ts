import { createAction, props } from '@ngrx/store';

export const initUserData = createAction(
  'InitUserData',
  props<{ login: string; email: string }>()
);

export const loadUserData = createAction('LoadUserData')

