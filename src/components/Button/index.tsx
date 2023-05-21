import { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react';

import style from './Button.module.scss';

import { ButtonType, ReturnComponentType } from 'types';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonPropsType = {
  btnclassName?: ButtonType | ButtonType[];
} & DefaultButtonPropsType;

export const Button = memo(
  ({
    children,
    btnclassName,
    onClick,
    ...rest
  }: ButtonPropsType): ReturnComponentType => {
    const buttonClassNames = (): string => {
      let finalClassName = `${style.button}`;

      if (btnclassName) {
        if (Array.isArray(btnclassName)) {
          btnclassName.forEach(className => {
            finalClassName = finalClassName + ` ${style[className]}`;
          });
        } else {
          finalClassName = finalClassName + ` ${style[btnclassName]}`;
        }

        return finalClassName;
      }

      return finalClassName;
    };

    return (
      <button type="submit" className={buttonClassNames()} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  },
);
