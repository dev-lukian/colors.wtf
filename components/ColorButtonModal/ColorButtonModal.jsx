import cn from 'classnames';
import { useEffect, useState, useContext } from 'react';

import { ModalContext } from '../../context/ModalContext';

import { contractRgbToClientRgb } from '../../util/colorConversion';

import styles from './ColorButtonModal.module.css';

import Tooltip from '../Tooltip/Tooltip';



const ColorButtonModal = ({ name, rgb, owner }) => {

  const [modalColor, setModalColor] = useContext(ModalContext);
  const [hover, setHover] = useState(false);
  
  // Convert from contract color to client ... maybe changes this
  const color = {
    name: name,
    rgb: contractRgbToClientRgb(rgb),
    owner: owner.id,
  };

  const cssRGB = 'rgba(' + color.rgb.r + ', ' + color.rgb.g + ', ' + color.rgb.b + ', 1)';
  const rgb8Percent = 'rgba(' + color.rgb.r + ', ' + color.rgb.g + ', ' + color.rgb.b + ', 0.08)';
  const rgb32Percent = 'rgba(' + color.rgb.r + ', ' + color.rgb.g + ', ' + color.rgb.b + ', 0.32)';
  const shadow = '0px 0px 10px ' + rgb8Percent + ', 0px 1px 15px ' + rgb32Percent;

  const handleClick = () => {
    setModalColor(color);
  };

  return (
    <div className={styles.circleWrapper}>
      {hover && <Tooltip name={color.name} rgb={color.rgb} owner={color.owner} />}
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
