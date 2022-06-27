import PropTypes from 'prop-types';

/**
 * @styles
 */
import Styles from './option.module.scss';

export const Option = ({ text }) => {
  return <div className={Styles.option}>{text}</div>;
};

Option.propTypes = {
  text: PropTypes.string.isRequired,
};
