import { useContext } from 'react';

/**
 * @styles
 */
import Styles from './banner.module.scss';

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const Banner = () => {
  const { banner } = useContext(AuthContext);

  return (
    <div className={Styles.banner__container}>
      <img src={banner} alt='banner img' className={Styles.banner} />
    </div>
  );
};
