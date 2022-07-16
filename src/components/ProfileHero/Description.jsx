/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @styles
 */
import Styles from './description.module.scss';

export const Description = () => {
  const { description } = useAuthStore();

  return (
    <div className={Styles.description__container}>
      <span className={Styles.description}>{description}</span>
    </div>
  );
};
