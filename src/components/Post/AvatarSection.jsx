import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @styles
 */
import Styles from './AvatarSection.module.scss';

/**
 * @context
 */
import { PostContext } from '../../context';

export const AvatarSection = () => {
  const { added_by: addedBy } = useContext(PostContext);
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/profile/${addedBy.username}`);
  };

  return (
    <section onClick={onNavigate} className={Styles.avatar__section}>
      <img src={addedBy.avatar} alt={addedBy.name} className={Styles.avatar} />
    </section>
  );
};
