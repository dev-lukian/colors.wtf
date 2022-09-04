import cn from 'classnames';
import Head from 'next/head';
import Image from 'next/image';

import ProfileCard from '../components/ProfileCard/ProfileCard';

import styles from '../styles/about.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>about</title>
        <meta name="description" content="about colors.wtf" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutScroll}>
          <div className={styles.contentWrapper}>
            <div className={styles.contentBlock}>
              Colors.wtf is a unique collection of the 16,777,216 possible different colors. Every color is created by
              mixing 2 existing colors in the collection. existing color by each channel going through the following
              formula:
            </div>
            <div className={cn('code')}>floor((a + b)/2)</div>
            <div className={styles.contentBlock}>
              A unique name is given to each color by the creator. Every color is 0.003 Ξ to mint. A 0.001 Ξ royality is
              tranfers to each of the parent color owners (a total of 0.002 Ξ) and 0.001 Ξ is sent to the contract
              wallet. The colors.wtf contract address is
            </div>
            <a
              href="https://rinkeby.etherscan.io/address/0x3A0106d2dc417b7872659A59FB4f38c048706dbd"
              target="_blank"
              rel="noopener noreferrer"
              className="full-width"
            >
              <div className={cn('code')}>0x3A0106d2dc417b7872659A59FB4f38c048706dbd</div>
            </a>
            <div className={styles.contentBlock}>
              The only colors that were provided at the contracts inception were the 8 base colors, the rest are mixed
              by the community. Here are the starting 8.
            </div>
          </div>
          <div className={styles.colorGridWrapper}>
            <div className={styles.colorCard} style={{ backgroundColor: '#ffffff' }}>
              <div className={cn(styles.colorHover, styles.whiteHover)}>
                <div>White</div>
                <div>(255, 255, 255)</div>
                <div>#ffffff</div>
              </div>
            </div>
            <div className={styles.colorCard} style={{ backgroundColor: '#ff0000' }}>
              <div className={cn(styles.colorHover)}>
                <div>Red</div>
                <div>(255, 0, 0)</div>
                <div>#ff0000</div>
              </div>
            </div>
            <div className={styles.colorCard} style={{ backgroundColor: '#00ff00' }}>
              <div className={cn(styles.colorHover, styles.whiteHover)}>
                <div>Green</div>
                <div>(0, 255, 0)</div>
                <div>#00ff00</div>
              </div>
            </div>
            <div className={styles.colorCard} style={{ backgroundColor: '#0000ff' }}>
              <div className={cn(styles.colorHover)}>
                <div>Blue</div>
                <div>(0, 0, 255)</div>
                <div>#0000ff</div>
              </div>
            </div>
            <div className={styles.colorCard} style={{ backgroundColor: '#00ffff' }}>
              <div className={cn(styles.colorHover, styles.whiteHover)}>
                <div>Cyan</div>
                <div>(0, 255, 255)</div>
                <div>#00ffff</div>
              </div>
            </div>
            <div className={styles.colorCard} style={{ backgroundColor: '#ff00ff' }}>
              <div className={cn(styles.colorHover)}>
                <div>Magenta</div>
                <div>(255, 0, 255)</div>
                <div>#ff00ff</div>
              </div>
            </div>
            <div className={styles.colorCard} style={{ backgroundColor: '#ffff00' }}>
              <div className={cn(styles.colorHover, styles.whiteHover)}>
                <div>Yellow</div>
                <div>(255, 255, 0)</div>
                <div>#ffff00</div>
              </div>
            </div>
            <div className={styles.colorCard} style={{ backgroundColor: '#000000' }}>
              <div className={cn(styles.colorHover)}>
                <div>Black</div>
                <div>(0, 0, 0)</div>
                <div>#000000</div>
              </div>
            </div>
          </div>
          <div className={styles.finalWords}>Have fun mixing!</div>
          <div className={styles.creatorsWrapper}>
            <div className={styles.createdBy}>Cheers,</div>
            <div className={styles.profileCardsWrapper}>
              <ProfileCard
                name="Cameron"
                role="Smart Contract"
                rgb={{
                  r: 255,
                  g: 0,
                  b: 0,
                }}
                socials={{
                  instagram: 'https://instagram.com/cameron.morrongiello',
                  twitter: 'https://instagram.com/cameron.morrongiello',
                  linkedin: 'https://instagram.com/cameron.morrongiello',
                }}
              />

              <ProfileCard
                name="Lukian"
                role="Client"
                rgb={{
                  r: 0,
                  g: 255,
                  b: 0,
                }}
                socials={{
                  instagram: 'https://instagram.com/cameron.morrongiello',
                  twitter: 'https://instagram.com/cameron.morrongiello',
                  linkedin: 'https://instagram.com/cameron.morrongiello',
                }}
              />

              <ProfileCard
                name="Vlad"
                role="Subgraph"
                rgb={{
                  r: 0,
                  g: 0,
                  b: 255,
                }}
                socials={{
                  instagram: 'https://instagram.com/cameron.morrongiello',
                  twitter: 'https://instagram.com/cameron.morrongiello',
                  linkedin: 'https://instagram.com/cameron.morrongiello',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
