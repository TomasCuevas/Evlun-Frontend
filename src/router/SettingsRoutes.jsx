import { Route, Routes } from 'react-router-dom';

/**
 * pages
 */
import { SettingsAccountPage } from '../pages/SettingsPages/SettingsAccountPage';
import { SettingsUsernamePage } from '../pages/SettingsPages/SettingsUsernamePage';
import { SettingsChangeYourPasswordPage } from '../pages/SettingsPages/SettingsChangeYourPasswordPage';
import { SettingsCountryPage } from '../pages/SettingsPages/SettingsCountryPage';
import { SettingsDeactivatePage } from '../pages/SettingsPages/SettingsDeactivatePage';
import { SettingsEmailPage } from '../pages/SettingsPages/SettingsEmailPage';
import { SettingsGenderPage } from '../pages/SettingsPages/SettingsGenderPage';
import { SettingsPhonePage } from '../pages/SettingsPages/SettingsPhonePage';
import { SettingsYourDataPage } from '../pages/SettingsPages/SettingsYourDataPage';

export const SettingsRoutes = () => {
  return (
    <Routes>
      <Route path="/account" element={<SettingsAccountPage />} />
      <Route path="/your_evlun_data" element={<SettingsYourDataPage />} />
      <Route path="/password" element={<SettingsChangeYourPasswordPage />} />
      <Route path="/deactivate" element={<SettingsDeactivatePage />} />
      <Route path="/screen_name" element={<SettingsUsernamePage />} />
      <Route path="/phone" element={<SettingsPhonePage />} />
      <Route path="/email" element={<SettingsEmailPage />} />
      <Route path="/country" element={<SettingsCountryPage />} />
      <Route path="/gender" element={<SettingsGenderPage />} />
    </Routes>
  );
};
