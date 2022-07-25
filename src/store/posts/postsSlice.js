import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    errorMessage: undefined,
    isLoading: false,
    isCreating: false,
    lt: undefined,
    posts: [],
    openPost: {},
  },
  reducers: {
    onLoading: (state, { payload }) => {
      state.isLoading = true;
      state.lt = payload || undefined;
    },
    onCreating: (state) => {
      state.isCreating = true;
    },
    onSetPosts: (state, { payload }) => {
      state.posts = payload;
      state.isLoading = false;
    },
    onAddNewPost: (state, { payload }) => {
      state.isCreating = false;
      const newPosts = state.posts;
      newPosts.unshift(payload);
      state.posts = newPosts;
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

export const {
  onAddNewPost,
  onClearErrorMessage,
  onCreating,
  onLoading,
  onSetErrorMessage,
  onSetOpenPost,
  onSetPosts,
} = postsSlice.actions;
