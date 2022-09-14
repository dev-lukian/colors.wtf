import cn from 'classnames';
import styles from './ColorMixLabel.module.css';

import { getTextRgb, rgbToHex } from '../../util/colorConversion';

import Close from '../../public/close.svg';

const ColorMixLabel = ({ side, remove, name, rgb, owner }) => {
  let ownerDisplay;

  if (owner.match('^0x[a-zA-Z0-9]{40}$')) {
    ownerDisplay = owner.substring(0, 9) + '-' + owner.substring(36);
  } else {
    if (owner.length > 15) {
      ownerDisplay = owner.substring(0, 13) + '...';
    } else {
      ownerDisplay = owner;
    }
  }

  let nameDisplay;

  if (name.length > 20) {
    nameDisplay = name.substring(0, 15) + '...';
  } else {
    nameDisplay = name;
  }

  const hexDisplay = rgbToHex(rgb.r, rgb.g, rgb.b);
  const rgbDisplay = getTextRgb(rgb);

  const handleRemove = () => {
    remove(null);
  };

  return (
    <div className={cn(styles.colorMixLabelWrapper, side == 'left' ? styles.left : styles.right)}>
      <div onClick={handleRemove} className={styles.closeButton}>
        <Close className={styles.closeIcon} />
      </div>
      <div>{nameDisplay}</div>
      <div>{rgbDisplay}</div>
      <div>{hexDisplay}</div>
      <div>{ownerDisplay}</div>
    </div>
  );
};

export default ColorMixLabel;
