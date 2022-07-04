import PropTypes from 'prop-types';
/**
 * @styles
 */
import Styles from './FormCheck.module.scss';

export const FormCheck = ({ checked, inputName, onCheckChange, label }) => {
  return (
    <div className={Styles.checkbox__container}>
      <label className={Styles.label}>{label}</label>
      <input
        type="checkbox"
        name={inputName}
        checked={checked}
        onChange={onCheckChange}
        className={Styles.checkbox}
      />
    </div>
  );
};

FormCheck.propTypes = {
  checked: PropTypes.bool,
  inputName: PropTypes.string,
  onCheckChange: PropTypes.func,
  label: PropTypes.string,
};
