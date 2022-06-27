import { useContext } from 'react';

/**
 * @icons
 */
import { FaRegUser, FaRegBookmark, FaRegSun } from 'react-icons/fa';

/**
 * @components
 */
import { NavItem } from './NavItem';

/**
 * @styles
 */
import styles from './navSwitchNav.module.scss';

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const NavSwitchNav = () => {
  const { username } = useContext(AuthContext);

  return (
    <section className={styles.nav}>
      <nav className={styles.nav__container}>
        <ul className={styles.nav__list_container}>
          <NavItem
            link={`/profile/${username}`}
            icon={FaRegUser}
            text='Perfil'
          />
          <NavItem link='/bookmarks' icon={FaRegBookmark} text='Guardados' />
          <NavItem link='/settings' icon={FaRegSun} text='Configuración' />
        </ul>
      </nav>
    </section>
  );
};
