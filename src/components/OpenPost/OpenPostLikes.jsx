/**
 * @hooks
 */
import { usePostsStore } from '../../hooks/usePostsStore';

/**
 * @styles
 */
import Styles from './OpenPostLikes.module.scss';

export const OpenPostLikes = () => {
  const { openPost } = usePostsStore();

  return (
    <section className={Styles.post__likes_container}>
      <div className={Styles.likes__container}>
        <span className={Styles.likes__count}>{openPost?.likes?.length}</span>
        <span className={Styles.likes__text}>Likes</span>
      </div>
    </section>
  );
};
