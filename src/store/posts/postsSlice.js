import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    errorMessage: undefined,
    isLoading: false,
    lt: undefined,
    posts: [],
    openPost: {},
  },
  reducers: {
    onLoading: (state, { payload }) => {
      state.isLoading = true;
      state.lt = payload || undefined;
    },
    onSetPosts: (state, { payload }) => {
      state.posts = payload;
      state.isLoading = false;
    },
    onSetOpenPost: (state, { payload }) => {
      state.openPost = payload;
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

export const { onLoading, onSetPosts, onSetOpenPost, onSetErrorMessage, onClearErrorMessage } =
  postsSlice.actions;
