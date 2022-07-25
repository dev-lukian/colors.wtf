import cn from 'classnames';
import { useContext, useEffect, useState } from 'react';

import styles from './ColorMix.module.css';

import { ColorMixContext } from "../../context/ColorMixContext";

import ColorMixLabel from '../ColorMixLabel/ColorMixLabel';

const ColorMix = () => {

  const {rightContext, leftContext} = useContext(ColorMixContext); 
  const [mixed, setMixed] = useState(null)
  const [right, setRight] = rightContext;
  const [left, setLeft] = leftContext;

  useEffect(() => {

    if (right && left) {
      setMixed(mixColors())
    } else if (mixed != null){
        setMixed(null)
    }

  },[right, left])

  const getCssRgb = (rgb) => {
    return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)';
  }

  const mixColors = () => {
    return { r: Math.floor((left.rgb.r + right.rgb.r) / 2), g: Math.floor((left.rgb.g + right.rgb.g) / 2), b: Math.floor((left.rgb.b + right.rgb.b) / 2) };
  }

  return (
    <div className={styles.colorMixWrapper}>
      {
        left ? <ColorMixLabel remove={setLeft} name={left.name} rgb={left.rgb} owner={left.owner} /> : null
      }
      <div className={cn(styles.circle, styles.smallCircle)} style={{backgroundColor: left ? getCssRgb(left.rgb) : styles.circle.backgroundColor}}></div>
      <div className={cn(styles.circle, styles.bigCircle)} style={{backgroundColor: mixed ? getCssRgb(mixed) : styles.circle.backgroundColor}}></div>
      <div className={cn(styles.circle, styles.smallCircle)} style={{backgroundColor: right ? getCssRgb(right.rgb) : styles.circle.backgroundColor}}></div>
      {
        right ? <ColorMixLabel remove={setRight} name={right.name} rgb={right.rgb} owner={right.owner} /> : null
      }
    </div>
  );
};

export default ColorMix;
