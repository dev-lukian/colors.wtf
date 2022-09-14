import { useContext, useEffect, useState } from 'react';

import cn from 'classnames';
import styles from './ColorProfile.module.css';

import { getCssRgb, getTextRgb, rgbToHex } from '../../util/colorConversion';

const ColorProfile = ({ color }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    setAnimationStep(1);
    setTimeout(() => {
      setAnimationStep(2);
    }, 900);
  }, [color]);

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.circlesWrapper}>
        <div
          className={cn(styles.circle, styles.smallCircle, animationStep >= 1 && styles.leftCircleMove)}
          style={{ backgroundColor: getCssRgb(color.rgb) }}
        />
        <div
          className={cn(styles.circle, styles.bigCircle)}
          style={{ backgroundColor: animationStep == 2 ? getCssRgb(color.rgb) : styles.circle.backgroundColor }}
        />
        <div
          className={cn(styles.circle, styles.smallCircle, animationStep >= 1 && styles.rightCircleMove)}
          style={{ backgroundColor: getCssRgb(color.rgb) }}
        />
      </div>
      <div className={styles.grid}>
        <div className={cn(styles.nameWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Name</div>
          <div className={styles.gridInputLarge}>{color.name}</div>
        </div>
        <div className={cn(styles.rgbWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>RGB</div>
          <div className={styles.gridInputSmall}>{getTextRgb(color.rgb)}</div>
        </div>
        <div className={cn(styles.hexWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Hex</div>
          <div className={styles.gridInputSmall}>{rgbToHex(color.rgb.r, color.rgb.g, color.rgb.b)}</div>
        </div>
        <div className={cn(styles.attributeWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Color Group</div>
          <div className={styles.gridInputSmall}>{color.html}</div>
        </div>
        <div className={cn(styles.ownerWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Owner</div>
          <div className={styles.gridInputXSmall}>{color.owner}</div>
        </div>
        <div className={cn(styles.mintedOnWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Minted on</div>
          <div className={styles.gridInputXSmall}>{new Date(color.createdAt * 1000).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
};

export default ColorProfile;
