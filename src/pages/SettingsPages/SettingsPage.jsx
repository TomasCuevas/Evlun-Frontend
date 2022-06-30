/**
 * @components
 */
import { Main } from '../../components/Main/Main';
import { SettingOption } from '../../components/Settings/SettingOption';

/**
 * @layouts
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavTopSettings } from '../../layouts/NavTopSettings/NavTopSettings';

export const SettingsPage = () => {
  return (
    <>
      <NavTopSettings navText="Configuración" />
      <Nav />
      <Main>
        <SettingOption optionTitle="Tu cuenta" navigateLink="/settings/account" />
      </Main>
    </>
  );
};
