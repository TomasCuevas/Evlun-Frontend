import { useEffect } from 'react';

/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Main } from '../../components/Main/Main';

/**
 * @layouts
 */
import { FeedPostsHome, Nav, NavSwitch, NavTopHome, NewPost } from '../../layouts';

/**
 * @pages
 */
import { LoadingPage } from '../LoadingPage/LoadingPage';

/**
 * @provider
 */
import { NavSwitchProvider } from '../../context/NavSwitchContext/NavSwitchContext';

/**
 * @hooks
 */
import { usePostsStore } from '../../hooks/usePostsStore';

export const MainPage = () => {
  const { isLoading, startLoadingPosts } = usePostsStore();

  useEffect(() => {
    startLoadingPosts();
  }, []);

  if (isLoading) return <LoadingPage />;

  return (
    <NavSwitchProvider>
      <NavSwitch />
      <Main>
        <NavTopHome />
        <Container mt={30}>
          <NewPost />
          <FeedPostsHome />
        </Container>
        <Nav />
      </Main>
    </NavSwitchProvider>
  );
};
