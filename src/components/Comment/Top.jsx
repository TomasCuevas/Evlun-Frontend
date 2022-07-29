import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @icons
 */
import { MdMoreHoriz } from 'react-icons/md';

/**
 * @helpers
 */
import { getRelativeTime } from '../../helpers/getRelativeTime';

/**
 * @styles
 */
import Styles from './Top.module.scss';

/**
 * @context
 */
import { CommentContext } from '../../context';

export const Top = () => {
  const { added_by: addedBy, date } = useContext(CommentContext);
  const navigate = useNavigate();

  const relativeTime = getRelativeTime(date);

  const onNavigate = () => {
    navigate(`/profile/${addedBy.username}`);
  };

  return (
    <section className={Styles.comment__top}>
      <div onClick={onNavigate} className={Styles.comment__top_left}>
        <div className={Styles.comment__top_name}>
          <span className={Styles.comment__name}>{addedBy.name}</span>
        </div>
        <div className={Styles.comment__top_username}>
          <span className={Styles.comment__username}>{`@${addedBy.username}`}</span>
        </div>
        <div className={Styles.comment__top_decorate}>
          <span className={Styles.comment__decorate}>·</span>
        </div>
        <div className={Styles.comment__top_relativetime}>
          <span className={Styles.comment__relativetime}>{relativeTime}</span>
        </div>
      </div>

      <div className={Styles.comment__top_right}>
        <div className={Styles.comment__top_option}>
          <MdMoreHoriz className={Styles.option__icon} />
        </div>
      </div>
    </section>
  );
};
