import { useContext } from 'react';

/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Back } from '../../components/NavTop/Back';
import { NavText } from '../../components/NavTop/NavText';

/**
 * @styles
 */
import Styles from './navTopProfile.module.scss';

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const NavTopProfile = () => {
  const { name, username } = useContext(AuthContext);

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
