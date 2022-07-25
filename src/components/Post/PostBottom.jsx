/**
 * @icons
 */
import {
  MdOutlineChatBubbleOutline,
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
} from 'react-icons/md';

/**
 * @styles
 */
import styles from './postBottom.module.scss';

export const PostBottom = () => {
  return (
    <div className={styles.post__bottom}>
      <MdOutlineChatBubbleOutline className={styles.comment__icon} />
      <MdOutlineFavoriteBorder className={styles.favorite__icon} />
    </div>
  );
};
