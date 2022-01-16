import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';
import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  SetToken = '[Auth] Set user token',
  SetTokenSuccess = '[Auth] Set user token success',
  SetTokenFail = '[Auth] Set user token success',
  RemoveToken = '[Auth] Remove',
  RemoveTokenSuccess = '[Auth] Remove Success',
}
export class SetToken implements Action {
  readonly type = AuthActionTypes.SetToken;
  constructor(public payload: { login: string, password: string }) { }
}

export const setToken = createAction(AuthActionTypes.SetToken, props<{ login: string, password: string }>());
export const setTokenSuccess = createAction(AuthActionTypes.SetTokenSuccess, props<{ token: string, isAuthenticated: boolean}>());
export const setTokenFail = createAction(AuthActionTypes.SetTokenFail, props<{ error: Error }>());

export const removeToken = createAction(AuthActionTypes.RemoveToken);
