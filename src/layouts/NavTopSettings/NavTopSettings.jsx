import PropTypes from 'prop-types';

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
import Styles from './navTopSettings.module.scss';

export const NavTopSettings = ({ navText }) => {
  const { username } = useAuthStore();

  return (
    <div className={Styles.container__all}>
      <Container>
        <div className={Styles.nav__container}>
          <Back />
          <NavText textBig={navText} textSmall={username} />
        </div>
      </Container>
    </div>
  );
};

NavTopSettings.propTypes = {
  navText: PropTypes.string,
};
