import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/Logo.png";
import rede1 from "../assets/1.png";
import rede2 from "../assets/2.png";
import rede3 from "../assets/3.png";
import rede4 from "../assets/4.png";
import rede5 from "../assets/5.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div style={{ display: "flex" }} className={styles.dad}>
        <div className={styles.first}>
          <img src={logo} alt="" />
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className={styles.second}>
          <div className={styles.txt}>
            <p style={{ color: "#fff" }}>
              <strong>Resources</strong>
            </p>
            <p>Nostrud exercitation</p>
            <p>Visual mockups</p>
            <p>Nostrud exercitation</p>
            <p>Visual mockups</p>
          </div>
          <div className={styles.txt}>
            <p style={{ color: "#fff" }}>
              <strong>Resources</strong>
            </p>
            <p>Nostrud exercitation</p>
            <p>Visual mockups</p>
          </div>
          <div className={styles.txt}>
            <p style={{ color: "#fff" }}>
              <strong>Resources</strong>
            </p>
            <p>Nostrud exercitation</p>
            <p>Visual mockups</p>
            <p>Nostrud exercitation</p>
          </div>
        </div>
      </div>
      <div className={styles.end}>
        <div className="">
          Made by <strong>Cruip</strong>. All right reserved
        </div>
        <div
          className=""
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
        >
          <img src={rede1} alt="" />
          <img src={rede2} alt="" />
          <img src={rede3} alt="" />
          <img src={rede4} alt="" />
          <img src={rede5} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
