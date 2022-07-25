import cn from 'classnames';
import styles from './ColorMix.module.css';

const ColorMix = () => {
  return (
    <div className={styles.colorMixWrapper}>
      <div className={cn(styles.circle, styles.smallCircle)}></div>
      <div className={cn(styles.circle, styles.bigCircle)}></div>
      <div className={cn(styles.circle, styles.smallCircle)}></div>
    </div>
  );
};

export default ColorMix;
