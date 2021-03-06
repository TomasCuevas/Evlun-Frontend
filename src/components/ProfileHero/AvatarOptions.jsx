/**
 * @components
 */
import { Option } from './Option';

/**
 * @hooks
 */
import { useProfileStore } from '../../hooks/useProfileStore';

/**
 * @styles
 */
import Styles from './avatarOptions.module.scss';

export const AvatarOptions = () => {
  const { avatar } = useProfileStore();

  return (
    <div className={Styles.info_top__container}>
      <div className={Styles.avatar__container}>
        <img src={avatar} alt="user img" className={Styles.avatar} />
      </div>
      <div className={Styles.options__container}>
        <Option text="Editar Perfil" />
      </div>
    </div>
  );
};
