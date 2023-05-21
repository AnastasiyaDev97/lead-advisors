import { memo } from 'react';

import style from './Title.module.scss';

import { ReturnComponentType } from 'types';

type TitlePropsType = {
  title: string;
  subtitle?: string;
};

export const Title = memo(({ title, subtitle }: TitlePropsType): ReturnComponentType => {
  return (
    <div className={style.titleWrapper}>
      <h2 className={style.title}>{title}</h2>
      {subtitle && <h3 className={style.subtitle}>{subtitle}</h3>}
    </div>
  );
});
