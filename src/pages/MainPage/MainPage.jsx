/**
 * @components
 */
import { Main } from '../../components/Main/Main';

/**
 * layouts
 */
import { FeedPost } from '../../layouts/FeedPosts/FeedPosts';
import { Nav } from '../../layouts/Nav/Nav';
import { NavSwitch } from '../../layouts/NavSwitch/NavSwitch';
import { NavTopHome } from '../../layouts/NavTopHome/NavTopHome';
import { NewPost } from '../../layouts/NewPost/NewPost';

/**
 * @provider
 */
import { NavSwitchProvider } from '../../context/NavSwitchContext/NavSwitchContext';
import { Container } from '../../components/Container/Container';

export const MainPage = () => {
  return (
    <NavSwitchProvider>
      <NavTopHome />
      <Nav />
      <NavSwitch />
      <Main>
        <Container mt={30}>
          <NewPost />
          <FeedPost />
        </Container>
      </Main>
    </NavSwitchProvider>
  );
};
