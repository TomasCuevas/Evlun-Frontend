/**
 * @components
 */
import { AvatarSection, PostFormSection } from '../../components/NewPost';

/**
 * @styles
 */
import Styles from './NewPost.module.scss';

export const NewPost = () => {
  return (
    <article className={Styles.newpost__container}>
      <AvatarSection />
      <PostFormSection />
    </article>
  );
};
