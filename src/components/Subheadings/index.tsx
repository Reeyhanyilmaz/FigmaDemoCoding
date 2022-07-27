import React from 'react';
import styles from './styles.module.css';

function Subheadings() {
  return (
    <div className={styles.subheadingsDiv}>
        <p className={styles.p1}>Lorem Ipsum</p>
        <p className={styles.p2}>Dolor Sit Ament</p>
        <p className={styles.p3}>Consectetur adipiscing elit</p>       
        <span className={styles.line}></span>
        <span className={styles.redLine}></span>
    </div>
  )
}

export default Subheadings;