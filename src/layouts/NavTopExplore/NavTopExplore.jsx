import { useContext } from 'react';

/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Explore } from '../../components/NavTopExplore/Explore';
import { NavTopAvatar } from '../../components/NavTop/NavTopAvatar';

/**
 * @styles
 */
import styles from './navTopExplore.module.scss';

/**
 * context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const NavTopExplore = () => {
  const { user } = useContext(AuthContext);
  const { avatar } = user;
  
  return (
    <div className={styles.container__all}>
    
      <Container>
        <nav className={styles.nav__container}>
          <NavTopAvatar avatar={ avatar } />
          <Explore />
        </nav>
      </Container>

    </div>
  )
}