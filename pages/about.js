import Head from 'next/head';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="about colors.wtf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>about</h1>
      <div style={{ textAlign: 'center', width: '50%', margin: '0 auto' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum elit, posuere ut augue ut, gravida
          tincidunt neque. Quisque vestibulum dolor nec ligula maximus maximus. Maecenas porta semper lacus vitae
          faucibus. In hac habitasse platea dictumst. Etiam neque ante, ornare at commodo quis, placerat sed metus.
          Morbi laoreet urna a odio hendrerit, vel sollicitudin mi blandit.{' '}
        </p>
        <h2>the original</h2>
        <div style={{ display: 'flex' }}>
          <div style={{ borderRadius: '50%', backgroundColor: 'white', width: '5rem', height: '5rem' }} />
          <div style={{ borderRadius: '50%', backgroundColor: 'red', width: '5rem', height: '5rem' }} />
          <div style={{ borderRadius: '50%', backgroundColor: 'green', width: '5rem', height: '5rem' }} />
          <div style={{ borderRadius: '50%', backgroundColor: 'blue', width: '5rem', height: '5rem' }} />
          <div style={{ borderRadius: '50%', backgroundColor: 'black', width: '5rem', height: '5rem' }} />
        </div>
        <p>
          Nunc dignissim vel urna quis eleifend. Cras ut arcu ut arcu lacinia tempus. Aliquam semper massa felis, eu
          tincidunt risus elementum ut. Nam nec tortor augue.
        </p>
        <div style={{ display: 'flex' }}>
          <div>
            <div style={{ borderRadius: '50%', backgroundColor: 'red', width: '7rem', height: '7rem' }} />
            <p>Cameron</p>
            <p>(0, 0, 0)</p>
            <p>On Chain Engineer</p>
            <div style={{ display: 'flex' }}>
              <a href="https://instagram.com">
                <Image height="20px" width="20px" src="/../public/instagram-icon.png" />
              </a>
              <a href="https://instagram.com">
                <Image height="20px" width="20px" src="/../public/twitter-icon.png" />
              </a>
              <a href="https://instagram.com">
                <Image height="20px" width="20px" src="/../public/linkedin-icon.png" />
              </a>
            </div>
          </div>
          <div>
            <div style={{ borderRadius: '50%', backgroundColor: 'green', width: '7rem', height: '7rem' }} />
            <p>Lukian</p>
            <p>(0, 0, 0)</p>
            <p>App Engineer</p>
            <div style={{ display: 'flex' }}>
              <a href="https://instagram.com">
                <Image height="20px" width="20px" src="/../public/instagram-icon.png" />
              </a>
              <a href="https://instagram.com">
                <Image height="20px" width="20px" src="/../public/twitter-icon.png" />
              </a>
              <a href="https://instagram.com">
                <Image height="20px" width="20px" src="/../public/linkedin-icon.png" />
              </a>
            </div>
          </div>
          <div>
            <div style={{ borderRadius: '50%', backgroundColor: 'blue', width: '7rem', height: '7rem' }} />
            <p>Vlad</p>
            <p>(0, 0, 0)</p>
            <p>Backend Engineer</p>
            <div style={{ display: 'flex' }}>
              <a href="https://instagram.com">
                <Image height="20px" width="20px" src="/../public/instagram-icon.png" />
              </a>
              <a href="https://instagram.com">
                <Image height="20px" width="20px" src="/../public/twitter-icon.png" />
              </a>
              <a href="https://instagram.com">
                <Image height="20px" width="20px" src="/../public/linkedin-icon.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
