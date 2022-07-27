/**
 * @layout
 */
import { Post } from '../';

/**
 * @hooks
 */
import { useProfileStore } from '../../hooks/useProfileStore';

/**
 * @styles
 */
import Styles from './FeedPostsProfile.module.scss';

/**
 * @context
 */
import { PostContext } from '../../context';

export const FeedPostsProfile = () => {
  const { posts } = useProfileStore();

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
