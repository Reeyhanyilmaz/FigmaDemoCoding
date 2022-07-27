import React from "react";
import styles from "./styles.module.css";

function Cards() {
  return (
    <div className={styles.cardsDiv}>
      {/* card 1*/}
      <div className={styles.card}>
        <img
          className={styles.image}
          src="./assets/cards-images/content1.png"
          alt="cardimage"
        />

        <div className={styles.writeDiv}>
          <div className={styles.title}>Lorem Ipsum</div>
          <div className={styles.name}>Hüsnü Taner</div>
          <div className={styles.parag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            suscipit magna dui, eget ultrices dui euismod in.
          </div>
          <div className={styles.footer}>
            <img
              src="./assets/cards-icon/calender.png"
              alt="calender"
              className={styles.calender}
            />

            <div className={styles.date}>10.09.2020 - 10.10.2020</div>

            <img
              src="./assets/cards-icon/arrow.png"
              alt="arrow"
              className={styles.arrow}
            />
          </div>
        </div>
      </div>

      {/* card 2*/}
      <div className={styles.card}>
        <img
          className={styles.image}
          src="./assets/cards-images/content2.png"
          alt="cardimage"
        />

        <div className={styles.writeDiv}>
          <div className={styles.title}>Nulla semper metus</div>
          <div className={styles.name}>Mustafa Serkan Tiryaki</div>
          <div className={styles.parag}>
            Nulla semper metus aliquam, condimentum odio vitae, sodales mauris.
            Donec congue leo eu libero ultricies tempor. Duis commodo lacus eget
            felis volutpat molestie. Sed at pharetra mauris. Ut eu lorem
            placerat, tempus velit in, feugiat libero.
          </div>
          <div className={styles.footer}>
            <img
              src="./assets/cards-icon/calender.png"
              alt="calender"
              className={styles.calender}
            />

            <div className={styles.date}>10.09.2020 - 10.10.2020</div>

            <img
              src="./assets/cards-icon/arrow.png"
              alt="arrow"
              className={styles.arrow}
            />
          </div>
        </div>
      </div>

      {/* card 3*/}
      <div className={styles.card}>
        <img
          className={styles.image}
          src="./assets/cards-images/content3.png"
          alt="cardimage"
        />

        <div className={styles.writeDiv}>
          <div className={styles.title}>
            Suspendisse tempus dignissim lacus ac tincidunt
          </div>
          <div className={styles.name}>Kerim Değirmenci</div>
          <div className={styles.parag}>
            Nam semper sapien et erat molestie, a porttitor sem volutpat.
            Suspendisse tempus dignissim lacus ac tincidunt. Donec elementum
            pharetra orci, nec laoreet felis facilisis nec. Mauris ornare
            fermentum urna. Nunc non elit metus. Praesent sodales in nisi eget
            volutpat.
          </div>
          <div className={styles.footer}>
            <img
              src="./assets/cards-icon/calender.png"
              alt="calender"
              className={styles.calender}
            />

            <div className={styles.date}>10.09.2020 - 10.10.2020</div>

            <img
              src="./assets/cards-icon/arrow.png"
              alt="arrow"
              className={styles.arrow}
            />
          </div>
        </div>
      </div>

      {/* card 4*/}
      <div className={styles.card}>
        <img
          className={styles.image}
          src="./assets/cards-images/content1.png"
          alt="cardimage"
        />

        <div className={styles.writeDiv}>
          <div className={styles.title}>Integer dignissim</div>
          <div className={styles.name}>Ebu Bekir Behram </div>
          <div className={styles.parag}>
            Integer nec vulputate libero. Donec at sollicitudin nibh. Nullam
            viverra egestas lorem, sed aliquet risus efficitur eu. Nunc
            tristique nisi ac massa finibus, sit amet blandit lectus suscipit.
            Mauris quis faucibus lorem. Integer dignissim condimentum orci,
            vitae pellentesque felis eleifend ac.
          </div>
          <div className={styles.footer}>
            <img
              src="./assets/cards-icon/calender.png"
              alt="calender"
              className={styles.calender}
            />

            <div className={styles.date}>10.09.2020 - 10.10.2020</div>

            <img
              src="./assets/cards-icon/arrow.png"
              alt="arrow"
              className={styles.arrow}
            />
          </div>
        </div>
      </div>

      {/* card 5*/}
      <div className={styles.card}>
        <img
          className={styles.image}
          src="./assets/cards-images/content3.png"
          alt="cardimage"
        />

        <div className={styles.writeDiv}>
          <div className={styles.title}>
            Suspendisse tempus dignissim lacus ac tincidunt
          </div>
          <div className={styles.name}>Kerim Değirmenci </div>
          <div className={styles.parag}>
            Nam semper sapien et erat molestie, a porttitor sem volutpat.
            Suspendisse tempus dignissim lacus ac tincidunt. Donec elementum
            pharetra orci, nec laoreet felis facilisis nec. Mauris ornare
            fermentum urna. Nunc non elit metus. Praesent sodales in nisi eget
            volutpat.
          </div>
          <div className={styles.footer}>
            <img
              src="./assets/cards-icon/calender.png"
              alt="calender"
              className={styles.calender}
            />

            <div className={styles.date}>10.09.2020 - 10.10.2020</div>

            <img
              src="./assets/cards-icon/arrow.png"
              alt="arrow"
              className={styles.arrow}
            />
          </div>
        </div>
      </div>

      {/* card 6*/}
      <div className={styles.card}>
        <img
          className={styles.image}
          src="./assets/cards-images/content1.png"
          alt="cardimage"
        />

        <div className={styles.writeDiv}>
          <div className={styles.title}>Integer dignissim</div>
          <div className={styles.name}>Ebu Bekir Behram </div>
          <div className={styles.parag}>
            Integer nec vulputate libero. Donec at sollicitudin nibh. Nullam
            viverra egestas lorem, sed aliquet risus efficitur eu. Nunc
            tristique nisi ac massa finibus, sit amet blandit lectus suscipit.
            Mauris quis faucibus lorem. Integer dignissim condimentum orci,
            vitae pellentesque felis eleifend ac.
          </div>
          <div className={styles.footer}>
            <img
              src="./assets/cards-icon/calender.png"
              alt="calender"
              className={styles.calender}
            />

            <div className={styles.date}>10.09.2020 - 10.10.2020</div>

            <img
              src="./assets/cards-icon/arrow.png"
              alt="arrow"
              className={styles.arrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
