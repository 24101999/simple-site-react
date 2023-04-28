import React from "react";
import styles from "./Header.module.css";
import img from "../assets/headerImg.png";
import logo from "../assets/Logo.png";
const Header = () => {
  return (
    <div className={styles.header}>
      <header>
        <nav>
          <img src={logo} alt="" />
          <div className="">
            <button className={styles.bt1}>Sign in</button>
            <button className={styles.bt2}>Sign up</button>
          </div>
        </nav>
        <div className={styles.title}>
          <h1>Landing template for startups</h1>
          <p>
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className={styles.titleButtons}>
            <button className={styles.btn1}>Start free trial</button>
            <button className={styles.btn2}>Learn more</button>
          </div>
        </div>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <img src={img} className={styles.imgbig} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
