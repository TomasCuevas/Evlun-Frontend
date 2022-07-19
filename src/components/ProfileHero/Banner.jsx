/**
 * @hooks
 */
import { useProfileStore } from '../../hooks/useProfileStore';

/**
 * @styles
 */
import Styles from './banner.module.scss';

export const Banner = () => {
  const { banner } = useProfileStore();

  console.log(banner);
  return (
    <div className={Styles.banner__container}>
      {banner ? (
        <img src={banner} alt="banner img" className={Styles.banner} />
      ) : (
        <div>className=${Styles.banner}</div>
      )}
    </div>
  );
};
