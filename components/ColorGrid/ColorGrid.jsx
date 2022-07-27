import styles from './ColorGrid.module.css';

import ColorButton from '../ColorButton/ColorButton';

const ColorGrid = ({colors}) => {
  return (
    <div className={styles.colorGridWrapper}>
      {
        colors.map((color, index) => {
          return <ColorButton key={index} name={color.name} rgb={color.rgb} owner={color.owner} />;
        })
      }
    </div>
  );
};

export default ColorGrid;
