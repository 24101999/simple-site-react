import React from "react";
import styles from "./Info.module.css";
import ilus from "../assets/Illustration.png";
import ilus2 from "../assets/Illustration (1).png";
import ilus3 from "../assets/Illustration (2).png";
import { BsCheck2 } from "react-icons/bs";
const Info = () => {
  return (
    <article className={styles.info}>
      <div className={styles.title}>
        <h2>One product, unlimited solutions</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit laborum — semper quis lectus nulla.
        </p>
      </div>
      <div className={styles.infos}>
        <div className={styles.if}>
          <div className={styles.textOrder1}>
            <p style={{ color: "#5d5dff" }}>More speed. Less spend</p>
            <h2 style={{ color: "#fff" }}>Keep projects on schedule</h2>
            <p style={{ color: "#9BA9B4" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <BsCheck2 /> Duis aute irure dolor in reprehenderit
              </li>
              <li>
                <BsCheck2 /> Excepteur sint occaecat
              </li>
              <li>
                <BsCheck2 /> Amet consectetur adipiscing elit
              </li>
            </ul>
          </div>
          <div className={styles.imgOrder1}>
            <img src={ilus} alt="" />
          </div>
        </div>
        <div className={styles.if}>
          <div className={styles.imgOrder2}>
            <img src={ilus} alt="" />
          </div>
          <div className={styles.textOrder2}>
            <p style={{ color: "#5d5dff" }}>More speed. Less spend</p>
            <h2 style={{ color: "#fff" }}>Keep projects on schedule</h2>
            <p style={{ color: "#9BA9B4" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <BsCheck2 /> Duis aute irure dolor in reprehenderit
              </li>
              <li>
                <BsCheck2 /> Excepteur sint occaecat
              </li>
              <li>
                <BsCheck2 /> Amet consectetur adipiscing elit
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.if}>
          <div className={styles.textOrder3}>
            <p style={{ color: "#5d5dff" }}>More speed. Less spend</p>
            <h2 style={{ color: "#fff" }}>Keep projects on schedule</h2>
            <p style={{ color: "#9BA9B4" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <BsCheck2 /> Duis aute irure dolor in reprehenderit
              </li>
              <li>
                <BsCheck2 /> Excepteur sint occaecat
              </li>
              <li>
                <BsCheck2 /> Amet consectetur adipiscing elit
              </li>
            </ul>
          </div>
          <div className={styles.imgOrder3}>
            <img src={ilus} alt="" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Info;
