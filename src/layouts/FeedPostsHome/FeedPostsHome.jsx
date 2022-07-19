/**
 * @layout
 */
import { Post } from '../';

/**
 * @styles
 */
import Styles from './FeedPostsHome.module.scss';

/**
 * @hooks
 */
import { usePostsStore } from '../../hooks/usePostsStore';

export const FeedPostsHome = () => {
  const { posts } = usePostsStore();

  return (
    <section className={Styles.feedposts__container}>
      <div className={Styles.allposts__container}>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};
