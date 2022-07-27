import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @styles
 */
import Styles from './AvatarSection.module.scss';

/**
 * @context
 */
import { CommentContext } from '../../contexts';

export const AvatarSection = () => {
  const { added_by: addedBy } = useContext(CommentContext);
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/profile/${addedBy.username}`);
  };

  return (
    <section onClick={onNavigate} className={Styles.avatar__section}>
      {<img src={addedBy.avatar} alt={addedBy.name} className={Styles.avatar} />}
    </section>
  );
};
