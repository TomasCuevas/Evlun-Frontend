/**
 * @layout
 */
import { Post } from '../';

/**
 * @styles
 */
import Styles from './FeedPostsHome.module.scss';

/**
 * @fixtureData
 */
import { posts } from '../../fixtures/posts';

export const FeedPostsHome = () => {
  const allPosts = posts;

  return (
    <section className={Styles.feedposts__container}>
      <div className={Styles.allposts__container}>
        {allPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
