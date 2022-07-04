/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Main } from '../../components/Main/Main';
import { NavSwitchProfile } from '../../components/NavSwitch/NavSwitchProfile';

/**
 * @layout
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavTopSettings } from '../../layouts/NavTopSettings/NavTopSettings';

/**
 * @styles
 */
import Styles from './SettingsDeactivatePage.module.scss';

export const SettingsDeactivatePage = () => {
  const disabledAccount = () => {};

  return (
    <>
      <NavTopSettings navText="Desactivar la cuenta" />
      <Nav />
      <Main>
        <Container mt={30}>
          <NavSwitchProfile />
          <section className={Styles.disabled__section}>
            <span className={Styles.warning__title}>Esta acción desactivará tu cuenta</span>
            <span className={Styles.warning__text}>
              Estás por iniciar el proceso de desactivación de tu cuenta de Evlun. Tu nombre
              visible, tu @usuario y tu perfil público ya no se podrán ver en Evlun.
            </span>
            <div className={Styles.disabled__button_container}>
              <span onClick={disabledAccount} className={Styles.disabled__button}>
                Desactivar
              </span>
            </div>
          </section>
        </Container>
      </Main>
    </>
  );
};
