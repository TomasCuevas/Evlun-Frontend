/**
 * @layout
 */
import { Post } from '../Post/Post';

/**
 * @styles
 */
import styles from './feedPosts.module.scss';

/**
 * @fixtureData
 */
import { posts } from '../../fixtures/posts';

export const FeedPost = () => {
  const allPosts = posts;

  return (
    <section className={styles.feedposts__container}>
      <div className={styles.allposts__container}>
        {allPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
