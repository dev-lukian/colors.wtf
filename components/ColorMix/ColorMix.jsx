import cn from 'classnames';
import { useContext, useEffect, useState } from 'react';

import styles from './ColorMix.module.css';

import { ColorMixContext } from '../../context/ColorMixContext';
import { getCssRgb } from '../../util/colorConversion';

import ColorMixLabel from '../ColorMixLabel/ColorMixLabel';
import MintButton from '../MintButton/MintButton';

const ColorMix = () => {
  const { mixedContext, leftContext, rightContext, leftAnimationContext, rightAnimationContext } =
    useContext(ColorMixContext);
  const [mixed, setMixed] = mixedContext;
  const [right, setRight] = rightContext;
  const [left, setLeft] = leftContext;
  const [leftAnimationInProgress, setLeftAnimationInProgress] = leftAnimationContext;
  const [rightAnimationInProgress, setRightAnimationInProgress] = rightAnimationContext;

  useEffect(() => {
    if (right && left) {
      setTimeout(() => setMixed(mixColors()), 900);
    } else if (mixed != null) {
      setMixed(null);
    }
  }, [left, right]);

  const mixColors = () => {
    return {
      r: Math.floor((left.rgb.r + right.rgb.r) / 2),
      g: Math.floor((left.rgb.g + right.rgb.g) / 2),
      b: Math.floor((left.rgb.b + right.rgb.b) / 2),
    };
  };

  return (
    <div className={styles.colorMixWrapper}>
      <div className={styles.circlesWrapper}>
        <div
          className={cn(styles.circle, styles.smallCircle, left && styles.leftCircleMove)}
          style={{ backgroundColor: left ? getCssRgb(left.rgb) : styles.circle.backgroundColor }}
        >
          {left && !leftAnimationInProgress && (
            <ColorMixLabel side="left" remove={setLeft} name={left.name} rgb={left.rgb} owner={left.owner} />
          )}
        </div>
        <div
          className={cn(styles.circle, styles.bigCircle)}
          style={{ backgroundColor: mixed ? getCssRgb(mixed) : styles.circle.backgroundColor }}
        ></div>
        <div
          className={cn(styles.circle, styles.smallCircle, right && styles.rightCircleMove)}
          style={{ backgroundColor: right ? getCssRgb(right.rgb) : styles.circle.backgroundColor }}
        >
          {right && !rightAnimationInProgress && (
            <ColorMixLabel side="right" remove={setRight} name={right.name} rgb={right.rgb} owner={right.owner} />
          )}
        </div>
      </div>
      <MintButton />
    </div>
  );
};

export default ColorMix;
