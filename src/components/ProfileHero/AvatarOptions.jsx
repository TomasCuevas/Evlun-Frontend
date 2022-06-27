import { useContext } from 'react';
/**
 * @components
 */
import { Option } from './Option';

/**
 * @styles
 */
import Styles from './avatarOptions.module.scss';

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const AvatarOptions = () => {
  const { avatar } = useContext(AuthContext);

  return (
    <div className={Styles.info_top__container}>
      <div className={Styles.avatar__container}>
        <img src={avatar} alt='user img' className={Styles.avatar} />
      </div>
      <div className={Styles.options__container}>
        <Option text='Editar Perfil' />
      </div>
    </div>
  );
};
