import React from "react";
import styles from "./gifts.module.css";

const Gifts = React.memo(() => {
  return (
    <header className={styles.gift}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className={styles.left}>
            <img src="/assets/images/iphone.png" alt="" />
          </div>
          <div className={styles.right}>
            <h1>Sovg'alar</h1>
            <ul>
            <img src="/assets/images/iphone.png" alt="" />

              <li>iphone 16 Pro Max</li>
              <li>5 ta iphone 16</li>
              <li>O‘quvchilarimizdan biri mening SMM menejerim bo‘ladi!</li>
              <li>
                Shuningdek, SMM mutaxassisi uchun zarur bo‘lgan ko‘plab
                sovg‘alar!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Gifts;
