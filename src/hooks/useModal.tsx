import { useState, useCallback } from 'react';

export type ModalContentType = {
  title?: string;
  text: string;
};

export type ReturnUseModalType = {
  modal: boolean;
  openModal: (content: ModalContentType) => void;
  closeModal: () => void;
  modalContent: ModalContentType;
};

export const useModal = (): ReturnUseModalType => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContentType>({
    title: '',
    text: '',
  });

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  const openModal = useCallback((content: ModalContentType): void => {
    setModal(true);
    setModalContent(content);
  }, []);

  return { modal, closeModal, openModal, modalContent };
};
