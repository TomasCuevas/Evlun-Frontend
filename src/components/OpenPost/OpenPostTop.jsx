import { useNavigate } from 'react-router-dom';

/**
 * @icons
 */
import { MdMoreHoriz } from 'react-icons/md';

/**
 * @hooks
 */
import { usePostsStore } from '../../hooks/usePostsStore';

/**
 * @styles
 */
import Styles from './OpenPostTop.module.scss';

export const OpenPostTop = () => {
  const navigate = useNavigate();
  const { openPost } = usePostsStore();

  const onNavigate = () => {
    navigate(`/profile/${openPost.added_by.username}`);
  };

  return (
    <section className={Styles.post__top_container}>
      <div onClick={onNavigate} className={Styles.left__container}>
        <div className={Styles.avatar__container}>
          <img
            src={openPost.added_by?.avatar}
            alt={openPost.added_by?.username}
            className={Styles.avatar}
          />
        </div>
        <div className={Styles.username__name_container}>
          <span className={Styles.name}>{openPost.added_by?.name}</span>
          <span className={Styles.username}>@{openPost.added_by?.username}</span>
        </div>
      </div>

      <div className={Styles.right__container}>
        <div className={Styles.option__container}>
          <MdMoreHoriz className={Styles.option} />
        </div>
      </div>
    </section>
  );
};
