import { useState, useEffect, useContext } from 'react';

/**
 * @icons
 */
import {
  MdOutlineChatBubbleOutline,
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
} from 'react-icons/md';

/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';
import { usePostsStore } from '../../hooks/usePostsStore';

/**
 * @styles
 */
import Styles from './Bottom.module.scss';

/**
 * @context
 */
import { PostContext } from '../../context';

export const Bottom = () => {
  const { _id: postId, likes, comments } = useContext(PostContext);
  const { _id } = useAuthStore();
  const { startLikeToAPost } = usePostsStore();
  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(likes.length);

  const onLike = async (event) => {
    event.stopPropagation();
    setLike(true);
    setLikesCount(likesCount + 1);
    await startLikeToAPost(postId);
  };

  const onUnlike = async (event) => {
    event.stopPropagation();
    setLike(false);
    setLikesCount(likesCount - 1);
    await startLikeToAPost(postId);
  };

  useEffect(() => {
    if (likes.includes(_id)) setLike(true);
  }, []);

  return (
    <section className={Styles.post__bottom}>
      <div className={Styles.comment__container}>
        <MdOutlineChatBubbleOutline className={Styles.comment__icon} />
        <span className={Styles.comment__count}>{comments.length}</span>
      </div>

      <div className={Styles.likes__container}>
        {like ? (
          <MdOutlineFavorite onClick={onUnlike} className={Styles.likes__icon} />
        ) : (
          <MdOutlineFavoriteBorder onClick={onLike} className={Styles.likes__icon} />
        )}
        <span className={Styles.likes__count}>{likesCount}</span>
      </div>
    </section>
  );
};
