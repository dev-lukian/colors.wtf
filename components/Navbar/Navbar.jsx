import Link from 'next/link';
import cn from 'classnames';

import styles from './Navbar.module.css';
import { useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

import Logo from '../../public/logo.svg';

import { providerConfig } from '../../config/providerConfig';

import { AccountContext } from '../../context/AccountConext';
import { LibraryContext } from '../../context/LibraryContext';

let web3Modal;

import WhiteLogo from '../../public/logo-solid.svg';
import ColorLogo from '../../public/logo-color.svg';

const Navbar = () => {
  // FIXME: Profile image ?
  let profileImg;

  const [account, setAccount] = useContext(AccountContext);
  const [library, setLibrary] = useContext(LibraryContext);

  useEffect(() => {
    web3Modal = new Web3Modal({
      theme: 'dark',
      cacheProvider: true,
      providerOptions: providerConfig,
    });
  }, []);

  const onConnect = async () => {
    if (!account) {
      // if not connected, connect
      try {
        const provider = await web3Modal.connect();
        const library = new ethers.providers.Web3Provider(provider);
        const accounts = await library.listAccounts();
        setLibrary(library);
        if (accounts) {
          setAccount(accounts[0]);
          profileImg = await library.getAvatar();
          console.log(profileImg.url);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // if connected, disconnect
      await web3Modal.clearCachedProvider();
      setAccount(null);
      setLibrary(null);
    }
  };

  const activeLinkCheck = (link) => {
    if (typeof window !== 'undefined') {
      if (link === window.location.pathname) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <div className={styles.navbarWrapper}>
      <Link href="/" passHref>
        <a className={styles.logoWrapper}>
          <WhiteLogo className={styles.whiteLogo} />
          <ColorLogo className={styles.colorLogo} />
        </a>
      </Link>
      <div className={styles.buttonWrapper}>
        <Link href="/">
          <a className={cn('button', activeLinkCheck('/') && styles.activeLink)}>mint</a>
        </Link>
        <Link href="/explore">
          <a className={cn('button', activeLinkCheck('/explore') && styles.activeLink)}>explore</a>
        </Link>
        <Link href="/about">
          <a className={cn('button', activeLinkCheck('/about') && styles.activeLink)}>about</a>
        </Link>
        <button className={cn('button', 'solidButton')} onClick={onConnect}>
          {account ? (
            <div>
              <image src={profileImg?.url} />
              {account.substring(0, 4) + '-' + account.substring(40)}
            </div>
          ) : (
            'connect'
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
