import { useContext } from 'react';

/**
 * @styles
 */
import Styles from './Content.module.scss';

/**
 * @context
 */
import { CommentContext } from '../../contexts';

export const Content = () => {
  const { content } = useContext(CommentContext);

  return (
    <section className={Styles.comment__content}>
      <span className={Styles.content}>{content}</span>
    </section>
  );
};
