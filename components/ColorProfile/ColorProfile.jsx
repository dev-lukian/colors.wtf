import { useContext, useEffect, useState } from 'react';

import cn from 'classnames';
import styles from './ColorProfile.module.css';

import { getCssRgb, getTextRgb, rgbToHex, contractRgbToClientRgb } from '../../util/colorConversion';

import { ModalContext } from '../../context/ModalContext';

import querySubgraph from '../../services/colorsService';
import { parentsQuery } from '../../queries/colorQuery';

const ColorProfile = ({ color }) => {
  const [modalColor, setModalColor] = useContext(ModalContext);
  const [animationStep, setAnimationStep] = useState(0);
  const [parent1, setParent1] = useState();
  const [parent2, setParent2] = useState();

  useEffect(() => {
    setAnimationStep(1);
    setTimeout(() => {
      setAnimationStep(2);
    }, 900);
  }, [color]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      querySubgraph(parentsQuery(color.parent1Id, color.parent2Id)).then((data) => {
        console.log(data)
        if(data.data.parent1.length == 1) {
          const parent1Raw = data.data.parent1[0];
          setParent1({
            name: parent1Raw.name,
            rgb: contractRgbToClientRgb(parent1Raw.rgb),
            owner: parent1Raw.owner.id,
            html: parent1Raw.html,
            createdAt: parent1Raw.createdAt,
            parent1Id: parent1Raw.parent1Id,
            parent2Id: parent1Raw.parent2Id
          });
        } else {
          setParent1(null);
        }
        if(data.data.parent2.length == 1) {
          const parent2Raw = data.data.parent2[0];
          setParent2({
            name: parent2Raw.name,
            rgb: contractRgbToClientRgb(parent2Raw.rgb),
            owner: parent2Raw.owner.id,
            html: parent2Raw.html,
            createdAt: parent2Raw.createdAt,
            parent1Id: parent2Raw.parent1Id,
            parent2Id: parent2Raw.parent2Id
          });
        } else {
          setParent2(null);
        }
      });
    }
    return () => (mounted = false);
  },[color]);

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.circlesWrapper}>
        <div
          className={cn(styles.circle, styles.smallCircle, animationStep >= 1 && styles.leftCircleMove)}
          style={{ backgroundColor: parent1 && getCssRgb(parent1.rgb), pointerEvents: !parent1 && "none"}}
          onClick={() => setModalColor(parent1)}
        />
        <div
          className={cn(styles.circle, styles.preview)}
          style={{ backgroundColor: animationStep == 2 ? getCssRgb(color.rgb) : styles.circle.backgroundColor }}
        > 
          <div className={styles.previewText}>
            {getTextRgb(color.rgb)}
          </div>
        </div>
        <div
          className={cn(styles.circle, styles.smallCircle, animationStep >= 1 && styles.rightCircleMove)}
          style={{ backgroundColor: parent2 && getCssRgb(parent2.rgb), pointerEvents: !parent2 && "none"}}
          onClick={() => setModalColor(parent2)}
        />
      </div>
      <div className={styles.grid}>
        <div className={cn(styles.nameWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Name</div>
          <div className={styles.gridInputLarge}>{color.name}</div>
        </div>
        <div className={cn(styles.rgbWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>RGB</div>
          <div className={styles.gridInputSmall}>{getTextRgb(color.rgb)}</div>
        </div>
        <div className={cn(styles.hexWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Hex</div>
          <div className={styles.gridInputSmall}>{rgbToHex(color.rgb.r, color.rgb.g, color.rgb.b)}</div>
        </div>
        <div className={cn(styles.attributeWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Color Group</div>
          <div className={styles.gridInputSmall}>{color.html}</div>
        </div>
        <div className={cn(styles.ownerWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Owner</div>
          <div className={styles.gridInputXSmall}>{color.owner}</div>
        </div>
        <div className={cn(styles.mintedOnWrapper, styles.gridChild)}>
          <div className={styles.gridLabel}>Minted on</div>
          <div className={styles.gridInputXSmall}>{new Date(color.createdAt * 1000).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
};

export default ColorProfile;
