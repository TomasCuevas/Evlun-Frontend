import { useContext } from 'react';

/**
 * @styles
 */
import Styles from './usernameCount.module.scss';

/**
 * @context
 */
import { ProfileContext } from '../../context/ProfileContext/ProfileContext';

export const UsernameCount = () => {
  const { username, countPosts } = useContext(ProfileContext);

  return (
    <div className={Styles.container__all}>
      <div className={Styles.username__container}>
        <span className={Styles.username}>{username}</span>
      </div>
      <div className={Styles.count__posts_container}>
        <span className={Styles.count__posts}>{`${countPosts} posts`}</span>
      </div>
    </div>
  );
};
