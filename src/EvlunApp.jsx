import { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/**
 * @context
 */
import { AuthContext } from './context/AuthContext/AuthContext';

/**
 * @providers
 */
import { ProfileProvider } from './context/ProfileContext/ProfileContext';

/**
 * @pages
 */
import { ExplorePage } from './pages/ExplorePage/ExplorePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { MainPage } from './pages/MainPage/MainPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { SettingsPage } from './pages/SettingsPages/SettingsPage';
import { SignupPage } from './pages/SignupPage/SignupPage';

/**
 * @fixtureData
 */
import { user } from './fixtures/user';
import { SettingsRoutes } from './router/SettingsRoutes';

export const EvlunApp = () => {
  const { auth, loading } = useContext(AuthContext);

  const { login } = useContext(AuthContext);

  useEffect(() => {
    const onLogin = async () => {
      login('abc123', user);
    };

    onLogin();
  }, [auth]);

  return (
    <>
      {!loading && (
        <Routes>
          <Route path="/" element={auth ? <MainPage /> : <LoginPage />} />
          <Route path="/signup" element={auth ? <Navigate to="/" /> : <SignupPage />} />
          <Route path="/login" element={auth ? <Navigate to="/" /> : <LoginPage />} />
          <Route path="/explore" element={<ExplorePage />} />

          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/*" element={<SettingsRoutes />} />

          <Route
            path="/profile/:username"
            element={
              <ProfileProvider>
                <ProfilePage />
              </ProfileProvider>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
};
