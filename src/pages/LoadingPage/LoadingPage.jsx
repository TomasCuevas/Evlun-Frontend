/**
 * @components
 */
import { Main } from '../../components/Main/Main';

/**
 * @styles
 */
import Styles from './LoadingPage.module.scss';

export const LoadingPage = () => {
  return (
    <Main>
      <div className={Styles.container}>
        <span pan className={Styles.loader}></span>
      </div>
    </Main>
  );
};
