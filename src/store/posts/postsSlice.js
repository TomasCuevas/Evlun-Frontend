import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    errorMessage: undefined,
    isLoading: false,
    lt: undefined,
    posts: [],
  },
  reducers: {
    onLoading: (state, { payload }) => {
      state.isLoading = true;
      state.lt = payload;
    },
    onSetPosts: (state, { payload }) => {
      state.posts = payload;
      state.isLoading = false;
    },
    onSetErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    onClearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onLoading, onSetPosts, onSetErrorMessage, onClearErrorMessage } = postsSlice.actions;
