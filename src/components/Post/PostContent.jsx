import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './postContent.module.scss';

export const PostContent = ({ _id, content }) => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/post/${_id}`);
  };

  return (
    <div onClick={onNavigate} className={styles.post__content}>
      <span className={styles.content}>{content}</span>
    </div>
  );
};

PostContent.propTypes = {
  _id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
