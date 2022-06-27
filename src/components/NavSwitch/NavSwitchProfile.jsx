import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const { avatar, name, username, followings, followers } = user;

  const onNavigate = () => navigate(`profile/${username}`);

  return (
    <section className={styles.profile} onClick={onNavigate}>
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
            <span>{followings}</span> Siguiendo
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
