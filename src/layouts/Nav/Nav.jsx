import { Link } from 'react-router-dom';

/**
 * @icons
 */
import { BsHouseDoorFill, BsSearch, BsFillPersonFill } from 'react-icons/bs';

/**
 * @styles
 */
import styles from './nav.module.scss';

export const Nav = () => {

  return (
    <nav className={styles.nav__container}>
      <Link 
        to='/' 
        className={styles.nav__item}
      >
        <BsHouseDoorFill className={styles.nav__icon} />
      </Link>
      <Link 
        to='/explore' 
        className={styles.nav__item}
      >
        <BsSearch className={styles.nav__icon} />
      </Link>
      <Link 
        to={`/user`} 
        className={styles.nav__item}
      >
        <BsFillPersonFill className={styles.nav__icon} />
      </Link>
    </nav>
  )
}