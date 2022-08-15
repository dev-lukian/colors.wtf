import cn from 'classnames';
import { useEffect, useState, useContext } from 'react';
import styles from './ColorButton.module.css';

import Tooltip from '../Tooltip/Tooltip';
import { ColorMixContext } from '../../context/ColorMixContext';

import { contractRgbToClientRgb } from '../../util/colorConversion';

import isEqual from 'lodash.isequal';

const ColorButton = ({ color }) => {
  const [hover, setHover] = useState(false);
  const [activeSide, setActiveSide] = useState(null);

  const { leftContext, rightContext, leftAnimationContext, rightAnimationContext } = useContext(ColorMixContext);
  const [left, setLeft] = leftContext;
  const [right, setRight] = rightContext;
  const [leftAnimationInProgress, setLeftAnimationInProgress] = leftAnimationContext;
  const [rightAnimationInProgress, setRightAnimationInProgress] = rightAnimationContext;

  // Convert from contract color to client ... maybe changes this
  const colorFormatted = {
    name: color.name,
    rgb: contractRgbToClientRgb(color.rgb),
    owner: color.owner.id,
  };


  const cssRGB = 'rgba(' + colorFormatted.rgb.r + ', ' + colorFormatted.rgb.g + ', ' + colorFormatted.rgb.b + ', 1)';
  const rgb8Percent = 'rgba(' + colorFormatted.rgb.r + ', ' + colorFormatted.rgb.g + ', ' + colorFormatted.rgb.b + ', 0.08)';
  const rgb32Percent = 'rgba(' + colorFormatted.rgb.r + ', ' + colorFormatted.rgb.g + ', ' + colorFormatted.rgb.b + ', 0.32)';
  const shadow = '0px 0px 10px ' + rgb8Percent + ', 0px 1px 15px ' + rgb32Percent;

  const handleClick = () => {
    if (isEqual(colorFormatted, left) || isEqual(colorFormatted, right)) return;

    if (right == null && left == null) {
      setLeft(colorFormatted);
      setLeftAnimationInProgress(true);
      setTimeout(() => setLeftAnimationInProgress(false), 800);
    } else if (right == null) {
      setRight(colorFormatted);
      setRightAnimationInProgress(true);
      setTimeout(() => setRightAnimationInProgress(false), 800);
    } else if (left == null) {
      setLeft(colorFormatted);
      setLeftAnimationInProgress(true);
      setTimeout(() => setLeftAnimationInProgress(false), 800);
    }
  };

  useEffect(() => {
    if (isEqual(colorFormatted, left)) setActiveSide('L');
    else if (isEqual(colorFormatted, right)) setActiveSide('R');
    else setActiveSide(null);
  }, [left, right]);

  return (
    <div className={styles.circleWrapper}>
      {hover && <Tooltip name={colorFormatted.name} rgb={colorFormatted.rgb} owner={colorFormatted.owner} />}
      <div
        className={cn(styles.circle, activeSide && styles.clickedCircle)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
        style={{ backgroundColor: cssRGB, boxShadow: hover ? shadow : "none" }}
      >
        {activeSide && <div className={styles.clickedIndicator}>{activeSide}</div>}
      </div>
    </div>
  );
};

export default ColorButton;
