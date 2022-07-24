import {
  MdOutlineChatBubbleOutline,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
} from 'react-icons/md';

/**
 * @styles
 */
import Styles from './OpenPostBottom.module.scss';

export const OpenPostBottom = () => {
  return (
    <section className={Styles.post__bottom}>
      <MdOutlineChatBubbleOutline className={Styles.comment__icon} />
      <MdOutlineFavoriteBorder className={Styles.favorite__icon} />
    </section>
  );
};
