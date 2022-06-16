import styles from './form.module.scss';

export const Form = ({ autocomplete, formSubmit, children }) => {

  return (
    <form 
      onSubmit={formSubmit}
      className={styles.form__container}
      autoComplete={autocomplete}
    >
      { children }
    </form>
  )
}