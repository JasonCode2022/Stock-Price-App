import React from 'react';
import styles from './Header.module.css';
import moneyGrowthImage from '../../icons/money-growth01.png';

const Header = () => {
  return (

    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={moneyGrowthImage} alt="Money Growth" />
          <span>Stock</span>
        </div>

        <div className={styles.userCntainer}>
          <div className={styles.user}>J</div>
          <span>Jason</span>
        </div>
      </div>
    </header>
  )
}

export default Header;