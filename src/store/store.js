import { configureStore } from '@reduxjs/toolkit';

/**
 * @slices
 */
import { authSlice } from './auth/authSlice';
import { postsSlice } from './posts/postsSlice';
import { profileSlice } from './profile/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    posts: postsSlice.reducer,
    profile: profileSlice.reducer,
  },
});
