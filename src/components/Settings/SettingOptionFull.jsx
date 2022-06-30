import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @icons
 */
import { BsChevronRight } from 'react-icons/bs';

/**
 * @styles
 */
import Styles from './settingOptionFull.module.scss';

export const SettingOptionFull = ({ icon: Icon, optionTitle, optionText, navigateLink }) => {
  const navigate = useNavigate();

  const settingNavigate = () => navigate(navigateLink);

  return (
    <div onClick={settingNavigate} className={Styles.option__container}>
      <div className={Styles.icon__container}>
        <Icon className={Styles.icon} />
      </div>
      <div className={Styles.option__text_container}>
        <span className={Styles.option__title}>{optionTitle}</span>
        <span className={Styles.option__text}>{optionText}</span>
      </div>
      <div className={Styles.arrow__container}>
        <BsChevronRight className={Styles.option__arrow} />
      </div>
    </div>
  );
};

SettingOptionFull.propTypes = {
  icon: PropTypes.func,
  optionTitle: PropTypes.string,
  optionText: PropTypes.string,
  navigateLink: PropTypes.string,
};
