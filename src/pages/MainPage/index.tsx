import style from './MainPage.module.scss';

import { sendMessage } from 'api';
import { Counter, ExternalLink, Layout, Modal, Title } from 'components';
import { Button } from 'components/Button';
import { ReturnComponentType } from 'types/ReturnComponentType';
export const MainPage = (): ReturnComponentType => {
  const onClick = (): void => {
    sendMessage({ name: 'jjj', email: 'hjkhk', text: 'hjhjjjj' });
  };

  return (
    <>
      <Layout>
        <div className={style.mainPageWrapper}>
          <Title
            title="Under Construction"
            subtitle="We're making lots of improvements and will be back soon"
          />
          <Counter />
          <p className={style.simpleText}>Check our event page when you wait:</p>
          <ExternalLink href="https://www.britannica.com/animal/cat">
            <Button btnclassName={['navigation', 'primary']}>Go to the event</Button>
          </ExternalLink>
          <div onClick={onClick}>hhhhhhhhhhhhhhhh</div>
        </div>
      </Layout>
      <Modal
        title="success!"
        text="You have successfully subscribed to the email newsletter"
      />
    </>
  );
};
