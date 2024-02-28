import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { EditContactForm } from 'components';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ item = null, close, isEdit = false }) => {
  useEffect(() => {
    const handleEscPress = event => {
      if (event.code === 'Escape') close();
    };

    document.addEventListener('keydown', handleEscPress);

    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [close]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center bg-black/[0.6]"
    >
      <EditContactForm item={item} close={close} isEdit={isEdit} />
    </div>,
    modalRoot
  );
};
