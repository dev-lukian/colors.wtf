import styles from './ProfileCard.module.css';

import { getCssRgb, getTextRgb } from '../../util/colorConversion';

import cn from 'classnames';

import InstagramIcon from '../../public/instagram-icon.svg';
import TwitterIcon from '../../public/twitter-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';

const ProfileCard = ({ name, role, rgb, socials }) => {
  return (
    <div className={styles.grid}>
      <div className={cn(styles.nameWrapper, styles.gridChild)}>
        <div>
          <div className={styles.gridLabel}>Name</div>
          <div className={styles.gridInputLarge}>{name}</div>
        </div>
        <div className={styles.colorCard} style={{background: getCssRgb(rgb)}}/>
      </div>
      <div className={cn(styles.rgbWrapper, styles.gridChild)}>
        <div className={styles.gridLabel}>RGB</div>
        <div className={styles.gridInputSmall}>{getTextRgb(rgb)}</div>
      </div>
      <div className={cn(styles.roleWrapper, styles.gridChild)}>
        <div className={styles.gridLabel}>Role</div>
        <div className={styles.gridInputSmall}>{role}</div>
      </div>
      <a
        target="_blank"
        href={socials.linkedin}
        rel="noopener noreferrer"
        className={cn(styles.linkedinWrapper, styles.gridChild, styles.socialWrapper)}
      >
        <LinkedinIcon />
      </a>
      <a
        target="_blank"
        href={socials.twitter}
        rel="noopener noreferrer"
        className={cn(styles.twitterWrapper, styles.gridChild, styles.socialWrapper)}
      >
        <TwitterIcon />
      </a>
      <a
        target="_blank"
        href={socials.instagram}
        rel="noopener noreferrer"
        className={cn(styles.instagramWrapper, styles.gridChild, styles.socialWrapper)}
      >
        <InstagramIcon />
      </a>
    </div>
  );
};

export default ProfileCard;
