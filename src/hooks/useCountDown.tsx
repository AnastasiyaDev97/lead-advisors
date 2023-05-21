import { useEffect, useRef, useState } from 'react';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { clearState, loadState, saveState } from 'utils/localStorage';

dayjs.extend(duration);

export type FormattedTimer = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const useCountDown = (): FormattedTimer => {
  const intervalRef = useRef<number>();

  const [timerValue, setTimerValue] = useState<FormattedTimer>({} as FormattedTimer);

  const endTime = dayjs('2023-05-31 00:00');

  useEffect(() => {
    if (!loadState('endTime')) {
      saveState(endTime, 'endTime');
    } else {
      const id = setInterval(() => {
        const remaining = +endTime - +dayjs();

        if (remaining >= 0) {
          const days = dayjs.duration(remaining).days();
          const hours = dayjs.duration(remaining).hours();
          const minutes = dayjs.duration(remaining).minutes();
          const seconds = dayjs.duration(remaining).seconds();

          setTimerValue({ days, hours, minutes, seconds });
        } else {
          clearInterval(id);

          setTimerValue({ days: 0, hours: 0, minutes: 0, seconds: 0 });

          clearState('endTime');
        }
      }, 1000);

      intervalRef.current = id;
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [endTime]);

  return timerValue;
};

export default useCountDown;
