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
import { SettingsAccountPage } from './pages/SettingsPages/SettingsAccountPage';
import { SettingsChangeYourPasswordPage } from './pages/SettingsPages/SettingsChangeYourPasswordPage';
import { SettingsDeactivatePage } from './pages/SettingsPages/SettingsDeactivatePage';
import { SettingsPage } from './pages/SettingsPages/SettingsPage';
import { SettingsYourDataPage } from './pages/SettingsPages/SettingsYourDataPage';
import { SignupPage } from './pages/SignupPage/SignupPage';

/**
 * @fixtureData
 */
import { user } from './fixtures/user';

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

          <Route path="/settings">
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/settings/account">
              <Route path="/settings/account" element={<SettingsAccountPage />} />
              <Route path="/settings/account/your_evlun_data" element={<SettingsYourDataPage />} />
              <Route
                path="/settings/account/password"
                element={<SettingsChangeYourPasswordPage />}
              />
              <Route path="/settings/account/deactivate" element={<SettingsDeactivatePage />} />
            </Route>
          </Route>

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
