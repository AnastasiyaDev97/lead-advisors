import { memo } from 'react';

import style from './Counter.module.scss';

import { Badge } from 'components';
import useCountDown from 'hooks/useCountDown';
import { ReturnComponentType } from 'types';

type CounterItemPropsType = {
  time: number;
  unit: string;
};

export const Counter = memo((): ReturnComponentType => {
  const value = useCountDown();

  return (
    <div className={style.wrapper}>
      <CounterItem time={66} unit="dd" />
      <CounterItem time={66} unit="dd" />
      <CounterItem time={66} unit="dd" />
      <CounterItem time={66} unit="dd" />
    </div>
  );
});

const CounterItem = memo(({ time, unit }: CounterItemPropsType): ReturnComponentType => {
  return (
    <div className={style.counterItemWrapper}>
      <span className={style.time}>{time}</span>
      <Badge text={unit} />
    </div>
  );
});
