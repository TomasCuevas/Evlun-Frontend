import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @styles
 */
import Styles from './Content.module.scss';

/**
 * @context
 */
import { PostContext } from '../../context';

export const Content = () => {
  const { content, _id } = useContext(PostContext);
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/post/${_id}`);
  };

  return (
    <section onClick={onNavigate} className={Styles.post__content}>
      <span className={Styles.content}>{content}</span>
    </section>
  );
};
