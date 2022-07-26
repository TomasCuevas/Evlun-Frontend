import { useNavigate } from 'react-router-dom';

/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @styles
 */
import Styles from './AvatarSection.module.scss';

export const AvatarSection = () => {
  const { avatar, name, username } = useAuthStore();
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/profile/${username}`);
  };

  return (
    <section onClick={onNavigate} className={Styles.avatar__section}>
      <img src={avatar} alt={name} className={Styles.avatar} />
    </section>
  );
};
