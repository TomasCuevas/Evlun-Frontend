/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Back } from '../../components/NavTop/Back';

/**
 * @styles
 */
import Styles from './NavTopPost.module.scss';

export const NavTopPost = () => {
  return (
    <div className={Styles.container__all}>
      <Container>
        <div className={Styles.nav__container}>
          <Back />
        </div>
      </Container>
    </div>
  );
};
