import '../styles/fonts.css';
import '../styles/globals.css';

import Navbar from '../components/Navbar/Navbar';

import styles from '../styles/app.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.rootWrapper}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
