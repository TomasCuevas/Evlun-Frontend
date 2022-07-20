/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Back } from '../../components/NavTop/Back';
import { NavText } from '../../components/NavTop/NavText';

/**
 * @hooks
 */
import { useProfileStore } from '../../hooks/useProfileStore';

/**
 * @styles
 */
import Styles from './navTopProfile.module.scss';

export const NavTopProfile = () => {
  const { name, username } = useProfileStore();

  return (
    <div className={Styles.container__all}>
      <Container>
        <div className={Styles.nav__container}>
          <Back />
          <NavText name={name} username={username} />
        </div>
      </Container>
    </div>
  );
};
