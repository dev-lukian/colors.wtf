import styles from './ProfileCard.module.css';

import { getCssRgb, getTextRgb } from '../../util/colorConversion'; 

import InstagramIcon from '../../public/instagram-icon.svg'
import TwitterIcon from '../../public/twitter-icon.svg'
import LinkedinIcon from '../../public/linkedin-icon.svg'

const ProfileCard = ({ name, role, rgb, socials}) => {

  return (
    <div className={styles.profileCardWrapper}>
      <div className={styles.bigCircleCard}style={{backgroundColor: getCssRgb(rgb)}} />
        <p>{name}</p>
        <p>{getTextRgb(rgb)}</p>
        <p>{role}</p>
        <div className={styles.socialsWrapper}>
          <a target="_blank" className={styles.socialIconWrapper} href={socials.instagram} rel="noopener noreferrer">
            <InstagramIcon/>
          </a>
          <a target="_blank" className={styles.socialIconWrapper} href={socials.twitter} rel="noopener noreferrer">
            <TwitterIcon/>
          </a>
          <a target="_blank" className={styles.socialIconWrapper} href={socials.linkedin} rel="noopener noreferrer">
            <LinkedinIcon/>
          </a>
        </div>
    </div>
    
  );
};

export default ProfileCard;
