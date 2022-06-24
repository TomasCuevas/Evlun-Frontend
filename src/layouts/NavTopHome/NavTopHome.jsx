import { useContext } from 'react';

/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { NavTopAvatar } from '../../components/NavTop/NavTopAvatar';

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

  const { avatar } = user;
  
  return (
    <div className={styles.container__all}>
    
      <Container>
        <nav className={styles.nav__container}>
          <NavTopAvatar avatar={ avatar } />
          <div className={styles.newposts__container}>
            <p className={styles.newposts}>Posts más recientes</p>
          </div>
        </nav>
      </Container>

    </div>
  )
}