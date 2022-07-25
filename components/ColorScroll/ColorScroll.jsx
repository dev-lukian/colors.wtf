import ColorGrid from '../ColorGrid/ColorGrid';
import styles from './ColorScroll.module.css';

const ColorScroll = ({colors}) => {
  return (
    <div className={styles.scrollWrapper}>
      <ColorGrid colors={colors}/>
    </div>
  );
};

export default ColorScroll;
