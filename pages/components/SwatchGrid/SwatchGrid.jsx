import cn from 'classnames';
import styles from './SwatchGrid.module.css';

import Swatch from '../Swatch/Swatch';

const SwatchGrid = (props) => {
  return (
    <div className={styles.swatchGridWrapper}>
      {props.swatches.map(swatch => (
        <Swatch 
          color={swatch.color} 
          name={swatch.name} 
          rgb={swatch.rgb} 
          hex={swatch.hex} 
          owner={swatch.owner}
        />
      ))}
    </div>
  );
};

export default SwatchGrid;
