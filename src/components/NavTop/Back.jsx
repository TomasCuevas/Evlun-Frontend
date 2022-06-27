import { useNavigate } from 'react-router-dom';

/**
 * @icons
 */
import { BsArrowLeftShort } from 'react-icons/bs';

/**
 * @styles
 */
import Styles from './back.module.scss';

export const Back = () => {
  const navigate = useNavigate();

  const onNavigate = () => navigate(-1);

  return (
    <div className={Styles.icon__container} onClick={onNavigate}>
      <BsArrowLeftShort className={Styles.icon} />
    </div>
  );
};
