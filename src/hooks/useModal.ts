import { useEffect, useRef, useState } from 'react';

const createBackdrop = () => {
  const backdrop = document.createElement('div');

  backdrop.classList.add('backdrop');
  backdrop.style.width = 'var(--max-content-width)';
  backdrop.style.height = '100%';
  backdrop.style.backgroundColor = 'rgba(0,0,0,0.5)';
  backdrop.style.position = 'fixed';
  backdrop.style.top = '0';
  backdrop.style.zIndex = '100';

  return backdrop;
};

const useModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = () => {
    setIsOpen(true);
  };

  const modalClose = () => {
    setIsOpen(false);
    removeBackdrop();
  };

  const removeBackdrop = () => {
    const divElement = document.querySelector('.backdrop');
    if (divElement) divElement.remove();
  };

  useEffect(() => {
    if (modalRef.current) {
      if (isOpen) {
        const backdrop = createBackdrop();

        if (modalRef.current.parentElement) {
          modalRef.current.parentElement.append(backdrop);
        }

        backdrop.addEventListener('click', () => {
          modalClose();
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            modalClose();
          }
        });
      }

      if (!isOpen) {
        removeBackdrop();
      }

      modalRef.current.style.display = isOpen ? 'block' : 'none';
    }
  }, [isOpen]);

  return { open: modalOpen, close: modalClose, ref: modalRef };
};

export default useModal;
