/**
 * @components
 */
import { AvatarSection, Bottom, Content, Top } from '../../components/Post';

/**
 * @styles
 */
import Styles from './Post.module.scss';

export const Post = () => {
  return (
    <article className={Styles.post__container}>
      <AvatarSection />

      <div className={Styles.post__section}>
        <Top />
        <Content />
        <Bottom />
      </div>
    </article>
  );
};
