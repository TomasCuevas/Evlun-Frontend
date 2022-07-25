import PropTypes from 'prop-types';

/**
 * @styles
 */
import Styles from './OpenPostLikes.module.scss';

export const OpenPostLikes = ({ likesCount }) => {
  return (
    <section className={Styles.post__likes_container}>
      <div className={Styles.likes__container}>
        <span className={Styles.likes__count}>{likesCount}</span>
        <span className={Styles.likes__text}>Likes</span>
      </div>
    </section>
  );
};

OpenPostLikes.propTypes = {
  likesCount: PropTypes.number,
};
