import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

/**
 * @components
 */
import { Main } from '../../components/Main/Main';
import { Container } from '../../components/Container/Container';

/**
 * @layouts
 */
import { FeedPostsProfile, Nav, NavTopProfile, ProfileHero } from '../../layouts';

/**
 * @provider
 */
import { NavSwitchProvider } from '../../context/NavSwitchContext/NavSwitchContext';

/**
 * @hooks
 */
import { useProfileStore } from '../../hooks/useProfileStore';

export const ProfilePage = () => {
  const { startLoading } = useProfileStore();
  const { username } = useParams();

  useEffect(() => {
    startLoading(username);
  }, [username]);

  return (
    <NavSwitchProvider>
      <Nav />
      <NavTopProfile />
      <Main>
        <ProfileHero />
        <Container>
          <FeedPostsProfile />
        </Container>
      </Main>
    </NavSwitchProvider>
  );
};
