/**
 * @hooks
 */
import { useProfileStore } from '../../hooks/useProfileStore';

/**
 * @styles
 */
import Styles from './nameUsername.module.scss';

export const NameUsername = () => {
  const { name, username } = useProfileStore();

  return (
    <div className={Styles.info__user_container}>
      <span className={Styles.name}>{name}</span>
      <span className={Styles.username}>{`@${username}`}</span>
    </div>
  );
};
