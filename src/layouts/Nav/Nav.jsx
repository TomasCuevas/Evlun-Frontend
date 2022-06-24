import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * @icons
 */
import { BsHouseDoorFill, BsSearch, BsFillPersonFill } from 'react-icons/bs';

/**
 * @styles
 */
import styles from './nav.module.scss';

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const Nav = () => {
  const { user } = useContext(AuthContext);
  const { username } = user;

  return (
    <nav className={styles.nav__container}>
      <NavLink 
        to='/' 
        className={({isActive}) => (isActive) ? styles.nav__item_active : styles.nav__item}
      >
        <BsHouseDoorFill className={styles.nav__icon} />
      </NavLink>
      <NavLink 
        to='/explore' 
        className={({isActive}) => (isActive) ? styles.nav__item_active : styles.nav__item}
      >
        <BsSearch className={styles.nav__icon} />
      </NavLink>
      <NavLink 
        to={`/${username}}`} 
        className={({isActive}) => (isActive) ? styles.nav__item_active : styles.nav__item}
      >
        <BsFillPersonFill className={styles.nav__icon} />
      </NavLink>
    </nav>
  )
}