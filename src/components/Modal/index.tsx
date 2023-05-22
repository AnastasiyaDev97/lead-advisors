import { useContext } from 'react';

import style from './Modal.module.scss';
import { ModalContext } from './ModalProvider';

import cross from 'assets/images/cross.png';
import { Button } from 'components';
import { ReturnUseModalType } from 'hooks/useModal';
import { ReturnComponentType } from 'types';

export const Modal = (): ReturnComponentType => {
  const { modalContent, closeModal, modal } =
    useContext<ReturnUseModalType>(ModalContext);

  if (modal) {
    return (
      <>
        <div className={style.background} onClick={closeModal} />
        <div className={style.modalWrapper}>
          <div className={style.exitButton} onClick={closeModal}>
            <img src={cross} alt="exit" />
          </div>
          {modalContent?.title && <h4 className={style.title}>{modalContent?.title}</h4>}
          <p className={style.text}>{modalContent?.text}</p>
          <Button onClick={closeModal} btnclassName="primary">
            Close
          </Button>
        </div>
      </>
    );
  }

  return null;
};
