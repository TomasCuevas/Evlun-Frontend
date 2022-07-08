import { useState } from 'react';

/**
 * @hooks
 */
import { useForm } from '../../hooks/useForm';

/**
 * @styles
 */
import Styles from './NewPost.module.scss';

export const NewPost = () => {
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
      <section className={Styles.input__section}>
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
