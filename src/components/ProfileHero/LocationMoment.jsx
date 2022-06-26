import { useContext } from "react";
import moment from "moment";

/**
 * @icons
 */
import { BsCalendar3, BsPinMap } from "react-icons/bs";

/**
 * @styles
 */
import Styles from "./locationMoment.module.scss";

/**
 * @context
 */
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const LocationMoment = () => {
  const { location, date } = useContext(AuthContext);
  const dateTransform = moment(date).format("MMMM Do YYYY");

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
