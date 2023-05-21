import style from './Button.module.scss';

import { ButtonType, ReturnComponentType, WithChildrenType } from 'types';

type ButtonPropsType = { btnclassName?: ButtonType | ButtonType[] } & WithChildrenType;

export const Button = ({
  children,
  btnclassName,
}: ButtonPropsType): ReturnComponentType => {
  const buttonClassNames = (): string => {
    let finalClassName = `${style.button}`;

    if (btnclassName) {
      if (Array.isArray(btnclassName)) {
        btnclassName.forEach(className => {
          finalClassName = finalClassName + ` ${style[className]}`;
        });
      } else {
        finalClassName = finalClassName + `${style[btnclassName]}`;
      }

      return finalClassName;
    }

    return finalClassName;
  };

  return <button className={buttonClassNames()}>{children}</button>;
};
