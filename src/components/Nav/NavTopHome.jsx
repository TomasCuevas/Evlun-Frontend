import { useState } from 'react';

/**
 * @components
 */
import { Container } from '../Container/Container';
import { NavLeftHome } from './';

/**
 * @styles
 */
import styles from './navTopHome.module.scss';

export const NavTopHome = () => {
  const [navActive, setNavActive] = useState(false);

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
                src='https://res.cloudinary.com/dn3kl3egc/image/upload/v1636226226/Avatar/avatar_default.png' 
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