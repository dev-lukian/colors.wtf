import styles from './ColorGrid.module.css';

const ColorGrid = ({ colors, ColorButton }) => {
  return (
    <div className={styles.colorGridWrapper}>
      {colors.map((color, index) => {
        return <ColorButton key={color.rgb} color={color} />;
      })}
    </div>
  );
};

export default ColorGrid;
