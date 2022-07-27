import cn from 'classnames';
import { useEffect, useState, useContext } from 'react';
import styles from './ColorButton.module.css';

import Tooltip from '../Tooltip/Tooltip';
import { ColorMixContext } from '../../context/ColorMixContext';

const ColorButton = ({ name, rgb, owner }) => {
  const [hover, setHover] = useState(false);

  const {rightContext, leftContext} = useContext(ColorMixContext); 
  const [right, setRight] = rightContext;
  const [left, setLeft] = leftContext;

  const cssRGB = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)';
  const rgb8Percent = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 0.08)';
  const rgb32Percent = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 0.32)';
  const shadow = '0px 0px 4px ' + rgb8Percent + ', 0px 1px 5px ' + rgb32Percent;

  const handleClick = () => {

    const color = {
      name: name,
      rgb: rgb,
      owner: owner,
    }

    if (right == null && left == null) {
      setLeft(color);
    } else if (right == null) {
      setRight(color);
    } else if (left == null) {
      setLeft(color);
    }

  }

  return (
    <div className={styles.circleWrapper}>
      {hover && <Tooltip name={name} rgb={rgb} owner={owner}/>}
      <div
        className={styles.circle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
        style={{ backgroundColor: cssRGB, boxShadow: hover && shadow }}
      >
      </div>
    </div>
  );
};

export default ColorButton;
