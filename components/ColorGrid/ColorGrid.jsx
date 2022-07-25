import cn from 'classnames';
import styles from './ColorGrid.module.css';

import ColorButton from '../ColorButton/ColorButton';

const randomColors = () => {
  let colorArray = [];

  for (let i = 0; i < 30; i++) {
    let color = {
      rgb: {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255),
      },
    };

    colorArray.push(color);
  }

  return colorArray;
};

const ColorGrid = () => {
  return (
    <div className={styles.colorGridWrapper}>
      {randomColors().map((color, index) => {
        return <ColorButton key={index} rgb={color.rgb} />;
      })}
    </div>
  );
};

export default ColorGrid;
