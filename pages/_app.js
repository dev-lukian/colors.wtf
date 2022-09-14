import '../styles/fonts.css';
import '../styles/globals.css';

import Navbar from '../components/Navbar/Navbar';

import { AccountContext } from '../context/AccountConext';
import { LibraryContext } from '../context/LibraryContext';
import { ToastContext } from '../context/ToastContext';

import styles from '../styles/app.module.css';
import { useState } from 'react';
import Toast from '../components/Toast/Toast';

function MyApp({ Component, pageProps }) {
  const [account, setAccount] = useState();
  const [library, setLibrary] = useState();
  const [showToast, setShowToast] = useState(false);
  const [toastDetails, setToastDetails] = useState({
    text: '',
    type: '',
  });

  return (
    <div className={styles.rootWrapper}>
      <AccountContext.Provider value={[account, setAccount]}>
        <LibraryContext.Provider value={[library, setLibrary]}>
          <ToastContext.Provider
            value={{
              showToastContext: [showToast, setShowToast],
              toastDetailsContext: [toastDetails, setToastDetails],
            }}
          >
            <Navbar />
            <Component {...pageProps} />
            <Toast text={toastDetails.text} type={toastDetails.type} show={showToast} setShow={setShowToast} />
          </ToastContext.Provider>
        </LibraryContext.Provider>
      </AccountContext.Provider>
    </div>
  );
}

export default MyApp
