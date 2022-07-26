import styles from './ColorMixLabel.module.css';

const ColorMixLabel = ({remove, name, rgb, owner}) => {

  let ownerDisplay;

  if(owner.match("^0x[a-zA-Z0-9]{40}$")) {
    ownerDisplay =  owner.substring(0, 9) + "-" +  owner.substring(36);
  } else {
    if(owner.length > 15) {
      ownerDisplay = owner.substring(0, 13) + "...";
    } else {
      ownerDisplay = owner;
    }
  }

  let nameDisplay;

  if(name.length > 20) {
    nameDisplay = name.substring(0, 15) + "...";
  } else {
    nameDisplay = name;
  }

  const hexDisplay = "#" + rgb.r.toString(16).toUpperCase().padStart(2, "0") + rgb.g.toString(16).toUpperCase().padStart(2, "0") + rgb.b.toString(16).toUpperCase().padStart(2, "0");
  const rgbDisplay = "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";

  const handleRemove = () => {
    remove(null);
  }

  return (
    <div className={styles.colorMixLabelWrapper}>
      <div onClick={handleRemove} className={styles.closeButton}>x</div>
      <div>{nameDisplay}</div>
      <div>{hexDisplay}</div>
      <div>{rgbDisplay}</div>
      <div>{ownerDisplay}</div>
    </div>
  );
};

export default ColorMixLabel;