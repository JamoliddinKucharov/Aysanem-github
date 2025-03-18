import React from "react";
import styles from "./lessons.module.css";

const Gifts = React.memo(() => {
  return (
    <div className={styles.lessons}>
      <div className="container">
        <div className={styles.titles}>
          <h1>Darslar</h1>
          <p>
            <span> 30 dan ortiq professional darslar,</span>
            insaydlar va ekspert fikrlari bilan.
          </p>
        </div>
        <div className={`row ${styles.row}`}>
          <div className={styles.lessonBlock}>
            <h1>1 </h1> <p>SMM asoslari</p>
          </div>
          <div className={styles.lessonBlock}>
            <h1>6 </h1> <p>Sotuvga yo‘naltirilgan kopirayting</p>
          </div>
          <div className={styles.lessonBlock}>
            <h1>2 </h1> <p>Mobilografiya</p>
          </div>
          <div className={styles.lessonBlock}>
            <h1>7 </h1> <p>Strategiyani shakllantirish</p>
          </div>
          <div className={styles.lessonBlock}>
            <h1>3 </h1> <p>Aysanemdan ekspert darslari</p>
          </div>
          <div className={styles.lessonBlock}>
            <h1>8 </h1> <p>Bloggerlar bilan ishlash</p>
          </div>
          <div className={styles.lessonBlock}>
            <h1>4 </h1> <p>Telefon orqali fotosuratga olish</p>
          </div>
          <div className={styles.lessonBlock}>
            <h1>9 </h1> <p>Chiroyli nutq bo‘yicha darslar</p>
          </div>
          <div className={styles.lessonBlock}>
            <h1>5</h1> <p>Sun'iy intellekt bilan ishlash</p>
          </div>
          <div className={styles.lessonBlock}>
            <h1>10</h1> <p>Mijozlar bilan ishlash</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Gifts;
