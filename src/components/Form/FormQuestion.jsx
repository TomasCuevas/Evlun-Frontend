import { Link } from 'react-router-dom';

/**
 * @styles
 */
import styles from './formQuestion.module.scss';

export const FormQuestion = ({ question, linkQuestion, link }) => {

  return (
    <div className={styles.question__container}>
      <p className={styles.question}>{ question }</p>
      <Link to={link} className={styles.link}>{ linkQuestion }</Link>
    </div>
  )
}