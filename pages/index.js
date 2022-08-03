import Head from 'next/head';
import { useState, useMemo } from 'react';

import ColorMix from '../components/ColorMix/ColorMix';
import ColorScroll from '../components/ColorScroll/ColorScroll';

import { ColorMixContext } from '../context/ColorMixContext';

import { COLORS } from '../constants/constants';

import styles from '../styles/index.module.css';

export default function Home() {
  const [mixed, setMixed] = useState();
  const [right, setRight] = useState();
  const [left, setLeft] = useState();
  const [rightAnimationInProgress, setRightAnimationInProgress] = useState(false);
  const [leftAnimationInProgress, setLeftAnimationInProgress] = useState(false);

  // FIXME: gets rerendered on context change
  // Move Provider to child?
  // https://kentcdodds.com/blog/how-to-optimize-your-context-value

  console.log('hi');

  // TODO: look into if this is needed
  // const providerValue = useMemo(() => ({
  //   right, setRight,
  //   left, setLeft,
  // }), [right, left]);

  return (
    <>
      <Head>
        <title>mint</title>
        <meta name="description" content="colors.wtf mixing and minting app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ColorMixContext.Provider
        value={{
          mixedContext: [mixed, setMixed],
          leftContext: [left, setLeft],
          rightContext: [right, setRight],
          leftAnimationContext: [leftAnimationInProgress, setLeftAnimationInProgress],
          rightAnimationContext: [rightAnimationInProgress, setRightAnimationInProgress],
        }}
      >
        <div className={styles.homeWrapper}>
          <ColorMix />
          <ColorScroll modal={false} colors={COLORS} />
        </div>
      </ColorMixContext.Provider>
    </>
  );
}
