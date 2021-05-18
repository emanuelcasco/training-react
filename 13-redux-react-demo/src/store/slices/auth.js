import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { isAuthenticated: false };

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    login(state, { payload }) {
      state.isAuthenticated = true;
    },
    logout(state, { payload }) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
