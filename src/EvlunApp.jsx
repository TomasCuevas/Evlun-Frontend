import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/**
 * @pages
 */
import {
  LoginPage,
  MainPage,
  SignupPage,
  LoadingPage,
  SettingsPage,
  ExplorePage,
  ProfilePage,
  PostPage,
} from './pages';

/**
 * @routes
 */
import { SettingsRoutes } from './router/SettingsRoutes';

/**
 * @hooks
 */
import { useAuthStore } from './hooks/useAuthStore';

export const EvlunApp = () => {
  const { status, startChecking } = useAuthStore();

  useEffect(() => {
    startChecking();
  }, []);

  if (status === 'checking') return <LoadingPage />;

  return (
    <>
      {status === 'not-authenticated' && (
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/profile/:username" element={<PostPage />} />
          <Route path="/post/:id" element={<ProfilePage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
      )}

      {status === 'authenticated' && (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/*" element={<SettingsRoutes />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
};
