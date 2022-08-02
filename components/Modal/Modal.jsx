import styles from './Modal.module.css';
import { useContext } from 'react';

import { ModalContext } from '../../context/ModalContext';
import ColorProfile from '../ColorProfile/ColorProfile';

const Modal = () => {

  const [modalColor, setModalColor] = useContext(ModalContext);

  return (
    <>
      <div 
        className={styles.modalWrapper}
        onClick={() => console.log("modal")}
      >
        <ColorProfile color={modalColor}/>
      </div>
      <div className={styles.backgroundBlur}
        onClick={() => setModalColor(null)}
      > 
      </div>
    </>
  );
};

export default Modal;
