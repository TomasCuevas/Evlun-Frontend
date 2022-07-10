import { useContext, useState } from 'react';

/**
 * @components
 */
import { PostAvatarSection } from '../../components/Post/PostAvatarSection';

/**
 * @hooks
 */
import { useForm } from '../../hooks/useForm';

/**
 * @styles
 */
import Styles from './NewPost.module.scss';

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const NewPost = () => {
  const { avatar, name } = useContext(AuthContext);
  const [height, setHeight] = useState(40);
  const { post, onInputChange } = useForm({
    post: '',
  });

  const onInput = (input) => {
    const heightInput = input.target.scrollHeight;
    setHeight(heightInput);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <article className={Styles.newpost__container}>
      <section className={Styles.top__section}>
        <PostAvatarSection avatar={avatar} name={name} />
        <div className={Styles.input__section}>
          <textarea
            className={Styles.input}
            name="post"
            onChange={onInputChange}
            onInput={onInput}
            value={post}
            placeholder="¿Qué está pasando?"
            maxLength={155}
            style={{ height }}
          />
        </div>
      </section>
      <section className={Styles.botton__section}>
        <div className={Styles.button__container}>
          <button type="submit" className={Styles.button} onSubmit={onSubmit}>
            Postear
          </button>
        </div>
      </section>
    </article>
  );
};
