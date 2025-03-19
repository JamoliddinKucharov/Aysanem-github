import React, { useRef, useState } from "react";
import styles from "./videoBlock.module.css";

const VideoBlock = React.memo(() => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.videoBlock}>
      <div className="container">
        <h1 className={styles.title}>Hayotingizni yaxshilash vaqti keldi!</h1>
        <div className={styles.video} onClick={handlePlayPause}>
          <video
            ref={videoRef}
            className={styles.videoPlayer}
            src="/assets/video/Асия - Как Ты Там (LIVE @ Авторадио).mp4"
            poster="/assets/images/poster.png"
            controls={false}
          />
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
        </div>
        <p>
          5 daqiqalik rolikni tomosha qilib, barcha savollaringizga javob oling.
        </p>
      </div>
    </div>
  );
});

export default VideoBlock;
