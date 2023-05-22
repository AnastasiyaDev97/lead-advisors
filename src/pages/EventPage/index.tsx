import style from './EventPage.module.scss';

import { Title } from 'components';
import { Root } from 'Root';
import { ReturnComponentType } from 'types';

export const EventPage = (): ReturnComponentType => {
  return (
    <Root>
      <div className={style.eventPageWrapper}>
        <Title title="All events" />
      </div>
    </Root>
  );
};
