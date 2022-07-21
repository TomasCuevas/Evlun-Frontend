import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Main } from '../../components/Main/Main';
import { usePostsStore } from '../../hooks/usePostsStore';

/**
 * @layouts
 */
import { Nav, NavTopPost, OpenPost } from '../../layouts';
import { LoadingPage } from '../LoadingPage/LoadingPage';

export const PostPage = () => {
  const { isLoading, startLoadingOpenPost } = usePostsStore();
  const { id } = useParams();

  useEffect(() => {
    startLoadingOpenPost(id);
  }, [id]);

  if (isLoading) return <LoadingPage />;

  return (
    <>
      <Nav />
      <NavTopPost />
      <Main>
        <Container mt={20}>
          <OpenPost />
        </Container>
      </Main>
    </>
  );
};
