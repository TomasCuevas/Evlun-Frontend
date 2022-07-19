import { configureStore } from '@reduxjs/toolkit';

/**
 * @slices
 */
import { authSlice } from './auth/authSlice';
import { profileSlice } from './profile/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile: profileSlice.reducer,
  },
});
