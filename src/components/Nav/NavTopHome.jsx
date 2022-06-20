import { useContext, useState } from 'react';

/**
 * @components
 */
import { Container } from '../Container/Container';
import { NavLeftHome } from './';

/**
 * @styles
 */
import styles from './navTopHome.module.scss';

/**
 * context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const NavTopHome = () => {
  const { user } = useContext(AuthContext);
  const [navActive, setNavActive] = useState(false);

  const { avatar } = user;

  const onNavActive = () => setNavActive( !navActive );
  
  return (
    <>
      <div className={styles.container__all}>
      
        <Container>
          <nav className={styles.nav__container}>
            <div 
              className={styles.avatar__container}
              onClick={onNavActive}
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

      {
        (navActive) && <NavLeftHome handleNavActive={onNavActive} />
      }
    </>
  )
}