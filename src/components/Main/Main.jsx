import PropTypes from 'prop-types';

/**
 * @styles
 */
import Styles from './main.module.scss';

export const Main = ({ children }) => {
  return <main className={Styles.main__container}>{children}</main>;
};

Main.propTypes = {
  children: PropTypes.any,
};
