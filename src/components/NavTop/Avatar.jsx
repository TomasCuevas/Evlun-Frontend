import { useContext } from 'react';
import PropTypes from 'prop-types';

/**
 * @styles
 */
import styles from './avatar.module.scss';

/**
 * @context
 */
import { NavSwitchContext } from '../../context/NavSwitchContext/NavSwitchContext';

export const Avatar = ({ avatar }) => {
  const { onNavSwitch } = useContext(NavSwitchContext);

  return (
    <div className={styles.avatar__container} onClick={() => onNavSwitch(true)}>
      <img src={avatar} alt='profile-img' className={styles.avatar__img} />
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string,
};
