/**
 * @components
 */
import { AvatarSection, Bottom, Content, Top } from '../../components/Comment';

/**
 * @styles
 */
import Styles from './Comment.module.scss';

export const Comment = () => {
  return (
    <article className={Styles.comment__container}>
      <AvatarSection />

      <div className={Styles.comment__section}>
        <Top />
        <Content />
        <Bottom />
      </div>
    </article>
  );
};
