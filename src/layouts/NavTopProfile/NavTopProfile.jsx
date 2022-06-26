/**
 * @components
 */
import { Container } from "../../components/Container/Container";
import { Back } from "../../components/NavTop/Back";
import { UsernameCount } from "../../components/NavTop/UsernameCount";

/**
 * @styles
 */
import Styles from "./navTopProfile.module.scss";

export const NavTopProfile = () => {
  return (
    <div className={Styles.container__all}>
      <Container>
        <div className={Styles.nav__container}>
          <Back />
          <UsernameCount />
        </div>
      </Container>
    </div>
  );
};
