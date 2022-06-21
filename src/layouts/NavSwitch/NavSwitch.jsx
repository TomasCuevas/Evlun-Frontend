import { useContext } from 'react';

/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { NavSwitchTop } from '../../components/NavSwitch/NavSwitchTop';
import { NavSwitchProfile } from '../../components/NavSwitch/NavSwitchProfile';
import { NavSwitchNav } from '../../components/NavSwitch/NavSwitchNav';
import { NavSwitchBottom } from '../../components/NavSwitch/NavSwitchBottom';

/**
 * @styles
 */
import styles from './navSwitch.module.scss';

/**
 * @contexts
 */
import { MainContext } from '../../context/MainContext/MainContext';

export const NavSwitch = () => {
  const { navSwitch, onNavSwitch } = useContext(MainContext);
  
  if (!navSwitch) return <></>
  
  return (
    <div className={styles.navleft__container_all}>
      
      <section className={styles.navleft__container}>
        <Container>
          <div className={styles.navleft}>

            {/* TOP */}
            <NavSwitchTop />

            {/* PROFILE */}
            <NavSwitchProfile />

            {/* NAV */}
            <NavSwitchNav />

            {/* BOTTOM */}
            <NavSwitchBottom />

          </div>
        </Container>
      </section>
      
      <section className={styles.blur} onClick={() => onNavSwitch(false)}></section>
    </div>
  )
}