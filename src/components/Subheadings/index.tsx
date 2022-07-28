import React, {useState} from 'react';
import styles from './styles.module.css';
import { Link , NavLink} from "react-router-dom";

function Subheadings() {
  // const [borderBottom , setBorderBottom] = useState(false);

  // const handleClick = () => {
  //   setBorderBottom(!borderBottom);
  //   borderBottom ? styles.borderBottom  : styles.noneBottom 
  // }

  return (
    <div className={styles.subheadingsDiv}>
      <Link to="/coming-soon" className={styles.linkto}>
        <p className={styles.p1}>Lorem Ipsum</p>
      </Link>
      <Link to="/coming-soon" className={styles.linkto}>
        <p className={styles.p2}>Dolor Sit Ament</p>
      </Link>
      <Link to="/coming-soon" className={styles.linkto}>
        <p className={styles.p3}>Consectetur adipiscing elit</p>    
       </Link>   
    </div>
  )
}

export default Subheadings;