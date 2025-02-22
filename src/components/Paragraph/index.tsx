import React, { useState } from "react";
import styles from "./styles.module.css";

function Paragraph() {
  const [showMore, setShowMore] = useState<boolean>(false);
  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
      <p className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi
        odio, mattis in ipsum quis, egestas rhoncus sapien. Aliquam lacinia
        vitae nibh blandit semper. Pellentesque congue, dui quis dictum tempor,
        diam magna bibendum erat, in tempus dui purus sit amet lectus. <br />
        <br /> Aenean consectetur vulputate laoreet. Sed sed mauris pretium,
        convallis ex ac, rutrum purus. Quisque tempus sollicitudin mi ut
        pulvinar. Nulla congue erat enim, et consequat nisl pharetra egestas.
        Fusce nec lobortis tellus, non mattis dui. Nulla condimentum porta
        pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        <br />
        <br />
        
        <span className={showMore ? styles.showParagraph : styles.hideParagraph}>
          Aenean ornare rhoncus ullamcorper. Duis elementum malesuada ante eu
          gravida. Phasellus faucibus tincidunt molestie. Praesent feugiat
          bibendum ex, aliquet ultrices justo fringilla eget. Aliquam eget
          placerat tellus. Maecenas ac sollicitudin mauris, sit amet mollis
          dolor. Ut non semper odio, non blandit dui. Donec mollis sapien ac
          enim pretium, at interdum est vestibulum. Praesent porttitor, libero
          id commodo vestibulum, quam velit tristique magna, vitae commodo urna
          quam a sapien. Proin sed ipsum vel mauris ultrices fringilla. Fusce
          pulvinar ex massa, vitae pretium est aliquet sed. Suspendisse finibus
          nec ipsum ac ultricies. Phasellus interdum vulputate enim eget
          aliquet. <br />
          <br /> Sed a mi pretium, posuere sem et, malesuada mauris. Vivamus ac
          sapien vel lectus cursus maximus vel vitae lacus. Praesent elementum
          mauris iaculis massa fringilla, vitae consequat turpis ullamcorper.
          Integer commodo sit amet massa id porta. Ut vehicula varius dui, sit
          amet semper mi malesuada vel. Nunc euismod sapien leo, sodales viverra
          ipsum lacinia venenatis. Mauris ac nunc neque. Nulla sed eros purus.
          Nullam non convallis justo, sit amet semper lorem. Maecenas sit amet
          tellus posuere, sollicitudin quam eu, sagittis lacus. <br />
          <br /> Curabitur commodo congue consectetur. Maecenas condimentum
          ligula nunc, id varius tortor dictum vel. Vestibulum nisl nisl,
          laoreet sit amet aliquet eget, laoreet vel eros. Nulla facilisi. Sed
          sollicitudin augue vitae ligula ullamcorper, et fermentum felis
          egestas. Fusce egestas lacus ex, eu vulputate risus dapibus et. Cras
          et elementum augue. Suspendisse sit amet tristique libero.
        </span>
        <button className={styles.showBtn} onClick={handleClick}>
          {showMore ? "GİZLE" : "YAZININ DEVAMI"}
          <img
            src="./assets/button-icon/+.png"
            alt="icon"
            className={styles.buttonIcon}
          />
        </button>
      </p>
  );
}

export default Paragraph;
