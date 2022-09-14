import styles from './Tooltip.module.css';

import TooltipBottom from '../../public/tooltip-bottom.svg';
import { getTextRgb, rgbToHex } from '../../util/colorConversion';

const Tooltip = ({ name, rgb, owner }) => {
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

  return (
    <div className={styles.tooltipWrapper}>
      <div className={styles.tooltipBody}>
        <div>{nameDisplay}</div>
        <div>{rgbDisplay}</div>
        <div>{hexDisplay}</div>
        <div>{ownerDisplay}</div>
      </div>
      <TooltipBottom className={styles.arrow} />
    </div>
  );
};

export default Tooltip;
