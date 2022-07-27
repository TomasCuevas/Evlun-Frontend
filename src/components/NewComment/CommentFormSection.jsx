import { useState } from 'react';

/**
 * @hooks
 */
import { useForm, useCommentsStore, usePostsStore } from '../../hooks';

/**
 * @styles
 */
import Styles from './CommentFormSection.module.scss';

export const CommentFormSection = () => {
  const { startCreateNewComment, isCreating } = useCommentsStore();
  const { openPost } = usePostsStore();
  const { comment, onInputChange } = useForm({
    comment: '',
  });
  const [height, setHeight] = useState(40);

  const onInput = (input) => {
    const heightInput = input.target.scrollHeight;
    setHeight(heightInput);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (comment.length < 1 || comment.length > 155) return;

    await startCreateNewComment(comment, openPost._id);
    onInputChange({ target: { value: '', name: 'comment' } });
  };

  return (
    <section className={Styles.form__section}>
      <form className={Styles.form__container}>
        <textarea
          className={Styles.input}
          disabled={isCreating}
          maxLength={155}
          name="comment"
          onChange={onInputChange}
          onInput={onInput}
          placeholder="¿Qué está pasando?"
          style={{ height }}
          value={comment}
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
