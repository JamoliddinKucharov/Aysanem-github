import React, { useState } from "react";
import styles from "./videoBlock.module.css";
import YouTube from "react-youtube";

const VideoBlock = React.memo(() => {
  const [videoEnded, setVideoEnded] = useState(false);



  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 0, // 🎯 Foydalanuvchi videoni oldinga o‘tkaza olmasligi uchun
      disablekb: 1, // Klaviatura orqali boshqarishni o‘chiradi
      modestbranding: 1,
      rel: 0, // O‘xshash videolar ko‘rinmasligi uchun
    },
  };

  const onEnd = () => {
    setVideoEnded(true);
  };
  return (
    <div className={styles.videoBlock}>
      <div className="container">
        <h1 className={styles.title}>Hayotingizni yaxshilash vaqti keldi!</h1>
        <div className={styles.video}  >
          {/* {isPlaying ? (
            <iframe
              className={styles.videoPlayer}
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9QIUDujg6Ow?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div
              className={`${styles.play} ${isPlaying ? styles.hidden : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPause();
              }}
            >
              {isPlaying ? (
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="12" y="10" width="8" height="40" fill="white" />
                  <rect x="30" y="10" width="8" height="40" fill="white" />
                </svg>
              ) : (
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
              )}
            </div> 
          )} */}

          {/* {isPlaying ? (
            <iframe
              className={styles.videoPlayer}
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9QIUDujg6Ow?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img src="/assets/images/poster.png" className={styles.poster} alt="Video poster" />
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
            </>
          )} */}

          {videoEnded ? (
            <p>Video tugadi!</p> // 🎯 Video tugaganda boshqa tarkib ko‘rsatish mumkin
          ) : (
            <YouTube videoId="9QIUDujg6Ow" opts={opts} onEnd={onEnd} />
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
