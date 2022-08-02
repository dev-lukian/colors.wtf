import { useContext, useState } from 'react';
import cn from 'classnames';
import { ethers } from 'ethers';

import styles from './MintButton.module.css';

import { LibraryContext } from '../../context/LibraryContext';

import { getCssRgb, getTextRgb, rgbToHex } from '../../util/colorConversion';

const abi = require('../../abi/colorsWtfABI.json');

const MintButton = ({right, left, mixed}) => {

  const [library, setLibrary] = useContext(LibraryContext);
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false)
  
  const onMint = async  () => {

    if (library) {
      const signer = library.getSigner();
      const contract = new ethers.Contract("0xCD8cB95E5bE5ef3107188bc76dA0f41DA2938967", JSON.stringify(abi), signer);

      try {

      const tx = await contract.blend(right.rgb.r, right.rgb.g, right.rgb.b, left.rgb.r, left.rgb.g, left.rgb.b, name, {value: ethers.utils.parseEther("0.002")})
      const rec = await tx.wait();
      console.log(rec);
      } catch(error) {
        console.log(error);
      }
    } else {
      console.log("Connect wallet");
    }

    
  }

  const handleNameChange = (event) => {

    const nameValue = event.target.value;
    // TODO: change max length reqirement
    (!(nameValue.length > 0 && nameValue.length < 100)) ? setIsValid(false) : setIsValid(true);
    setName(nameValue);

  }

  return (
    <div className={styles.grid}>
      <div className={cn(styles.nameWrapper, styles.gridChild)}>
        <div className={styles.gridLabel}>Name</div>
        <div className={styles.gridInputLarge}>{
          mixed ?  ( 
            <input 
              className={cn("searchInput")}
              type="text"
              required
              id="name"
              role="name"
              placeholder={`Name rgb${getTextRgb(mixed)}`}
              onChange={handleNameChange}
              style={{color: isValid || name.length == 0 ? "var(--white)" : "var(--warning)"}}
            /> 
          ) : (
            '-'
          )
        }
        </div>
      </div>
      <div className={cn(styles.rgbWrapper, styles.gridChild)}>
        <div className={styles.gridLabel}>RGB</div>
        <div className={styles.gridInputSmall}>{mixed ? getTextRgb(mixed) : '-'}</div>
      </div>
      <div className={cn(styles.hexWrapper, styles.gridChild)}>
        <div className={styles.gridLabel}>Hex</div>
        <div className={styles.gridInputSmall}>{mixed ? rgbToHex(mixed.r, mixed.g, mixed.b) : '-'}</div>
      </div>
      <div
        className={cn(styles.buttonWrapper, styles.gridChild)}
        style={{ backgroundColor: mixed && getCssRgb(mixed) }}
        onClick={onMint}
      >
        <div className={styles.gridInputLarge}>mint</div>
      </div>
    </div>
  );
};

export default MintButton;
