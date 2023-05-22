import style from './MainPage.module.scss';

import { Counter, ExternalLink, Title } from 'components';
import { Button } from 'components/Button';
import { Root } from 'Root';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const MainPage = (): ReturnComponentType => {
  return (
    <Root>
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
      </div>
    </Root>
  );
};
