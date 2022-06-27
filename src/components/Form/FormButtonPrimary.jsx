import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './formButtonPrimary.module.scss';

export const FormButtonPrimary = ({ buttonText, buttonSubmit }) => {
  return (
    <button onClick={buttonSubmit} className={styles.button}>
      {buttonText}
    </button>
  );
};

FormButtonPrimary.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonSubmit: PropTypes.func.isRequired,
};
