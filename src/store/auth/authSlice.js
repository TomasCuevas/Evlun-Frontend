import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    errorMessage: undefined,
    status: 'checking',
    user: {},
  },
  reducers: {
    onLogin: (state, { payload }) => {
      state.errorMessage = undefined;
      state.status = 'authenticated';
      state.user = payload;
    },
    onLogout: (state, { payload }) => {
      state.errorMessage = payload || undefined;
      state.status = 'not-authenticated';
      state.user = {};
    },
    onCheckingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { onLogin, onLogout, onCheckingCredentials } = authSlice.actions;
