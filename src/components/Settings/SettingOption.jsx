import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @icons
 */
import { BsChevronRight } from 'react-icons/bs';

/**
 * @styles
 */
import Styles from './settingOption.module.scss';

export const SettingOption = ({ optionTitle, optionText, navigateLink, arrow = 'block' }) => {
  const navigate = useNavigate();

  const settingNavigate = () => navigate(navigateLink);

  return (
    <div onClick={settingNavigate} className={Styles.option__container}>
      <div className={Styles.option__text_container}>
        <span className={Styles.option__title}>{optionTitle}</span>
        <span className={Styles.option__text}>{optionText}</span>
      </div>
      <div style={{ display: arrow }} className={Styles.arrow__container}>
        <BsChevronRight className={Styles.option__arrow} />
      </div>
    </div>
  );
};

SettingOption.propTypes = {
  optionTitle: PropTypes.string.isRequired,
  optionText: PropTypes.string,
  navigateLink: PropTypes.string,
  arrow: PropTypes.string,
};
