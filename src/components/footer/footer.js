import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = React.memo(() => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <h2>Qiziqtirgan savollaringiz bo‘lsa </h2>
          <Link to={"https://t.me/send"}>tugmani bosing</Link>
        </div>
        <p>
          Aysanem Yusupovaning “InstaLady” nomli akademiyasining rasmiy sayti
        </p>
        <span>Product by Mainstream ProCent</span>
      </div>
    </div>
  );
});

export default Footer;
