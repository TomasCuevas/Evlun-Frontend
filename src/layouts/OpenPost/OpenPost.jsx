/**
 * @components
 */
import { useState } from 'react';
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
  const [likesCount, setLikesCount] = useState(openPost.likes?.length);

  const onChangeLikesCount = (sum = true) => {
    sum ? setLikesCount(likesCount + 1) : setLikesCount(likesCount - 1);
  };

  return (
    <article className={Styles.post__container}>
      <OpenPostTop />
      <OpenPostContent />
      <OpenPostDate />
      <OpenPostLikes likesCount={likesCount} />
      <OpenPostBottom changeLikesCount={onChangeLikesCount} />
    </article>
  );
};
