import cn from 'classnames';
import styles from './Swatch.module.css';

const Swatch = (props) => {

  let ownerDisplay;

  if(props.owner.match("^0x[a-zA-Z0-9]{40}$")) {
    ownerDisplay =  props.owner.substring(0, 9) + "-" +  props.owner.substring(36);
  } else {
    if(props.owner.length > 15) {
      ownerDisplay = props.owner.substring(0, 13) + "...";
    } else {
      ownerDisplay = props.owner;
    }
  }

  return (
    <div className={styles.swatchWrapper}>
      <div className={styles.swatch} style={{backgroundColor: props.color}}/>
      <div className={styles.tooltip}>
        <p>{props.name}</p>
        <p>{props.hex}</p>
        <p>{props.rgb}</p>
        <p>{ownerDisplay}</p>
      </div>
    </div>
  );
};

export default Swatch;
