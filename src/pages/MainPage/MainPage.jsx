import { useEffect } from 'react';

/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Main } from '../../components/Main/Main';

/**
 * layouts
 */
import { FeedPostsHome, Nav, NavSwitch, NavTopHome, NewPost } from '../../layouts';

/**
 * @provider
 */
import { NavSwitchProvider } from '../../context/NavSwitchContext/NavSwitchContext';

/**
 * @hooks
 */
import { usePostsStore } from '../../hooks/usePostsStore';

export const MainPage = () => {
  const { startLoading } = usePostsStore();

  useEffect(() => {
    startLoading();
  }, []);

  return (
    <NavSwitchProvider>
      <NavTopHome />
      <Nav />
      <NavSwitch />
      <Main>
        <Container mt={30}>
          <NewPost />
          <FeedPostsHome />
        </Container>
      </Main>
    </NavSwitchProvider>
  );
};
