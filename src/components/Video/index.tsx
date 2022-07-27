import React from "react";
import styles from "./styles.module.css";

function Video() {
  return (
    <div>
      {/* <span className={styles.videoContainer}> */}
        <iframe
            title="video"
            className={styles.videoDiv}
            src="./assets/video.png"
            // frameBorder="0"
            // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            // allowFullScreen
        />

        {/* <span className={styles.playButton}>
          <span className={styles.ellipse}>
            <span className={styles.polygon}></span>
          </span>
        </span> */}
      {/* </span> */}
    </div>
  );
}

export default Video;
