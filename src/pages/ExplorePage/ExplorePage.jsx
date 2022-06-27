/**
 * @components
 */
import { Main } from '../../components/Main/Main';

/**
 * @layouts
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavSwitch } from '../../layouts/NavSwitch/NavSwitch';
import { NavTopExplore } from '../../layouts/NavTopExplore/NavTopExplore';

/**
 * @providers
 */
import { NavSwitchProvider } from '../../context/NavSwitchContext/NavSwitchContext';

export const ExplorePage = () => {
  return (
    <NavSwitchProvider>
      <NavTopExplore />
      <Nav />
      <NavSwitch />
      <Main></Main>
    </NavSwitchProvider>
  );
};
