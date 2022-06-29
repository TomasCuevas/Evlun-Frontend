import PropTypes from 'prop-types';

/**
 * @styles
 */
import Styles from './navText.module.scss';

export const NavText = ({ textBig, textSmall }) => {
  return (
    <div className={Styles.container__all}>
      <div className={Styles.username__container}>
        <span className={Styles.username}>{textBig}</span>
      </div>
      <div className={Styles.count__posts_container}>
        <span className={Styles.count__posts}>{textSmall}</span>
      </div>
    </div>
  );
};

NavText.propTypes = {
  textBig: PropTypes.string,
  textSmall: PropTypes.string,
};
