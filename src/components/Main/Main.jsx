/**
 * @styles
 */
import Styles from './main.module.scss';

export const Main = ({ children }) => {
  return <main className={Styles.main__container}>{children}</main>;
};
