/**
 * @components
 */
import { AvatarSection } from '../../components/NewPost';
import { CommentFormSection } from '../../components/NewComment';

/**
 * @styles
 */
import Styles from './NewComment.module.scss';

export const NewComment = () => {
  return (
    <article className={Styles.newcomment__container}>
      <AvatarSection />
      <CommentFormSection />
    </article>
  );
};
