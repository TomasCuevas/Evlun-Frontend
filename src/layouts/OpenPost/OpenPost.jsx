/**
 * @components
 */
import {
  OpenPostContent,
  OpenPostDate,
  OpenPostTop,
  OpenPostLikes,
  OpenPostBottom,
} from '../../components/OpenPost';

/**
 * @hooks
 */
import { usePostsStore } from '../../hooks/usePostsStore';

/**
 * @styles
 */
import Styles from './OpenPost.module.scss';

export const OpenPost = () => {
  const { openPost } = usePostsStore();

  return (
    <article className={Styles}>
      <OpenPostTop />
      <OpenPostContent />
      <OpenPostDate />
      <OpenPostLikes />
      <OpenPostBottom />
    </article>
  );
};
