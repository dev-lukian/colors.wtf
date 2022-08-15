import Link from 'next/link';
import cn from 'classnames';

import styles from './Navbar.module.css';
import { useContext, useEffect } from 'react';
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import Logo from '../../public/logo.svg'

import { providerConfig } from '../../config/providerConfig';

import { AccountContext } from '../../context/AccountConext';
import { LibraryContext } from '../../context/LibraryContext';

let web3Modal;

const Navbar = () => {

  // FIXME: Profile image ?
  let profileImg;

  const [account, setAccount] = useContext(AccountContext);
  const [library, setLibrary] = useContext(LibraryContext);

  useEffect(() => {
    web3Modal = new Web3Modal({
      theme: "dark",
      cacheProvider: true, 
      providerOptions: providerConfig 
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
          profileImg =  await library.getAvatar();
          console.log(profileImg.url)
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

  }


  return (
    <div className={styles.navbarWrapper}>
      <Link href="/">
        <Logo style={{cursor: "pointer"}}/>
      </Link>
      <div className={styles.buttonWrapper}>
      <Link href="/">
          <button className={cn('button')}>
            mint
          </button>
        </Link>
        <Link href="explore">
          <button className={cn('button')}>
            explore
          </button>
        </Link>
        <Link href="about">
          <button href="about" className={cn('button')}>
            about
          </button>
        </Link>
        <button 
          className={cn('button', 'solidButton')}
          onClick={onConnect}
        >
          {
            account ? ( 
              <div>
                <image src={profileImg?.url}/>
                 {account.substring(0, 4) + '-' + account.substring(40)} 
              </div>
              ) : (
                "connect"
              )
          }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
