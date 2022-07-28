import React from "react";
import styles from "./styles.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselComp() {
  return (
    <div className={styles.carouselDiv}>
      {/* <img src="./assets/carousel/carousel.png" alt="carousel" className={styles.carouselImage}/>       */}
      <Carousel
        showStatus={false} //yukarda sayfa ismi verir onu kapatır
        showThumbs={false} //altta gelen küçük slaytları gizledim
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
      >
        <div>
          <img src="./assets/carousel/carousel.png" alt="carousel"/>
        </div>
        <div>
          <img src="./assets/carousel/carousel.png" alt="carousel"/>
        </div>
        <div>
          <img src="./assets/carousel/carousel.png" alt="carousel"/>
        </div>
        <div>
          <img src="./assets/carousel/carousel.png" alt="carousel"/>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
