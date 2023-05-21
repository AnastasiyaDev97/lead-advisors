import { memo } from 'react';

import type { FieldInputProps } from 'formik';

import style from './Input.module.scss';

import { ReturnComponentType, WithChildrenType } from 'types';

type InputPropsType = WithChildrenType & {
  label: string;
  formikProps?: FieldInputProps<any>;
  validationErr?: string;
};

export const Input = memo(
  ({
    children,
    label,
    formikProps,
    validationErr,
  }: InputPropsType): ReturnComponentType => {
    return (
      <div className={style.inputContainer}>
        {validationErr && <div className={style.error}>{validationErr}</div>}
        <label htmlFor={label} />
        <input
          {...formikProps}
          id={label}
          type="text"
          placeholder="Enter your Email and get notified"
          className={style.input}
        />
        {children && <div className={style.inputButton}>{children}</div>}
      </div>
    );
  },
);
