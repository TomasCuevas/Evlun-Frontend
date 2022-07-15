/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @styles
 */
import Styles from './nameUsername.module.scss';

export const NameUsername = () => {
  const { name, username } = useAuthStore();

  return (
    <div className={Styles.info__user_container}>
      <span className={Styles.name}>{name}</span>
      <span className={Styles.username}>{username}</span>
    </div>
  );
};
