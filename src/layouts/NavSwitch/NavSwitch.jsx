import { useContext } from 'react';

/**
 * @icons
 */
import { MdOutlineClose } from 'react-icons/md';

/**
 * @components
 */
import { Container } from '../../components/Container/Container';

/**
 * @styles
 */
import styles from './navSwitch.module.scss';

/**
 * @contexts
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { MainContext } from '../../context/MainContext/MainContext';

export const NavSwitch = () => {
  const { user } = useContext(AuthContext);
  const { navSwitchState, onNavSwitch } = useContext(MainContext);

  const { avatar, followers, following, name, username } = user;
  
  if (!navSwitchState) return <></>
  
  return (
    <div className={styles.navleft__container_all}>
      
      <section className={styles.navleft__container}>
        <Container>
          <div className={styles.navleft}>

            {/* TOP */}
            <section className={styles.top}>
              <p className={styles.top__info}>Información de la cuenta</p>
              <span 
                className={styles.top__close}
                onClick={() => onNavSwitch(false)}
              >
                <MdOutlineClose className={styles.icon} />
              </span>
            </section>

            {/* PROFILE */}
            <section className={styles.profile}>
              <div className={styles.profile__top}>
                <img 
                  src={avatar} 
                  alt='profile-img' 
                  className={styles.profile__img} 
                />
              </div>

              <div className={styles.profile__medium}>
                <div className={styles.profile__info}>
                  <p className={styles.name}>
                    { name }
                  </p>
                </div>
                <div className={styles.profile__info}>
                  <p className={styles.username}>
                    { username }
                  </p>
                </div>
              </div>

              <div className={styles.profile__bottom}>
                <div className={styles.profile__numbers_container}>
                  <p className={styles.profile__numbers}>
                    <span>{ following }</span> Siguiendo
                  </p>
                </div>
                <div className={styles.profile__numbers_container}>
                  <p className={styles.profile__numbers}>
                    <span>{ followers }</span> Seguidores
                  </p>
                </div>
              </div>
            </section>

            {/* NAV */}

          </div>
        </Container>
      </section>
      
      <section className={styles.blur} onClick={() => onNavSwitch(false)}></section>
    </div>
  )
}