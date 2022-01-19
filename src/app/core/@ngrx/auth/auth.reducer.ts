import { AuthState, initialAuthState } from './auth.state';
import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeaturesKey = 'auth';


export const reducer = createReducer(
  initialAuthState,
  on(AuthActions.setTokenSuccess,( state, { token, isAuthenticated }) => {
    return {
      ...state,
      token,
      isAuthenticated,
    }
  }),
)


export function authReducer(state: AuthState, action: Action){
  return reducer(state, action)
}
