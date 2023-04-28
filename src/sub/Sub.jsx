import React from "react";
import styles from "./Sub.module.css";

const Sub = () => {
  return (
    <article className={styles.sub}>
      <div className={styles.text}>
        <h2>Stay in the loop</h2>
        <p>Join our newsletter to get top news before anyone else.</p>
      </div>
      <div className={styles.inp}>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your best email…" />
          <button>Subscribe</button>
        </form>
      </div>
    </article>
  );
};

export default Sub;
