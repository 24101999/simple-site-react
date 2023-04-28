import React from "react";
import styles from "./Feed.module.css";
import av from "../assets/Avatar.png";
import av2 from "../assets/Avatar (1).png";
import av3 from "../assets/Avatar (2).png";
const Feed = () => {
  return (
    <article className={styles.feed}>
      <div className={styles.title}>
        <h2>Don't take our word for it</h2>
        <p>
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
        </p>
      </div>

      <div className={styles.avatares}>
        <div className={styles.avatar}>
          <img src={av} alt="" />
          <p>
            — Open PRO lets me quickly get the insights I care about so that I
            can focus on my productive work. I've had Open PRO for about 24
            hours now and I honestly don't know how I functioned without it
            before.
          </p>
          <p>
            <strong style={{ color: "#fff" }}>Anastasia Dan</strong>{" "}
            <strong style={{ color: "#5D5DFF" }}>UX Board</strong>
          </p>
        </div>
        <div className={styles.avatar}>
          <img src={av2} alt="" />
          <p>
            — Open PRO lets me quickly get the insights I care about so that I
            can focus on my productive work. I've had Open PRO for about 24
            hours now and I honestly don't know how I functioned without it
            before.
          </p>
          <p>
            <strong style={{ color: "#fff" }}>Anastasia Dan</strong>{" "}
            <strong style={{ color: "#5D5DFF" }}>UX Board</strong>
          </p>
        </div>
        <div className={styles.avatar}>
          <img src={av3} alt="" />
          <p>
            — Open PRO lets me quickly get the insights I care about so that I
            can focus on my productive work. I've had Open PRO for about 24
            hours now and I honestly don't know how I functioned without it
            before.
          </p>
          <p>
            <strong style={{ color: "#fff" }}>Anastasia Dan</strong>{" "}
            <strong style={{ color: "#5D5DFF" }}>UX Board</strong>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Feed;
