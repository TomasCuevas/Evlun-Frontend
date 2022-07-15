import moment from 'moment';

/**
 * @icons
 */
import { BsCalendar3, BsPinMap } from 'react-icons/bs';

/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @styles
 */
import Styles from './locationMoment.module.scss';

export const LocationMoment = () => {
  const { location } = useAuthStore();
  const dateTransform = moment(new Date().getTime()).format('MMMM Do YYYY');

  return (
    <div className={Styles.moment__container}>
      <div className={Styles.location__container}>
        <BsPinMap className={Styles.icon} />
        <span className={Styles.location}>{location}</span>
      </div>
      <div className={Styles.date__container}>
        <BsCalendar3 className={Styles.icon} />
        <span className={Styles.date}>{dateTransform}</span>
      </div>
    </div>
  );
};
