import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    errorMessage: undefined,
    isLoading: true,
    status: 'checking',
    user: {},
  },
  reducers: {
    onLogin: (state, { payload }) => {
      state.errorMessage = undefined;
      state.isLoading = false;
      state.status = 'authenticated';
      state.user = payload;
    },
    onLogout: (state, { payload }) => {
      state.errorMessage = payload || undefined;
      state.isLoading = false;
      state.status = 'not-authenticated';
      state.user = {};
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { onLogin, onLogout, checkingCredentials } = authSlice.actions;
