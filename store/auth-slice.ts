import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: any | null;
  auth: any | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoading: true,
  auth: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    setAuth: (state, action: PayloadAction<any>) => {
      state.auth = action.payload;
      state.isLoading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.auth = null;
      state.isLoading = false;
    },
  },
});

export const { setUser, clearUser, setAuth } = authSlice.actions;
export default authSlice.reducer;
