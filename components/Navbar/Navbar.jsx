import Link from 'next/link';
import cn from 'classnames';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <Link href="/">
        <div style={{ fontWeight: 'bold', fontSize: 'var(--font-size-30)', cursor: 'pointer' }}>colors.wtf</div>
      </Link>
      <div className={styles.buttonWrapper}>
        <button className={cn('button')}>explore</button>
        <Link href="/about">
          <button href="about" className={cn('button')}>
            about
          </button>
        </Link>
        <button className={cn('button', 'solidButton')}>connect</button>
      </div>
    </div>
  );
};

export default Navbar;
