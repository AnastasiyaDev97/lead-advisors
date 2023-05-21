import style from './MainPage.module.scss';

import { Counter, Layout, Title } from 'components';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const MainPage = (): ReturnComponentType => {
  return (
    <Layout>
      <div className={style.mainPageWrapper}>
        <Title
          title="Under Construction"
          subtitle="We're making lots of improvements and will be back soon"
        />
        <Counter />
      </div>
    </Layout>
  );
};
