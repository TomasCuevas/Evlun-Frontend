import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

/**
 * @components
 */
import { Main } from '../../components/Main/Main';
import { Container } from '../../components/Container/Container';

/**
 * @pages
 */
import { LoadingPage } from '../LoadingPage/LoadingPage';

/**
 * @layouts
 */
import { FeedPostsProfile, Nav, NavTopProfile, ProfileHero } from '../../layouts';

/**
 * @hooks
 */
import { useProfileStore } from '../../hooks/useProfileStore';

export const ProfilePage = () => {
  const { isLoading, startLoading } = useProfileStore();
  const { username } = useParams();

  useEffect(() => {
    startLoading(username);
  }, [username]);

  if (isLoading) return <LoadingPage />;

  return (
    <Main>
      <NavTopProfile />
      <ProfileHero />
      <Container>
        <FeedPostsProfile />
      </Container>
      <Nav />
    </Main>
  );
};
