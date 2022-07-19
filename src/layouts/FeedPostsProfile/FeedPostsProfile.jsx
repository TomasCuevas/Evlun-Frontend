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

export const FeedPostsProfile = () => {
  const { posts } = useProfileStore();

  console.log(posts);

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
