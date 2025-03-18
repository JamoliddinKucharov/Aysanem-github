import React from "react";
import styles from "./header.module.css";

const Header = React.memo(() => {
  return (
    <header className={styles.header}>
      <div className={styles.bg}>
        <img src="/assets/images/header-bg.png" alt="" />
      </div>
      <div className="container">
        <h1>
          <span>3 oyda smm</span> bilan erkinlikka!
        </h1>
        <p>
          <span>Aysanem Yusupovadan</span>
          mukammal SMM kursi.
        </p>
        <img
          src="/assets/images/instaLady.png"
          alt=""
          className={styles.instaLady}
        />
      </div>
    </header>
  );
});

export default Header;
