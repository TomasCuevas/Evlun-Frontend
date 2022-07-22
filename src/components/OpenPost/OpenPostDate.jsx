import dayjs from 'dayjs';

/**
 * @hooks
 */
import { usePostsStore } from '../../hooks/usePostsStore';

/**
 * @styles
 */
import Styles from './OpenPostDate.module.scss';

export const OpenPostDate = () => {
  const { openPost } = usePostsStore();

  dayjs.locale('es');
  const time = dayjs(openPost.date).format('H:mm a');
  const date = dayjs(openPost.date).format('D MMM. YYYY');

  return (
    <section className={Styles.post__date_container}>
      <div className={Styles.time__container}>
        <span className={Styles.time}>{time}</span>
      </div>
      <div className={Styles.date__container}>
        <span className={Styles.date}>{date}</span>
      </div>
    </section>
  );
};
