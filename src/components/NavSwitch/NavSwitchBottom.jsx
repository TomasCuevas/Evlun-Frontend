/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @styles
 */
import styles from './navSwitchBottom.module.scss';

export const NavSwitchBottom = () => {
  const { startLogout } = useAuthStore();

  return (
    <section className={styles.bottom}>
      <div className={styles.logout__container}>
        <span onClick={startLogout} className={styles.text}>
          Cerrar Sesión
        </span>
      </div>
    </section>
  );
};
