import styles from './ColorGrid.module.css';

const ColorGrid = ({ colors, ColorButton }) => {
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
