import React from "react";
import styles from "./styles.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselComp() {
  return (
    <div className={styles.carouselDiv}>
      <Carousel
        showStatus={false} //yukarı da sayfa ismi verir onu kapatır
        showThumbs={false} //altta gelen küçük slaytları gizledim
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
        
        //next, prev
        renderArrowNext={(clickHandler) => (
          <div className={styles.arrowNext} onClick={clickHandler}></div>
        )}
        renderArrowPrev={(clickHandler) => (
          <div className={styles.arrowPrev} onClick={clickHandler}></div>
        )}
      >
        <div>
          <img src="./assets/carousel/carousel.png" alt="carousel" />
        </div>
        <div>
          <img src="./assets/carousel/carousel.png" alt="carousel" />
        </div>
        <div>
          <img src="./assets/carousel/carousel.png" alt="carousel" />
        </div>
        <div>
          <img src="./assets/carousel/carousel.png" alt="carousel" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
