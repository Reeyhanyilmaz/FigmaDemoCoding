import React from "react";
import styles from "./styles.module.css";

function Video() {
  return (
    <div>
        <iframe
            title="video"
            className={styles.video}
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
    </div>
  );
}

export default Video;
