/**
 * @components
 */
import { Main } from '../../components/Main/Main';

/**
 * @layouts
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavTopSettings } from '../../layouts/NavTopSettings/NavTopSettings';
import { SettingOption } from '../../layouts/SettingOption/SettingOption';

export const SettingsPage = () => {
  return (
    <>
      <NavTopSettings />
      <Nav />
      <Main>
        <SettingOption optionText='Tu cuenta' navigateLink='/setting/account' />
        <SettingOption optionText='Privacidad y seguridad' navigateLink='/setting/privacy' />
      </Main>
    </>
  );
};
