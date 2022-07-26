import { useState } from 'react';

/**
 * @hooks
 */
import { useForm, usePostsStore } from '../../hooks';

/**
 * @styles
 */
import Styles from './CommentFormSection.module.scss';

export const CommentFormSection = () => {
  const { startCreateNewPosts, isCreating } = usePostsStore();
  const { post, onInputChange } = useForm({
    post: '',
  });
  const [height, setHeight] = useState(40);

  const onInput = (input) => {
    const heightInput = input.target.scrollHeight;
    setHeight(heightInput);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (post.length < 1 || post.length > 155) return;

    await startCreateNewPosts(post);
    onInputChange({ target: { value: '', name: 'post' } });
  };

  return (
    <section className={Styles.form__section}>
      <form className={Styles.form__container}>
        <textarea
          className={Styles.input}
          disabled={isCreating}
          maxLength={155}
          name="post"
          onChange={onInputChange}
          onInput={onInput}
          placeholder="¿Qué está pasando?"
          style={{ height }}
          value={post}
        />
        <div className={Styles.button__container}>
          <button type="submit" disabled={isCreating} className={Styles.button} onClick={onSubmit}>
            Postear
          </button>
        </div>
      </form>
    </section>
  );
};
