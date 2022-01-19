import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthState } from './auth.state';

export const selectAuth = (state: AppState): AuthState => state.auth;

export const selectAuthToken = createSelector(selectAuth, (state: AuthState) => state.token);
export const selectAuthisAuthenticated = createSelector(selectAuth, (state: AuthState) => state.isAuthenticated);
export const selectAuthError = createSelector(selectAuth, (state: AuthState) => state.error);
