import cn from "classnames";
import Head from "next/head";
import Image from "next/image";

import ProfileCard from "../components/ProfileCard/ProfileCard";

import styles from "../styles/about.module.css";

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
            colors.wtf is a unique collection of the 16,777,216 different rgb
            colors. Every color is mixed from an existing color by each channel
            going through the following formula:{" "}
            <span className={cn("code")}>floor((a + b)/2)</span>. A unique name
            is given to each color by the creater. Every color is 0.003 Ξ to
            mint. A 0.001 Ξ royality is tranfers to each of the parent color
            owners (a total of 0.002 Ξ) and 0.001 Ξ is sent to the contract
            wallet. The colors.wtf contract address is{" "}
            <span className={cn("code")}>0x3A0106d2dc417b7872659A59FB4f38c048706dbd</span>{" "}
              and is viewable {" "}
            <a
              href="https://rinkeby.etherscan.io/address/0x3A0106d2dc417b7872659A59FB4f38c048706dbd"
              target="_blank"
              rel="noopener noreferrer"
            >
            here
            </a>.
          </p>
          <div className={styles.colorGridWrapper}>
            <div
              className={styles.colorCard}
              style={{ backgroundColor: "#ffffff" }}
            />
            <div
              className={styles.colorCard}
              style={{ backgroundColor: "#ff0000" }}
            />
            <div
              className={styles.colorCard}
              style={{ backgroundColor: "#00ff00" }}
            />
            <div
              className={styles.colorCard}
              style={{ backgroundColor: "#0000ff" }}
            />
            <div
              className={styles.colorCard}
              style={{ backgroundColor: "#000000" }}
            />
          </div>
          <p className={styles.centerAlign}>
            The only colors that were provided at the contracts inception were
            the 5 base colors, the rest are mixed by the community.
          </p>
          <div className={styles.profileCardWrapper}>
            <ProfileCard
              name="Cameron"
              role="Smart Contract"
              rgb={{
                r: 255,
                g: 0,
                b: 0,
              }}
              socials={{
                instagram: "https://instagram.com/cameron.morrongiello",
                twitter: "https://instagram.com/cameron.morrongiello",
                linkedin: "https://instagram.com/cameron.morrongiello",
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
                instagram: "https://instagram.com/cameron.morrongiello",
                twitter: "https://instagram.com/cameron.morrongiello",
                linkedin: "https://instagram.com/cameron.morrongiello",
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
                instagram: "https://instagram.com/cameron.morrongiello",
                twitter: "https://instagram.com/cameron.morrongiello",
                linkedin: "https://instagram.com/cameron.morrongiello",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
