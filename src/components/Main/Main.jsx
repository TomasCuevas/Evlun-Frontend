import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './main.module.scss';

export const Main = ({ children }) => {
  return <main className={styles.main__container}>{children}</main>;
};

Main.propTypes = {
  children: PropTypes.element,
};
