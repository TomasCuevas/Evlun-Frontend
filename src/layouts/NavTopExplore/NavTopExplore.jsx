/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Explore } from '../../components/NavTop/Explore';
import { Avatar } from '../../components/NavTop/Avatar';

/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @styles
 */
import styles from './navTopExplore.module.scss';

export const NavTopExplore = () => {
  const { avatar } = useAuthStore();

  return (
    <div className={styles.container__all}>
      <Container>
        <nav className={styles.nav__container}>
          <Avatar avatar={avatar} />
          <Explore />
        </nav>
      </Container>
    </div>
  );
};
