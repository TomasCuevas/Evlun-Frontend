import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './postAvatarSection.module.scss';

export const PostAvatarSection = ({ avatar, name, username }) => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/profile/${username}`);
  };

  return (
    <section onClick={onNavigate} className={styles.avatar__section}>
      <img src={avatar} alt={name} className={styles.avatar} />
    </section>
  );
};

PostAvatarSection.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
