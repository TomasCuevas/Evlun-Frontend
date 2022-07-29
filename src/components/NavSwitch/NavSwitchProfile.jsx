import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @styles
 */
import Styles from './navSwitchProfile.module.scss';

export const NavSwitchProfile = () => {
  const { followers, followings, username, avatar, name } = useAuthStore();
  const navigate = useNavigate();

  const onNavigate = () => navigate(`profile/${username}`);

  return (
    <section className={Styles.profile} onClick={onNavigate}>
      <div className={Styles.profile__top}>
        <img src={avatar} alt="profile-img" className={Styles.profile__img} />
      </div>

      <div className={Styles.profile__medium}>
        <div className={Styles.profile__info}>
          <p className={Styles.name}>{name}</p>
        </div>
        <div className={Styles.profile__info}>
          <p className={Styles.username}>{username}</p>
        </div>
      </div>

      <div className={Styles.profile__bottom}>
        <div className={Styles.profile__numbers_container}>
          <p className={Styles.profile__numbers}>
            <span>{followings.length}</span> Siguiendo
          </p>
        </div>
        <div className={Styles.profile__numbers_container}>
          <p className={Styles.profile__numbers}>
            <span>{followers.length}</span> Seguidores
          </p>
        </div>
      </div>
    </section>
  );
};
