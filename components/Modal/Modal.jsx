import styles from './Modal.module.css';
import { useContext } from 'react';
import Image from 'next/image';

import Close from '../../public/close.svg';

import { ModalContext } from '../../context/ModalContext';
import ColorProfile from '../ColorProfile/ColorProfile';

const Modal = () => {
  const [modalColor, setModalColor] = useContext(ModalContext);

  return (
    <>
      <div className={styles.modalWrapper} onClick={() => console.log('modal')}>
        <ColorProfile color={modalColor} />
        <div className={styles.closeButton} onClick={() => setModalColor(null)}>
          <Close className={styles.closeIcon} />
        </div>
      </div>
      <div className={styles.backgroundBlur} onClick={() => setModalColor(null)}></div>
    </>
  );
};

export default Modal;
