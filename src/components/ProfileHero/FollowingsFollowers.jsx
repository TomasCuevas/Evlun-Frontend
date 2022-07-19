/**
 * @hooks
 */
import { useProfileStore } from '../../hooks/useProfileStore';

/**
 * @styles
 */
import Styles from './followingsFollowers.module.scss';

export const FollowingsFollowers = () => {
  const { followings, followers } = useProfileStore();

  return (
    <div className={Styles.followings__followers_container}>
      <div className={Styles.info__container}>
        <span className={Styles.number}>{followings.length}</span>
        <span className={Styles.text}>Siguiendo</span>
      </div>
      <div className={Styles.info__container}>
        <span className={Styles.number}>{followers.length}</span>
        <span className={Styles.text}>Seguidores</span>
      </div>
    </div>
  );
};
