/**
 * @layout
 */
import { Comment } from '../';

/**
 * @pages
 */
import { LoadingPage } from '../../pages/LoadingPage/LoadingPage';

/**
 * @hooks
 */
import { useCommentsStore } from '../../hooks';

/**
 * @styles
 */
import Styles from './FeedComments.module.scss';

/**
 * @context
 */
import { CommentContext } from '../../context';

export const FeedComments = () => {
  const { comments, isLoading } = useCommentsStore();

  if (isLoading) return <LoadingPage />;

  return (
    <section className={Styles.feedcomments__container}>
      <div className={Styles.allcomments__container}>
        {comments.map((comment) => (
          <CommentContext.Provider key={comment._id} value={{ ...comment }}>
            <Comment />
          </CommentContext.Provider>
        ))}
      </div>
    </section>
  );
};
