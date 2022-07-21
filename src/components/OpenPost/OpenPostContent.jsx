/**
 * @hooks
 */
import { usePostsStore } from '../../hooks/usePostsStore';

/**
 * @styles
 */
import Styles from './OpenPostContent.module.scss';

export const OpenPostContent = () => {
  const { openPost } = usePostsStore();

  return (
    <section className={Styles.post__content_container}>
      <div className={Styles.content__container}>
        <span className={Styles.content}>{openPost.content}</span>
      </div>
    </section>
  );
};
