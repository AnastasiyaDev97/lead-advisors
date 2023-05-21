import { memo } from 'react';

import style from './Badge.module.scss';

import { ReturnComponentType } from 'types';

type BadgePropsType = {
  text: string;
};

export const Badge = memo(({ text }: BadgePropsType): ReturnComponentType => {
  return (
    <div className={style.badge}>
      <div className={style.badgeIcon} />
      <span className={style.text}>{text}</span>
    </div>
  );
});
