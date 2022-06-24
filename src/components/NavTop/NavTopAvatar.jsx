import { useContext } from 'react';

/**
 * @styles
 */
import styles from './navTopAvatar.module.scss';

/**
 * @context
 */
import { NavSwitchContext } from '../../context/NavSwitchContext/NavSwitchContext';

export const NavTopAvatar = ({ avatar }) => {
  const { onNavSwitch } = useContext(NavSwitchContext);

  return (
    <div 
      className={styles.avatar__container}
      onClick={() => onNavSwitch(true)}
    >
      <img 
        src={avatar} 
        alt='profile-img' 
        className={styles.avatar__img}
      />
    </div>
  )
}