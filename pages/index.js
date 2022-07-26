import Head from 'next/head';
import {useState, useMemo } from 'react';

import ColorMix from '../components/ColorMix/ColorMix';
import ColorScroll from '../components/ColorScroll/ColorScroll';

import { ColorMixContext } from "../context/ColorMixContext";

const COLORS = [
  {
    name: 'Color name',
    rgb: { r: 116, g: 150, b: 91 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 104, g: 207, b: 96 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 112, g: 162, b: 94 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 27, g: 114, b: 41 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 165, g: 237, b: 136 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 231, g: 170, b: 67 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 169, g: 141, b: 36 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 32, g: 90, b: 238 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 167, g: 41, b: 224 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 111, g: 58, b: 65 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 155, g: 23, b: 22 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 57, g: 97, b: 139 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 62, g: 27, b: 16 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 215, g: 48, b: 87 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 183, g: 36, b: 33 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 65, g: 112, b: 172 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 7, g: 90, b: 219 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 239, g: 206, b: 37 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 227, g: 176, b: 199 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 248, g: 83, b: 190 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 109, g: 219, b: 112 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 137, g: 184, b: 215 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 49, g: 196, b: 134 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 153, g: 121, b: 73 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 254, g: 59, b: 198 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 121, g: 54, b: 43 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 244, g: 95, b: 142 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 158, g: 210, b: 133 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 199, g: 184, b: 3 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  },
  {
    name: 'Color name',
    rgb: { r: 168, g: 149, b: 93 },
    owner: '0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58'
  }
]

export default function Home() {

  const [right, setRight] = useState();
  const [left, setLeft] = useState();

  // FIXME: gets rerendered on context change
  // Move Provider to child?
  // https://kentcdodds.com/blog/how-to-optimize-your-context-value

  console.log("hi")

  // TODO: look into if this is needed
  // const providerValue = useMemo(() => ({
  //   right, setRight,
  //   left, setLeft,
  // }), [right, left]);

  return (
    <>
      <Head>
        <title>colors.wtf</title>
        <meta name="description" content="colors.wtf mixing and minting app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ColorMixerContext.Provider value={providerValue}> */}
      <ColorMixContext.Provider value={{rightContext: [right, setRight], leftContext: [left, setLeft]}}>
        <ColorMix />
        <ColorScroll colors={COLORS}/>
      </ColorMixContext.Provider>
    </>
  );
}
