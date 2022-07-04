import PropTypes from 'prop-types';

/**
 * @styles
 */
import Styles from './formSelectOption.module.scss';

export const FormSelectOption = ({ inputValue, inputName, optionValues, label, onInputChange }) => {
  const changeOptions = ({ target }) => {
    const value = target.value;
    onInputChange({ target: { name: inputName, value } });
  };

  return (
    <div className={Styles.input__container}>
      <label className={Styles.label}>{label}</label>
      <select
        value={inputValue}
        name={inputName}
        onChange={changeOptions}
        className={Styles.select__container}
      >
        {optionValues.map((option) => (
          <option key={option} value={option} className={Styles.option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

FormSelectOption.propTypes = {
  inputValue: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  optionValues: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
