import React, { useState } from "react";
import styles from "./videoBlock.module.css";
import YouTube from "react-youtube";

const VideoBlock = React.memo(() => {
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoStartedButton, setVideoStartedButton] = useState(false);
  const [player, setPlayer] = useState(null);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      preventInteraction: 1,
      gesture: "none",
    },
  };

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const handleOverlayClick = () => {
    if (player) {
      const state = player.getPlayerState();
      if (state === 1) {
        player.pauseVideo();
        setVideoStartedButton(true)
      } else {
        player.playVideo();
        setVideoStartedButton(false)
      }
    }
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
            <div className={styles.videoWrapper}>
              <YouTube videoId="9QIUDujg6Ow" opts={opts} style={{ height: "100%" }} onReady={onReady} />
              <div className={styles.overlay} onClick={handleOverlayClick}></div>
            </div>
          )}
          {videoStartedButton &&
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
            </div>}
        </div>
        <p>
          5 daqiqalik rolikni tomosha qilib, barcha savollaringizga javob oling.
        </p>
      </div>
    </div>
  );
});

export default VideoBlock;
