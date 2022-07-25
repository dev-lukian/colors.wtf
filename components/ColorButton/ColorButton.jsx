import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './ColorButton.module.css';

import Tooltip from '../Tooltip/Tooltip';

const ColorButton = ({ rgb }) => {
  const [hover, setHover] = useState(false);

  const cssRGB = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)';
  const rgb8Percent = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 0.08)';
  const rgb32Percent = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 0.32)';
  const shadow = '0px 0px 4px ' + rgb8Percent + ', 0px 1px 5px ' + rgb32Percent;

  return (
    <div className={styles.circleWrapper}>
      {hover && <Tooltip />}
      <div
        className={styles.circle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ backgroundColor: cssRGB, boxShadow: hover && shadow }}
      >
        {console.log({ cssRGB, shadow })}
      </div>
    </div>
  );
};

export default ColorButton;
