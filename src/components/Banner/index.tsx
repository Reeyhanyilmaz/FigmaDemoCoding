import React from 'react';
import styles from './styles.module.css';

function Banner() {
  return (
    <div className={styles.bannerDiv}>
        <img src="./assets/asd.png" alt="banner" className={styles.bannerImage} />      
    </div>
  )
}

export default Banner;