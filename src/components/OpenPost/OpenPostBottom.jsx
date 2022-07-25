import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @icons
 */
import {
  MdOutlineChatBubbleOutline,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
} from 'react-icons/md';

/**
 * @hook
 */
import { useAuthStore } from '../../hooks/useAuthStore';
import { usePostsStore } from '../../hooks/usePostsStore';

/**
 * @styles
 */
import Styles from './OpenPostBottom.module.scss';

export const OpenPostBottom = ({ changeLikesCount }) => {
  const { openPost, startLikeToAPost } = usePostsStore();
  const { _id } = useAuthStore();
  const [liked, setLiked] = useState(false);

  const onLike = async (event) => {
    event.stopPropagation();
    setLiked(true);
    changeLikesCount(true);
    await startLikeToAPost(openPost._id);
  };

  const onUnlike = async (event) => {
    event.stopPropagation();
    setLiked(false);
    changeLikesCount(false);
    await startLikeToAPost(openPost._id);
  };

  useEffect(() => {
    if (openPost.likes?.includes(_id)) setLiked(true);
  }, []);

  return (
    <section className={Styles.post__bottom}>
      <div className={Styles.comment__container}>
        <MdOutlineChatBubbleOutline className={Styles.comment__icon} />
      </div>
      <div className={Styles.likes__container}>
        {liked ? (
          <MdOutlineFavorite onClick={onUnlike} className={Styles.likes__icon} />
        ) : (
          <MdOutlineFavoriteBorder onClick={onLike} className={Styles.likes__icon} />
        )}
      </div>
    </section>
  );
};

OpenPostBottom.propTypes = {
  changeLikesCount: PropTypes.func.isRequired,
};
