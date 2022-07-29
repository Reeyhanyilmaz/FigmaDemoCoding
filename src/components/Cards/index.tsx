import React from "react";
import styles from "./styles.module.css";
import { Link} from "react-router-dom";
import { ICards } from "../../types";

function Cards({ cardsContents }: { cardsContents: ICards[] }) {
  return (
    <div className={styles.cardsDiv}>
      {cardsContents.map((items, i) => (
        <Link to="/coming-soon" className={styles.linkto} key={i}>
          <div className={styles.card}>
            <img className={styles.image} src={items.img} alt="cardimage" />

            <div className={styles.writeDiv}>
              <div className={styles.title}>{items.title}</div>
              <div className={styles.name}>{items.name}</div>
              <div className={styles.parag}>{items.parag}</div>
              <div className={styles.footer}>
                <img
                  src={items.img2}
                  alt="calender"
                  className={styles.calender}
                />
                <div className={styles.date}>{items.date}</div>
                <img src={items.img3} alt="arrow" className={styles.arrow} />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
