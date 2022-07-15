import { NavLink } from 'react-router-dom';

/**
 * @icons
 */
import { BsHouseDoorFill, BsSearch, BsFillPersonFill } from 'react-icons/bs';

/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @styles
 */
import styles from './nav.module.scss';

export const Nav = () => {
  const { username } = useAuthStore();

  return (
    <nav className={styles.nav__container}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.nav__item_active : styles.nav__item)}
      >
        <BsHouseDoorFill className={styles.nav__icon} />
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) => (isActive ? styles.nav__item_active : styles.nav__item)}
      >
        <BsSearch className={styles.nav__icon} />
      </NavLink>
      <NavLink
        to={`/profile/${username}`}
        className={({ isActive }) => (isActive ? styles.nav__item_active : styles.nav__item)}
      >
        <BsFillPersonFill className={styles.nav__icon} />
      </NavLink>
    </nav>
  );
};
