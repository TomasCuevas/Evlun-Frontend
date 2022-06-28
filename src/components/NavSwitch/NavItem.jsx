import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './navItem.module.scss';

export const NavItem = ({ link, icon: Icon, text }) => {
  return (
    <li className={styles.nav__item}>
      <Link to={link}>
        <div className={styles.icon__container}>
          <Icon />
        </div>
        <div className={styles.text__container}>
          <p className={styles.text}>{text}</p>
        </div>
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.func,
  text: PropTypes.string.isRequired,
};
