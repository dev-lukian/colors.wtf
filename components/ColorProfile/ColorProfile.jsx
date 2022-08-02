import { useContext } from 'react';

import cn from 'classnames';
import styles from './ColorProfile.module.css';

import { getCssRgb, getTextRgb, rgbToHex } from '../../util/colorConversion';

const ColorProfile = ({color}) => {
  
  return (
    <div className={styles.profileWrapper}>
      <div
        className={cn(styles.circle, styles.bigCircle)}
        style={{ backgroundColor: getCssRgb(color.rgb) }}
      />
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
          <div className={styles.gridInputSmall}>html</div>
        </div>
        <div className={cn(styles.ownerWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Owner</div>
            <div className={styles.gridInputSmall}>{color.owner}</div>
        </div>
        <div className={cn(styles.mintedOnWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Minted on</div>
          <div className={styles.gridInputSmall}>10/23/2022</div>
        </div>
      </div>
    </div>
  );
};

export default ColorProfile;
