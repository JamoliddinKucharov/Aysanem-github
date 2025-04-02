import React, { useState } from "react";
import styles from "./videoBlock.module.css";
import YouTube from "react-youtube";

const VideoBlock = React.memo(() => {
  const [videoStarted, setVideoStarted] = useState(false);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0, // Foydalanuvchi boshqaruv elementlarini ko‘rmasligi uchun
      disablekb: 1, // Klaviatura orqali boshqarish bloklanadi
      modestbranding: 1,
      rel: 0,
      fs: 0, // Fullscreen tugmachasini o‘chiradi
      iv_load_policy: 3, // Reklama bannerlarini olib tashlashga harakat qiladi
      preventInteraction: 1, // **📌 Interaktiv harakatlarni bloklaydi (iOS-da)**
      gesture: "none", // **📌 Mobil qurilmalarda ikki marta bosish orqali oldinga o'tishni bloklaydi**
    },
  };

  return (
    <div className={styles.videoBlock}>
      <div className="container">
        <h1 className={styles.title}>Hayotingizni yaxshilash vaqti keldi!</h1>
        <div className={styles.video}  >
          {!videoStarted ? (
            <div className={styles.poster} onClick={() => setVideoStarted(true)}>
              <img src="/assets/images/poster.png" alt="Poster" className={styles.posterImage} />
              <div className={styles.play} >
                <svg
                  width="50"
                  height="57"
                  viewBox="0 0 50 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M49.8791 28.5166L25.3999 42.6461L0.930664 56.7757V28.5166V0.267578L25.3999 14.397L49.8791 28.5166Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <YouTube videoId="9QIUDujg6Ow" opts={opts} style={{ height: "100%" }} />
          )}
        </div>
        <p>
          5 daqiqalik rolikni tomosha qilib, barcha savollaringizga javob oling.
        </p>
      </div>
    </div>
  );
});

export default VideoBlock;
