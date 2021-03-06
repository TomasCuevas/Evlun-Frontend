import { useState, useEffect, useContext } from 'react';

/**
 * @icons
 */
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

/**
 * @hooks
 */
import { useAuthStore, useCommentsStore } from '../../hooks';

/**
 * @styles
 */
import Styles from './Bottom.module.scss';

/**
 * @context
 */
import { CommentContext } from '../../context';

export const Bottom = () => {
  const { likes, _id: commentId } = useContext(CommentContext);
  const { _id } = useAuthStore();
  const { startLikeToAComment } = useCommentsStore();
  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(likes.length);

  const onLike = async (event) => {
    event.stopPropagation();
    setLike(true);
    setLikesCount(likesCount + 1);
    await startLikeToAComment(commentId);
  };

  const onUnlike = async (event) => {
    event.stopPropagation();
    setLike(false);
    setLikesCount(likesCount - 1);
    await startLikeToAComment(commentId);
  };

  useEffect(() => {
    if (likes.includes(_id)) setLike(true);
  }, []);

  return (
    <section className={Styles.comment__bottom}>
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
