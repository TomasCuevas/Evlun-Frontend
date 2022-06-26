import { useContext } from "react";

/**
 * @styles
 */
import Styles from "./followingsFollowers.module.scss";

/**
 * @context
 */
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const FollowingsFollowers = () => {
  const { followings, followers } = useContext(AuthContext);

  return (
    <div className={Styles.followings__followers_container}>
      <div className={Styles.info__container}>
        <span className={Styles.number}>{followings}</span>
        <span className={Styles.text}>Siguiendo</span>
      </div>
      <div className={Styles.info__container}>
        <span className={Styles.number}>{followers}</span>
        <span className={Styles.text}>Seguidores</span>
      </div>
    </div>
  );
};
