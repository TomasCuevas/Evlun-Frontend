import PropTypes from 'prop-types';

/**
 * @components
 */
import { PostAvatarSection } from '../../components/Post/PostAvatarSection';
import { PostBottom } from '../../components/Post/PostBottom';
import { PostContent } from '../../components/Post/PostContent';
import { PostTop } from '../../components/Post/PostTop';

/**
 * @styles
 */
import styles from './post.module.scss';

export const Post = ({ post }) => {
  return (
    <article className={styles.post__container}>
      <PostAvatarSection
        avatar={post.added_by.avatar}
        name={post.added_by.name}
      />

      <div className={styles.post__section}>
        <PostTop
          name={post.added_by.name}
          username={post.added_by.username}
          date={post.date}
        />
        <PostContent content={post.content} />
        <PostBottom />
      </div>
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
