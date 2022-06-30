/**
 * @components
 */
import { Main } from '../../components/Main/Main';

/**
 * @layout
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavTopSettings } from '../../layouts/NavTopSettings/NavTopSettings';

export const SettingsDeactivatePage = () => {
  return (
    <>
      <NavTopSettings navText="Desactivar la cuenta" />
      <Nav />
      <Main></Main>
    </>
  );
};
