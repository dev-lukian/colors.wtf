import cn from 'classnames';
import styles from './SwatchGrid.module.css';
import Grid from "react";

import Swatch from '../Swatch/Swatch';

const SwatchGrid = (props) => {
  return (
    <div className={styles.SwatchGridWrapper}>
      {props.swatches.map(swatch => (
        <Swatch color={swatch.color}/>
      ))}
    </div>
  );
};

export default SwatchGrid;
