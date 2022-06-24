import moment from 'moment';

/**
 * @icons
 */
import { MdMoreHoriz } from 'react-icons/md'

/**
 * @styles
 */
import styles from './postTop.module.scss';

export const PostTop = ({ name, username, date }) => {
  const relativeTime = moment(date).fromNow(true);

  return (
    <div className={styles.post__top}>
      
      <div className={styles.post__top_left}>
        <div className={styles.post__top_name}>
          <span className={styles.post__name}>
            { name }
          </span>
        </div>
        <div className={styles.post__top_username}>
          <span className={styles.post__username}>
            { username }
          </span>
        </div>
        <div className={styles.post__top_decorate}>
          <span className={styles.post__decorate}>
            ·
          </span>
        </div>
        <div className={styles.post__top_relativetime}>
          <span className={styles.post__relativetime}>
            { relativeTime }
          </span>
        </div>
      </div>

      <div className={styles.post__top_right}>
        <div className={styles.post__top_option}>
          <MdMoreHoriz className={styles.option__icon} />
        </div>
      </div>

    </div>
  )
}