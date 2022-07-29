import React from 'react';
import styles from './styles.module.css';

function Pagination() {
  return (
    <div className={styles.paginationDiv}>
        <img src="./assets/Union-left.png" alt="union-left" className={styles.unionLeft}/>
        <img src="./assets/Union-right.png" alt="union-right" className={styles.unionRight}/>
    </div> 
  )
}

export default Pagination;