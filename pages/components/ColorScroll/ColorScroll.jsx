import ColorGrid from '../ColorGrid/ColorGrid';
import styles from './ColorScroll.module.css';

const ColorScroll = () => {
  return (
    <div className={styles.scrollWrapper}>
      <ColorGrid />
    </div>
  );
};

export default ColorScroll;
