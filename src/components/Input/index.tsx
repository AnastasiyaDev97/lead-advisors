import { ChangeEvent, memo, useState } from 'react';

import style from './Input.module.scss';

import { ReturnComponentType, WithChildrenType } from 'types';

type InputPropsType = WithChildrenType;

export const Input = memo(({ children }: InputPropsType): ReturnComponentType => {
  const [value, setValue] = useState('');

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className={style.inputContainer}>
      <input
        type="email"
        placeholder="Enter your Email and get notified"
        className={style.input}
        value={value}
        onChange={onChangeValue}
      />
      {children && <div className={style.inputButton}>{children}</div>}
    </div>
  );
});
