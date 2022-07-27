import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Main } from '../../components/Main/Main';

/**
 * @layouts
 */
import { Nav, NavTopPost, NewComment, OpenPost, FeedComments } from '../../layouts';

/**
 * @pages
 */
import { LoadingPage } from '../LoadingPage/LoadingPage';

/**
 * @hooks
 */
import { useCommentsStore, usePostsStore } from '../../hooks';

export const PostPage = () => {
  const { isLoading, startLoadingOpenPost } = usePostsStore();
  const { startLoadingComments } = useCommentsStore();
  const { id } = useParams();

  useEffect(() => {
    startLoadingOpenPost(id);
    startLoadingComments(id);
  }, [id]);

  if (isLoading) return <LoadingPage />;

  return (
    <>
      <Nav />
      <NavTopPost />
      <Main>
        <Container mt={20}>
          <OpenPost />
          <NewComment />
          <FeedComments />
        </Container>
      </Main>
    </>
  );
};
