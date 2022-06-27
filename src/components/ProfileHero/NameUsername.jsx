import { useContext } from 'react';

/**
 * @styles
 */
import Styles from './nameUsername.module.scss';

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const NameUsername = () => {
  const { name, username } = useContext(AuthContext);

  return (
    <div className={Styles.info__user_container}>
      <span className={Styles.name}>{name}</span>
      <span className={Styles.username}>{username}</span>
    </div>
  );
};
