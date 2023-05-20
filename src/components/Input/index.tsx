import { ChangeEvent, memo, useState } from 'react';

import style from './Input.module.scss';

import { ReturnComponentType } from 'types';

export const Input = memo((): ReturnComponentType => {
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
    </div>
  );
});
