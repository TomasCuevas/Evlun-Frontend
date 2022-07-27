import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';
import { es } from 'dayjs/locale/es';
import relativeTime from 'dayjs/plugin/relativeTime';

/**
 * @icons
 */
import { MdMoreHoriz } from 'react-icons/md';

/**
 * @styles
 */
import Styles from './Top.module.scss';
import { PostContext } from '../../context';

export const Top = () => {
  const { added_by: addedBy, date } = useContext(PostContext);
  const navigate = useNavigate();

  dayjs.extend(relativeTime);
  const time = dayjs(date).locale('es').fromNow(true);

  const onNavigate = () => {
    navigate(`/profile/${addedBy.username}`);
  };

  return (
    <section className={Styles.post__top}>
      <div onClick={onNavigate} className={Styles.post__top_left}>
        <div className={Styles.post__top_name}>
          <span className={Styles.post__name}>{addedBy.name}</span>
        </div>
        <div className={Styles.post__top_username}>
          <span className={Styles.post__username}>{`@${addedBy.username}`}</span>
        </div>
        <div className={Styles.post__top_decorate}>
          <span className={Styles.post__decorate}>·</span>
        </div>
        <div className={Styles.post__top_relativetime}>
          <span className={Styles.post__relativetime}>{time}</span>
        </div>
      </div>

      <div className={Styles.post__top_right}>
        <div className={Styles.post__top_option}>
          <MdMoreHoriz className={Styles.option__icon} />
        </div>
      </div>
    </section>
  );
};
