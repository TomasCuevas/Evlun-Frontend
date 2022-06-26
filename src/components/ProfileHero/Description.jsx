import { useContext } from "react";

/**
 * @styles
 */
import Styles from "./description.module.scss";

/**
 * @context
 */
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const Description = () => {
  const { description } = useContext(AuthContext);

  return (
    <div className={Styles.description__container}>
      <span className={Styles.description}>{description}</span>
    </div>
  );
};
