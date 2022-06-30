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

export const SettingOption = ({ optionText, navigateLink }) => {
  const navigate = useNavigate();

  const settingNavigate = () => navigate(navigateLink);

  return (
    <div onClick={settingNavigate} className={Styles.option__container}>
      <span className={Styles.option__text}>{optionText}</span>
      <BsChevronRight className={Styles.option__arrow} />
    </div>
  );
};

SettingOption.propTypes = {
  optionText: PropTypes.string.isRequired,
  navigateLink: PropTypes.string.isRequired,
};
