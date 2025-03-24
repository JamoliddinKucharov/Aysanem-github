import React, { useState, useEffect } from "react";
import styles from "./tostart.module.css";
import { Link } from "react-router-dom";

const ToStart = React.memo(() => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextAprilFirst = new Date(now.getFullYear(), 3, 1);
      if (now > nextAprilFirst) {
        nextAprilFirst.setFullYear(nextAprilFirst.getFullYear() + 1);
      }

      const difference = nextAprilFirst - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (number) => (number < 10 ? `0${number}` : number);

  return (
    <div className="container">
      <div className={styles.toStart}>
        <div className={styles.header}>
          <h4>Startga:</h4>
        </div>
        <span className={styles.days}>{timeLeft.days}-kun </span>
        <h1>
          <span className={styles.titles}>{formatNumber(timeLeft.hours)}</span>:
          <span className={styles.titles}>
            {formatNumber(timeLeft.minutes)}
          </span>
          :
          <span className={styles.titles}>
            {formatNumber(timeLeft.seconds)}
          </span>
        </h1>
        <Link to={"https://t.me/aysanem_private_bot"} target="_blank">
          SMM KASBINI EGALLASH
        </Link>
      </div>
    </div>
  );
});

export default ToStart;
