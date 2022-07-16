/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @styles
 */
import Styles from './banner.module.scss';

export const Banner = () => {
  const { banner } = useAuthStore();

  return (
    <div className={Styles.banner__container}>
      <img src={banner} alt="banner img" className={Styles.banner} />
    </div>
  );
};
