import cn from 'classnames';
import styles from './ColorGrid.module.css';

import ColorButton from '../ColorButton/ColorButton';

const ColorGrid = ({colors}) => {
  return (
    <div className={styles.colorGridWrapper}>
      
      {
        colors.length > 0 ? (
          colors.map((color, index) => {
            return <ColorButton key={index} name={color.name} rgb={color.rgb} owner={color.owner} />;
          })
        ) : (
          <p>No colors found.</p>
        )
      }
    </div>
  );
};

export default ColorGrid;
