export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

// Replace with your store setup (zustand/redux). Minimal placeholder.
export const initialAuthState: AuthState = {
  token: null,
  isAuthenticated: false,
};
