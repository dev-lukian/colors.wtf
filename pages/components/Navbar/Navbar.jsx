import cn from 'classnames';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div></div>
      <div className={styles.buttonWrapper}>
        <button className={cn('button')}>explore</button>
        <button className={cn('button')}>about</button>
        <button className={cn('button', 'solidButton')}>connect</button>
      </div>
    </div>
  );
};

export default Navbar;
