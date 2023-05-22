import { memo } from 'react';

import style from './Counter.module.scss';

import { Badge } from 'components';
/* import { DATE_UNITS } from 'constants/date'; */
import useCountDown from 'hooks/useCountDown';
/* import useWindowDimensions from 'hooks/useDimension'; */
import { ReturnComponentType } from 'types';
import { twoDigitNumberConverter } from 'utils/numbers';

type CounterItemPropsType = {
  time: string;
  unit: string;
};

export const Counter = memo((): ReturnComponentType => {
  const values = useCountDown();
  /*  const { isDesktopXL } = useWindowDimensions(); */

  return (
    <div className={style.wrapper}>
      {Object.entries(values)?.map(value => {
        const unit = /* isDesktopXL ? DATE_UNITS[value[0]] : */ value[0];

        return (
          <CounterItem
            key={value[0]}
            time={twoDigitNumberConverter(value[1])}
            unit={unit}
          />
        );
      })}
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
