import { Link } from 'react-router-dom';

/**
 * @styles
 */
import styles from './navSwitchBottom.module.scss';

export const NavSwitchBottom = () => {
  return (
    <section className={styles.bottom}>
      <div className={styles.logout__container}>
        <Link to='/logout'>
          <span className={styles.text}>Cerrar Sesión</span>
        </Link>
      </div>
    </section>
  );
};
