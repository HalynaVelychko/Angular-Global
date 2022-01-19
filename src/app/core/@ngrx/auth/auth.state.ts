export interface AuthState {
  token: string;
  isAuthenticated: boolean;
  error: Error | null;
}

export const initialAuthState: AuthState = {
  token: localStorage.getItem('token') || '',
  isAuthenticated: !!localStorage.getItem('token'),
  error: null,
};
