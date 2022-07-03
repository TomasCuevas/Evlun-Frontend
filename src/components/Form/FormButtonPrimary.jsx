import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './formButtonPrimary.module.scss';

export const FormButtonPrimary = ({ buttonText, buttonSubmit, option }) => {
  return (
    <button disabled={option} onClick={buttonSubmit} className={styles.button}>
      {buttonText}
    </button>
  );
};

FormButtonPrimary.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonSubmit: PropTypes.func.isRequired,
  option: PropTypes.bool,
};
