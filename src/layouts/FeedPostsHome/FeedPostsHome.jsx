/**
 * @layout
 */
import { Post } from '../';

/**
 * @pages
 */
import { LoadingPage } from '../../pages/LoadingPage/LoadingPage';

/**
 * @styles
 */
import Styles from './FeedPostsHome.module.scss';

/**
 * @hooks
 */
import { usePostsStore } from '../../hooks/usePostsStore';

/**
 * @context
 */
import { PostContext } from '../../context';

export const FeedPostsHome = () => {
  const { posts, isLoading } = usePostsStore();

  if (isLoading) return <LoadingPage />;

  return (
    <section className={Styles.feedposts__container}>
      <div className={Styles.allposts__container}>
        {posts.map((post) => (
          <PostContext.Provider key={post._id} value={{ ...post }}>
            <Post />
          </PostContext.Provider>
        ))}
      </div>
    </section>
  );
};
