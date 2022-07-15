/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Back } from '../../components/NavTop/Back';
import { NavText } from '../../components/NavTop/NavText';

/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @styles
 */
import Styles from './navTopProfile.module.scss';

export const NavTopProfile = () => {
  const { name, username } = useAuthStore();

  return (
    <div className={Styles.container__all}>
      <Container>
        <div className={Styles.nav__container}>
          <Back />
          <NavText textBig={name} textSmall={username} />
        </div>
      </Container>
    </div>
  );
};
