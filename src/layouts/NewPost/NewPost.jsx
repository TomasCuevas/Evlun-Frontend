import { useState } from 'react';

/**
 * @components
 */
import { PostAvatarSection } from '../../components/Post/PostAvatarSection';

/**
 * @hooks
 */
import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';
import { usePostsStore } from '../../hooks/usePostsStore';

/**
 * @styles
 */
import Styles from './NewPost.module.scss';

export const NewPost = () => {
  const { startCreateNewPosts, isCreating } = usePostsStore();
  const { avatar, name, username } = useAuthStore();
  const [height, setHeight] = useState(40);
  const { post, onInputChange } = useForm({
    post: '',
  });

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
    <article className={Styles.newpost__container}>
      <section className={Styles.top__section}>
        <PostAvatarSection avatar={avatar} username={username} name={name} />
        <div className={Styles.input__section}>
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
        </div>
      </section>
      <section className={Styles.botton__section}>
        <div className={Styles.button__container}>
          <button type="submit" disabled={isCreating} className={Styles.button} onClick={onSubmit}>
            Postear
          </button>
        </div>
      </section>
    </article>
  );
};
