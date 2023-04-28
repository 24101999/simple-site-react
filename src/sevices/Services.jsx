import React from "react";
import styles from "./services.module.css";
import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon (1).png";
import icon3 from "../assets/Icon (2).png";
import icon4 from "../assets/Icon (3).png";
import icon5 from "../assets/Icon (4).png";
import icon6 from "../assets/Icon (5).png";
const Services = () => {
  return (
    <article className={styles.services}>
      <div className={styles.title}>
        <h1>The majority our customers do not understand their workflows.</h1>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.g1}>
          <div className={styles.icon}>
            <img src={icon1} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className={styles.icon}>
            <img src={icon2} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className={styles.icon}>
            <img src={icon2} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        </div>
        <div className={styles.g2}>
          <div className={styles.icon}>
            <img src={icon4} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className={styles.icon}>
            <img src={icon5} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className={styles.icon}>
            <img src={icon6} alt="" />
            <h3>Instant Features</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Services;
