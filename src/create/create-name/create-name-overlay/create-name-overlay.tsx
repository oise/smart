import './create-name-overlay.scss';
import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

const overlayRoot = document.getElementById('overlay-root');

const CreateNameOverlay: FC = ({ children }) => {
  const element = document.createElement('div');
  element.className = 'create-name-overlay';

  useEffect(() => {
    overlayRoot.appendChild(element);

    return () => {
      overlayRoot.removeChild(element);
    };
  }, []);

  return createPortal(children, element);
};

export default CreateNameOverlay;
