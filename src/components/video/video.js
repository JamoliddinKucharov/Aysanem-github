import React, { useContext } from "react";
import styles from "./video.module.css";
import { GlobalContext } from "../../context/globalState";

const Video = React.memo(() => {
  const { setVideoHandler } = useContext(GlobalContext);
  return (
    <div className={styles.video}>
      <div className={styles.bg} onClick={() => setVideoHandler(false)}></div>
      <video src="/assets/video/video.mp4" controls></video>
    </div>
  );
});

export default Video;
