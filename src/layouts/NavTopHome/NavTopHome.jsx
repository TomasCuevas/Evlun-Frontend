import { useContext } from 'react';

/**
 * @components
 */
import { Container } from '../../components/Container/Container';

/**
 * @styles
 */
import styles from './navTopHome.module.scss';

/**
 * context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { MainContext } from '../../context/MainContext/MainContext';

export const NavTopHome = () => {
  const { user } = useContext(AuthContext);
  const { navSwitchState, onNavSwitch } = useContext(MainContext);

  const { avatar } = user;
  
  return (
    <>
      <div className={styles.container__all}>
      
        <Container>
          <nav className={styles.nav__container}>
            <div 
              className={styles.avatar__container}
              onClick={() => onNavSwitch(true)}
            >
              <img 
                src={avatar} 
                alt='profile-img' 
                className={styles.avatar__img}
              />
            </div>
            <div className={styles.newposts__container}>
              <p className={styles.newposts}>Posts más recientes</p>
            </div>
          </nav>
        </Container>

      </div>
    </>
  )
}