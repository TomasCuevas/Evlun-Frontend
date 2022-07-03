import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './form.module.scss';

export const Form = ({ autocomplete = 'off', formSubmit, children }) => {
  return (
    <form onSubmit={formSubmit} className={styles.form__container} autoComplete={autocomplete}>
      {children}
    </form>
  );
};

Form.propTypes = {
  autocomplete: PropTypes.string,
  formSubmit: PropTypes.func.isRequired,
  children: PropTypes.array,
};
