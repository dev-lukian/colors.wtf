import '../styles/fonts.css';
import '../styles/globals.css';

import Navbar from '../components/Navbar/Navbar';

import { AccountContext } from '../context/AccountConext';
import { LibraryContext } from '../context/LibraryContext';

import styles from '../styles/app.module.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [account, setAccount] = useState();
  const [library, setLibrary] = useState();
  
  return (
    <div className={styles.rootWrapper}>
      <AccountContext.Provider value={[account, setAccount]}>
        <LibraryContext.Provider value={[library, setLibrary]}>
          <Navbar />
          <Component {...pageProps} />
        </LibraryContext.Provider>
      </AccountContext.Provider>
    </div>
  );
}

export default MyApp;
