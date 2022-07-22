import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
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
import styles from './postTop.module.scss';

export const PostTop = ({ name, username, date }) => {
  const navigate = useNavigate();

  dayjs.extend(relativeTime);
  const time = dayjs(date).locale('es').fromNow(true);

  const onNavigate = () => {
    navigate(`/profile/${username}`);
  };

  return (
    <div className={styles.post__top}>
      <div onClick={onNavigate} className={styles.post__top_left}>
        <div className={styles.post__top_name}>
          <span className={styles.post__name}>{name}</span>
        </div>
        <div className={styles.post__top_username}>
          <span className={styles.post__username}>{`@${username}`}</span>
        </div>
        <div className={styles.post__top_decorate}>
          <span className={styles.post__decorate}>·</span>
        </div>
        <div className={styles.post__top_relativetime}>
          <span className={styles.post__relativetime}>{time}</span>
        </div>
      </div>

      <div className={styles.post__top_right}>
        <div className={styles.post__top_option}>
          <MdMoreHoriz className={styles.option__icon} />
        </div>
      </div>
    </div>
  );
};

PostTop.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};
