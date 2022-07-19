/**
 * @hooks
 */
import { useProfileStore } from '../../hooks/useProfileStore';

/**
 * @styles
 */
import Styles from './description.module.scss';

export const Description = () => {
  const { description } = useProfileStore();

  return (
    <div className={Styles.description__container}>
      <span className={Styles.description}>{description}</span>
    </div>
  );
};
