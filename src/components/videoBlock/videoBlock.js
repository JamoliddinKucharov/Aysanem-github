import React, { useContext } from "react";
import styles from "./videoBlock.module.css";
import { GlobalContext } from "../../context/globalState";

const VideoBlock = React.memo(() => {
  const { setVideoHandler } = useContext(GlobalContext);

  return (
    <div className={styles.videoBlock}>
      <div className="container">
        <h1 className={styles.title}>Hayotingizni yaxshilash vaqti keldi!</h1>
        <div className={styles.video}>
          <div className={styles.poster}>
            <img src="/assets/images/poster.png" alt="" />
          </div>
          <div className={styles.play} onClick={() => setVideoHandler(true)}>
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
        <p>
          5 daqiqalik rolikni tomosha qilib, barcha savollaringizga javob oling.
        </p>
      </div>
    </div>
  );
});

export default VideoBlock;
