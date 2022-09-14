import cn from 'classnames';
import { useEffect, useState, useContext } from 'react';

import { ModalContext } from '../../context/ModalContext';

import { contractRgbToClientRgb } from '../../util/colorConversion';

import styles from './ColorButtonModal.module.css';

import Tooltip from '../Tooltip/Tooltip';



const ColorButtonModal = ({ color }) => {

  const [modalColor, setModalColor] = useContext(ModalContext);
  const [hover, setHover] = useState(false);
  
  // Convert from contract color to client ... maybe changes this
  const colorFormatted = {
    name: color.name,
    rgb: contractRgbToClientRgb(color.rgb),
    owner: color.owner.id,
    html: color.html,
    createdAt: color.createdAt,
    parent1Id: color.parent1Id,
    parent2Id: color.parent2Id
  };

  const cssRGB = 'rgba(' + colorFormatted.rgb.r + ', ' + colorFormatted.rgb.g + ', ' + colorFormatted.rgb.b + ', 1)';
  const rgb8Percent = 'rgba(' + colorFormatted.rgb.r + ', ' + colorFormatted.rgb.g + ', ' + colorFormatted.rgb.b + ', 0.08)';
  const rgb32Percent = 'rgba(' + colorFormatted.rgb.r + ', ' + colorFormatted.rgb.g + ', ' + colorFormatted.rgb.b + ', 0.32)';
  const shadow = '0px 0px 10px ' + rgb8Percent + ', 0px 1px 15px ' + rgb32Percent;

  const handleClick = () => {
    setModalColor(colorFormatted);
  };

  return (
    <div className={styles.circleWrapper}>
      {hover && <Tooltip name={colorFormatted.name} rgb={colorFormatted.rgb} owner={colorFormatted.owner} />}
      <div
        className={cn(styles.circle)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
        style={{ backgroundColor: cssRGB, boxShadow: hover && shadow }}
      >
      </div>
    </div>
  );
};

export default ColorButtonModal;
