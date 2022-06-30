/**
 * @components
 */
import { Main } from '../../components/Main/Main';

/**
 * @layouts
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavTopSettings } from '../../layouts/NavTopSettings/NavTopSettings';

export const SettingsChangeYourPasswordPage = () => {
  return (
    <>
      <NavTopSettings navText="Cambia tu contraseña" />
      <Nav />
      <Main></Main>
    </>
  );
};
