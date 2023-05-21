import { Layout, Title } from 'components';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const MainPage = (): ReturnComponentType => {
  return (
    <Layout>
      <Title
        title="Under Construction"
        subtitle="We're making lots of improvements and will be back soon"
      />
    </Layout>
  );
};
