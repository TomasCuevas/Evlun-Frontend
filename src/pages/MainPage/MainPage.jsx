/**
 * @components
 */
import { Main } from '../../components/Main/Main';

/**
 * layouts
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavSwitch } from '../../layouts/NavSwitch/NavSwitch';
import { NavTopHome } from '../../layouts/NavTopHome/NavTopHome';
import { FeedPost } from '../../layouts/FeedPosts/FeedPosts';

/**
 * @provider
 */
import { NavSwitchProvider } from '../../context/NavSwitchContext/NavSwitchContext';

export const MainPage = () => {
  return (
    <NavSwitchProvider>
      <NavTopHome />
      <Nav />
      <NavSwitch />
      <Main>
        <FeedPost />
      </Main>
    </NavSwitchProvider>
  );
};
