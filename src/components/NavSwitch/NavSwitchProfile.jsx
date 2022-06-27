import { useContext } from 'react';

/**
 * @styles
 */
import styles from './navSwitchProfile.module.scss';

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const NavSwitchProfile = () => {
  const { user } = useContext(AuthContext);
  const { avatar, name, username, following, followers } = user;

  return (
    <section className={styles.profile}>
      <div className={styles.profile__top}>
        <img src={avatar} alt='profile-img' className={styles.profile__img} />
      </div>

      <div className={styles.profile__medium}>
        <div className={styles.profile__info}>
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.profile__info}>
          <p className={styles.username}>{username}</p>
        </div>
      </div>

      <div className={styles.profile__bottom}>
        <div className={styles.profile__numbers_container}>
          <p className={styles.profile__numbers}>
            <span>{following}</span> Siguiendo
          </p>
        </div>
        <div className={styles.profile__numbers_container}>
          <p className={styles.profile__numbers}>
            <span>{followers}</span> Seguidores
          </p>
        </div>
      </div>
    </section>
  );
};
