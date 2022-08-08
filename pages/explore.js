import Head from 'next/head';
import { useState } from 'react';

import ColorScroll from '../components/ColorScroll/ColorScroll';
import Modal from '../components/Modal/Modal';

import { ModalContext } from '../context/ModalContext';

import { COLORS } from '../constants/constants';

import styles from '../styles/explore.module.css';


export default function Explore() {

  const [modalColor, setModalColor] = useState(null);

  return (
    <>
      <Head>
        <title>explore</title>
        <meta name="description" content="explore colors.wtf" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ModalContext.Provider
        value={[modalColor, setModalColor]}
      >
        <div className={styles.exploreWrapper}>
        { modalColor ? <Modal/> : null }
        <h1>explore</h1>
        <ColorScroll modal={true}/>
        </div>
      </ModalContext.Provider>

    </>
  );
}
