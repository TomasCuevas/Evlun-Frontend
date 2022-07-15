/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @styles
 */
import Styles from './followingsFollowers.module.scss';

export const FollowingsFollowers = () => {
  const { followings, followers } = useAuthStore();

  return (
    <div className={Styles.followings__followers_container}>
      <div className={Styles.info__container}>
        <span className={Styles.number}>{followings}</span>
        <span className={Styles.text}>Siguiendo</span>
      </div>
      <div className={Styles.info__container}>
        <span className={Styles.number}>{followers}</span>
        <span className={Styles.text}>Seguidores</span>
      </div>
    </div>
  );
};
