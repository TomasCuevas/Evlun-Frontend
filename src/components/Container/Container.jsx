import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './container.module.scss';

export const Container = ({ children }) => {
  return (
    <div className={styles.container__all}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.element,
};
