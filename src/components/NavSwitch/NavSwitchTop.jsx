import { useContext } from 'react';

/**
 * @icons
 */
import { MdOutlineClose } from 'react-icons/md';

/**
 * @styles
 */
import styles from './navSwitchTop.module.scss';

/**
 * @context
 */
import { MainContext } from '../../context/MainContext/MainContext';

export const NavSwitchTop = () => {
  const { onNavSwitch } = useContext(MainContext);

  return (
    <section className={styles.top}>
      <p className={styles.top__info}>Información de la cuenta</p>
      <span 
        className={styles.top__close}
        onClick={() => onNavSwitch(false)}
      >
        <MdOutlineClose className={styles.icon} />
      </span>
    </section>
  )
}