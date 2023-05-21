import { useCallback, useState } from 'react';

import style from './Modal.module.scss';

import cross from 'assets/images/cross.png';
import { Button } from 'components';
import { ReturnComponentType } from 'types';

type ModalPropsType = { title: string; text: string };

export const Modal = ({ title, text }: ModalPropsType): ReturnComponentType => {
  const [show, setShow] = useState(false);

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);

  if (!show) return null;

  return (
    <>
      <div className={style.background} onClick={closeModal} />
      <div className={style.modalWrapper}>
        <div className={style.exitButton} onClick={closeModal}>
          <img src={cross} alt="exit" />
        </div>
        <h4 className={style.title}>{title}</h4>
        <p className={style.text}>{text}</p>
        <Button onClick={closeModal} btnclassName="primary">
          Close
        </Button>
      </div>
    </>
  );
};
