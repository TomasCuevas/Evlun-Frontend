import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    errorMessage: undefined,
    isCreating: false,
    isLoading: false,
    lt: undefined,
  },
  reducers: {
    onLoading: (state, { payload }) => {
      state.isLoading = true;
      state.lt = payload || undefined;
    },
    onCreating: (state) => {
      state.isCreating = true;
    },
    onSetComments: (state, { payload }) => {
      state.comments = payload;
      state.isLoading = false;
    },
    onAddNewComment: (state, { payload }) => {
      state.isCreating = false;
      const newComment = state.comments;
      newComment.unshift(payload);
      state.comments = newComment;
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
  onAddNewComment,
  onClearErrorMessage,
  onCreating,
  onLoading,
  onSetComments,
  onSetErrorMessage,
} = commentsSlice.actions;
