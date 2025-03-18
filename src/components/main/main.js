import React from "react";
import styles from "./main.module.css";

const Main = React.memo(() => {
  return (
    <div className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>Nega bu kurs siz uchun eng zo'ri?</h1>
        <div className={`row ${styles.row}`}>
          <div className={styles.block}>
            <img src="/assets/images/icon-agency.png" alt="" />

            <h4>Agentlik egalari tomonidan to‘liq SMM kursi.</h4>
            <p>
              Oson metodologiya va tajriba hamda bilimni oshirish uchun samarali
              topshiriqlar.
            </p>
          </div>
          <div className={styles.block}>
            <img src="/assets/images/icon-camera.png" alt="" />
            <h4>Kameraga mahorat bilan yondashish.</h4>
            <p>
              Nutqni shakllantirish, hissiyotlar bilan to‘g‘ri ishlash va o‘ziga
              ishonchni oshirish.
            </p>
          </div>
          <div className={styles.block}>
            <img src="/assets/images/icon-search.png" alt="" />

            <h4>Ishga joylashish va mijozlarni topishda yordam.</h4>
            <p>
              Nutqni shakllantirish, hissiyotlar bilan to‘g‘ri ishlash va o‘ziga
              ishonchni oshirish.
            </p>
          </div>
          <div className={styles.block}>
            <img src="/assets/images/icon-circle.png" alt="" />

            <h4>Chat GPT Midjourney</h4>
            <p>
              Talabalarimizga Chat GPT Pro va Midjourney xizmatlaridan bepul
              foydalanish imkoniyatini taqdim etamiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Main;
