import { useEffect, useContext } from 'react';

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

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

/**
 * @fixtureData
 */
import { user } from '../../fixtures/user';

export const MainPage = () => {
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const onLogin = async () => {
      login('abc123', user);
    };

    onLogin();
  }, []);

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
