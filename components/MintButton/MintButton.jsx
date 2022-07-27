import { useContext } from 'react';

import cn from 'classnames';
import styles from './MintButton.module.css';

import { ColorMixContext } from '../../context/ColorMixContext';
import { getCssRgb, getTextRgb, rgbToHex } from '../../util/colorConversion';

const MintButton = () => {
  const { mixedContext } = useContext(ColorMixContext);
  const [mixed, setMixed] = mixedContext;

  return (
    <div className={styles.grid}>
      <div className={cn(styles.nameWrapper, styles.gridChild)}>
        <div className={styles.gridLabel}>Name</div>
        <div className={styles.gridInputLarge}>{mixed ? '...' : '-'}</div>
      </div>
      <div className={cn(styles.rgbWrapper, styles.gridChild)}>
        <div className={styles.gridLabel}>RGB</div>
        <div className={styles.gridInputSmall}>{mixed ? getTextRgb(mixed) : '-'}</div>
      </div>
      <div className={cn(styles.hexWrapper, styles.gridChild)}>
        <div className={styles.gridLabel}>Hex</div>
        <div className={styles.gridInputSmall}>{mixed ? rgbToHex(mixed.r, mixed.g, mixed.b) : '-'}</div>
      </div>
      <div
        className={cn(styles.buttonWrapper, styles.gridChild)}
        style={{ backgroundColor: mixed && getCssRgb(mixed) }}
      >
        <div className={styles.gridInputLarge}>mint</div>
      </div>
    </div>
  );
};

export default MintButton;
