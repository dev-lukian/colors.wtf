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
        <h1>about</h1>
        <div className={styles.contentWrapper}>
          <p className={styles.centerAlign}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum elit, posuere ut augue ut, gravida
            tincidunt neque. Quisque vestibulum dolor nec ligula maximus maximus. Maecenas porta semper lacus vitae
            faucibus. In hac habitasse platea dictumst. Etiam neque ante, ornare at commodo quis, placerat sed metus.
            Morbi laoreet urna a odio hendrerit, vel sollicitudin mi blandit.
          </p>
          <h2>the original</h2>
          <div className={styles.colorGridWrapper}>
            <div className={styles.colorCard} style={{ backgroundColor: 'white' }} />
            <div className={styles.colorCard} style={{ backgroundColor: 'red' }} />
            <div className={styles.colorCard} style={{ backgroundColor: 'green' }} />
            <div className={styles.colorCard} style={{ backgroundColor: 'blue' }} />
            <div className={styles.colorCard} style={{ backgroundColor: 'black' }} />
          </div>
          <p className={styles.centerAlign}>
            Nunc dignissim vel urna quis eleifend. Cras ut arcu ut arcu lacinia tempus. Aliquam semper massa felis, eu
            tincidunt risus elementum ut. Nam nec tortor augue.
          </p>
          <div className={styles.profileCardWrapper}>
            <ProfileCard 
              name="Cameron" 
              role="Developer" 
              rgb={
                {
                  r: 255, 
                  g: 0, 
                  b: 0,
                }
              } 
              socials={
                {
                  instagram: "https://instagram.com/cameron.morrongiello", 
                  twitter: "https://instagram.com/cameron.morrongiello", 
                  linkedin: "https://instagram.com/cameron.morrongiello",
                }
              }
            />

            <ProfileCard 
              name="Lukian" 
              role="Developer" 
              rgb={
                {
                  r: 0, 
                  g: 255, 
                  b: 0,
                }
              } 
              socials={
                {
                  instagram: "https://instagram.com/cameron.morrongiello", 
                  twitter: "https://instagram.com/cameron.morrongiello", 
                  linkedin: "https://instagram.com/cameron.morrongiello",
                }
              }
            />

            <ProfileCard 
              name="Vlad" 
              role="Developer" 
              rgb={
                {
                  r: 0, 
                  g: 0, 
                  b: 255,
                }
              } 
              socials={
                {
                  instagram: "https://instagram.com/cameron.morrongiello", 
                  twitter: "https://instagram.com/cameron.morrongiello", 
                  linkedin: "https://instagram.com/cameron.morrongiello",
                }
              }
            />
            
          </div>
        </div>
      </div>
    </>
  );
}
