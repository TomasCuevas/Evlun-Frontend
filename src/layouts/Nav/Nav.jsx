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
import Styles from './nav.module.scss';

export const Nav = () => {
  const { username } = useAuthStore();

  return (
    <nav className={Styles.nav__container}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? Styles.nav__item_active : Styles.nav__item)}
      >
        <BsHouseDoorFill className={Styles.nav__icon} />
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) => (isActive ? Styles.nav__item_active : Styles.nav__item)}
      >
        <BsSearch className={Styles.nav__icon} />
      </NavLink>
      <NavLink
        to={`/profile/${username}`}
        className={({ isActive }) => (isActive ? Styles.nav__item_active : Styles.nav__item)}
      >
        <BsFillPersonFill className={Styles.nav__icon} />
      </NavLink>
    </nav>
  );
};
