import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './formQuestion.module.scss';

export const FormQuestion = ({ question, linkQuestion, link }) => {
  return (
    <div className={styles.question__container}>
      <p className={styles.question}>{question}</p>
      <Link to={link} className={styles.link}>
        {linkQuestion}
      </Link>
    </div>
  );
};

FormQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  linkQuestion: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
