import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

/**
 * @components
 */
import { Main } from '../../components/Main/Main';
import { Container } from '../../components/Container/Container';

/**
 * @layouts
 */
import { FeedPost } from '../../layouts/FeedPosts/FeedPosts';
import { Nav } from '../../layouts/Nav/Nav';
import { NavTopProfile } from '../../layouts/NavTopProfile/NavTopProfile';
import { ProfileHero } from '../../layouts/ProfileHero/ProfileHero';

/**
 * @provider
 */
import { NavSwitchProvider } from '../../context/NavSwitchContext/NavSwitchContext';

/**
 * @context
 */
import { ProfileContext } from '../../context/ProfileContext/ProfileContext';

export const ProfilePage = () => {
  const { onChangeUsername } = useContext(ProfileContext);
  const { username } = useParams();

  useEffect(() => {
    onChangeUsername(username);
  }, [username]);

  return (
    <NavSwitchProvider>
      <Nav />
      <NavTopProfile />
      <Main>
        <ProfileHero />
        <Container>
          <FeedPost />
        </Container>
      </Main>
    </NavSwitchProvider>
  );
};
