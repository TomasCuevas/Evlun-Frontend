import PropTypes from 'prop-types';

/**
 * @components
 */
import { PostAvatarSection, PostBottom, PostContent, PostTop } from '../../components/Post';

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
        <PostBottom postId={post._id} likes={post.likes} comments={post.comments} />
      </div>
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
