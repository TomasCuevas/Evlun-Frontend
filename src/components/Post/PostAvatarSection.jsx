import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './postAvatarSection.module.scss';

export const PostAvatarSection = ({ avatar, name }) => {
  return (
    <div className={styles.avatar__section}>
      <img src={avatar} alt={name} className={styles.avatar} />
    </div>
  );
};

PostAvatarSection.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
