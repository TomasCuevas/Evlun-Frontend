/**
 * @icons
 */
import { BsArrowLeftShort } from "react-icons/bs";

/**
 * @styles
 */
import Styles from "./back.module.scss";

export const Back = () => {
  return (
    <div className={Styles.icon__container}>
      <BsArrowLeftShort className={Styles.icon} />
    </div>
  );
};
