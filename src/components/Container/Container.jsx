import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './container.module.scss';

export const Container = ({ children, mt = 0 }) => {
  return (
    <div style={{ marginTop: mt }} className={styles.container__all}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  mt: PropTypes.number,
};
