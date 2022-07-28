import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function ComingSoon() {
  return (
    <div className={styles.coming}>
      <em>
        <h1>Coming Soon...</h1>
      </em>

      <Link to="/" className={styles.linkto}>
        <p>Back to Home</p>
      </Link>
    </div>
  );
}

export default ComingSoon;
