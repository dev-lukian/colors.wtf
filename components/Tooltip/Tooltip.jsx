import styles from './Tooltip.module.css';

const Tooltip = () => {
  return (
    <div className={styles.tooltipWrapper}>
      <div>Dolly</div>
      <div>#000000</div>
      <div>rgb(0,0,0)</div>
      <div>0x000000</div>
    </div>
  );
};

export default Tooltip;
