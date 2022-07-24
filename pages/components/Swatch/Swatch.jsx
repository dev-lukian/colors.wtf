import cn from 'classnames';
import styles from './Swatch.module.css';

const Swatch = (props) => {
  return (
    <div className={styles.swatchWrapper}>
      <div className={styles.swatch} style={{backgroundColor: props.color}}/>
    </div>
  );
};

export default Swatch;
