import { useRef } from 'react';

/**
 * @styles
 */
import styles from './formInputPrimary.module.scss';
import './styles.scss';

export const FormInputPrimary = ({ inputName, inputValue, inputChange, inputType, label, icon: Icon = undefined }) => {
  const labelRef = useRef()

  const inputFocus = () => labelRef.current.classList.add(`label__focus`);

  const inputBlur = () => (inputValue.length <= 0) && labelRef.current.classList.remove(`label__focus`);

  return (
    <div className={styles.input__container}>
      { Icon && <Icon className={styles.icon} /> }
      <label 
        ref={labelRef}
        htmlFor={inputName}
        className={Icon ? styles.label__icon : styles.label}
      >
        { label }
      </label>              
      <input 
        onFocus={inputFocus}
        onBlur={inputBlur}
        type={inputType} 
        name={inputName}
        id={inputName}
        value={inputValue}
        onChange={inputChange}
        className={styles.input}
      />
    </div>
  )
}