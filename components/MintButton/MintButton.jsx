import { useContext, useState } from 'react';
import cn from 'classnames';
import { ethers } from 'ethers';

import styles from './MintButton.module.css';

import { LibraryContext } from '../../context/LibraryContext';

import { getCssRgb, getTextRgb, rgbToHex } from '../../util/colorConversion';

const abi = require('../../abi/colorsWtfABI.json');

const MintButton = ({ right, left, mixed }) => {
  const [library, setLibrary] = useContext(LibraryContext);
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);

  const onMint = async () => {
    if (library && isValid) {
      const signer = library.getSigner();
      const contract = new ethers.Contract('0x3A0106d2dc417b7872659A59FB4f38c048706dbd', JSON.stringify(abi), signer);
      try {
        const tx = await contract.blend(
          right.rgb.r,
          right.rgb.g,
          right.rgb.b,
          left.rgb.r,
          left.rgb.g,
          left.rgb.b,
          name,
          { value: ethers.utils.parseEther('0.002') }
        );
        const rec = await tx.wait();
        console.log(rec);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Connect wallet');
    }
  };

  const handleNameChange = (event) => {
    const nameValue = event.target.value;
    // TODO: change max length reqirement
    !(nameValue.length > 0 && nameValue.length < 100) ? setIsValid(false) : setIsValid(true);
    setName(nameValue);
  };

  return (
    <div className={styles.grid}>
      <div className={cn(styles.nameWrapper, styles.gridChild)}>
        <div className={styles.gridLabel}>Name</div>
        <div>
          {mixed ? (
            <input
              className={cn('searchInput', styles.noOutline)}
              autoFocus
              autoComplete="off"
              type="text"
              required
              id="name"
              role="name"
              //placeholder={`Name rgb${getTextRgb(mixed)}`}
              onChange={handleNameChange}
              style={{ color: isValid || name.length == 0 ? 'var(--white)' : 'var(--warning)' }}
            />
          ) : (
            <span className={styles.gridInputLarge}>-</span>
          )}
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
        style={{
          backgroundColor: name.length > 0 && mixed && library && getCssRgb(mixed),
          cursor: name.length > 0 && mixed && library ? 'pointer' : 'not-allowed',
        }}
        onClick={onMint}
      >
        <div
          className={styles.gridInputLarge}
          style={{ color: name.length > 0 && mixed && library ? 'var(--white)' : 'var(--gray-3)' }}
        >
          mint
        </div>
      </div>
    </div>
  );
};

export default MintButton;
