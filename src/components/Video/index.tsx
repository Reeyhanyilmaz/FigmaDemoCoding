import React from "react";
import styles from "./styles.module.css";

function Video() {
  return (
    <div>
        <iframe
            title="video"
            className={styles.video}
            src="./assets/video/video.png"
        />
    </div>
  );
}

export default Video;
