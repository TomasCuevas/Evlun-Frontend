import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    errorMessage: undefined,
    isLoading: false,
    lt: undefined,
    posts: [],
    user: {},
  },
  reducers: {
    onLoading: (state, { payload }) => {
      state.isLoading = true;
      state.lt = payload;
    },
    onStopLoading: (state) => {
      state.isLoading = false;
    },
    onSetUser: (state, { payload }) => {
      state.user = payload;
    },
    onSetPosts: (state, { payload }) => {
      state.posts = payload || [];
      state.isLoading = false;
    },
    onSetErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
      state.isLoading = false;
    },
    onClearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  onLoading,
  onStopLoading,
  onSetUser,
  onSetPosts,
  onSetErrorMessage,
  onClearErrorMessage,
} = profileSlice.actions;
