/**
 * @styles
 */
import styles from './postContent.module.scss';

export const PostContent = ({ content }) => {

  return (
    <div className={styles.post__content}>
      <span className={styles.content}>
        { content }
      </span>
    </div>
  )
}