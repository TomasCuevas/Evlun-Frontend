import styles from './formButtonPrimary.module.scss';

export const FormButtonPrimary = ({ buttonText, buttonSubmit }) => {

  return (
    <button
      onClick={buttonSubmit}
      className={styles.button}
    >
      { buttonText }
    </button>
  )
}