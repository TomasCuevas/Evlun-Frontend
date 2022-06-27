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
      <div className={styles.comment__icon_container}>
        <MdOutlineChatBubbleOutline />
      </div>
      <div className={styles.favorite__icon_container}>
        <MdOutlineFavoriteBorder />
      </div>
    </div>
  );
};
