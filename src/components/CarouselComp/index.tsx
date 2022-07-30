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
        //indicators
        renderIndicator={(clickHandler, isSelected) => {
          return (
              <span
                className={styles.indicator}
                onClick={clickHandler}
                style={{ border: `2px solid ${isSelected ? "white" : "rgba(225,225,225,0.5)"}`}}/>
          );
        }}
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

      {/* pagination line */}
      <div className={styles.paginationLine}></div>
    </div>
  );
}

export default CarouselComp;
