import React, { useState, useEffect } from "react";
import styles from "./tostart.module.css";
import { Link } from "react-router-dom";

const ToStart = React.memo(() => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

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

      setTimeLeft({ days, hours, minutes });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className={styles.toStart}>
        <h4>Startga:</h4>
        <h1>
          <span>{timeLeft.days}</span> kun <span>{timeLeft.hours}</span> soat{" "}
          <span>{timeLeft.minutes}</span> daqiqa
        </h1>
        <Link to={"https://t.me/aysanem_private_bot"}>SMM KASBINI EGALLASH</Link>
      </div>
    </div>
  );
});

export default ToStart;
