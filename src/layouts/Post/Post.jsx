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
import Styles from './post.module.scss';

export const Post = ({ post }) => {
  return (
    <article className={Styles.post__container}>
      <PostAvatarSection
        avatar={post.added_by.avatar}
        name={post.added_by.name}
        username={post.added_by.username}
      />

      <div className={Styles.post__section}>
        <PostTop name={post.added_by.name} username={post.added_by.username} date={post.date} />
        <PostContent _id={post._id} content={post.content} />
        <PostBottom />
      </div>
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
