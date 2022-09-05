import { useRef } from 'react';
import styles from './Toast.module.css';

import cn from 'classnames';
import Lottie from 'lottie-react';
import success from '../../public/success.json';
import failure from '../../public/failure.json';
import { useEffect } from 'react';

const Toast = ({ text, type, show, setShow }) => {
  const successRef = useRef();
  const failureRef = useRef();

  useEffect(() => {
    if (show == true) {
      setTimeout(() => {
        setShow({
          show: false,
          text: text,
          type: type,
        });
      }, 3000);
    }
  }, [show]);

  useEffect(() => {
    if (type == 'success') {
      if (successRef.current != undefined) {
        successRef.current.playSegments([0, 80], true);
      }
    } else {
      if (failureRef.current != undefined) {
        console.log(failureRef.current);
        failureRef.current.playSegments([20, 80], true);
      }
    }
  }, [text]);

  return (
    <div className={cn(styles.toastContainer, show == true && styles.showToast)}>
      <div className={styles.toastWrapper}>
        {type == 'success' && (
          <Lottie
            className={styles.lottie}
            animationData={success}
            autoplay={false}
            loop={false}
            lottieRef={successRef}
          />
        )}
        {type == 'failure' && (
          <Lottie
            className={styles.lottie}
            animationData={failure}
            autoplay={false}
            loop={false}
            lottieRef={failureRef}
          />
        )}
        {text}
      </div>
    </div>
  );
};

export default Toast;
