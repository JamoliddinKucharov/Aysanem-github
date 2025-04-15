import React, { useState } from "react";
import styles from "./calculator.module.css";

const Calculator = React.memo(() => {
  const [clients, setClients] = useState("0");
  const [profitPerClient, setProfitPerClient] = useState(3000000);
  const totalProfit = Number(clients) * profitPerClient;

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleClientsChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setClients(0);
    } else {
      setClients(Number(value).toString());
    }
  };

  return (
    <div className="container">
      <div className={styles.calculator}>
        <div className={`row ${styles.row}`}>
          <h2>
            <span>Daromad</span> kalkulyatori
          </h2>

          <div className={styles.blocks}>
            <div className={styles.block}>
              <div className={styles.input}>
                <input
                  type="number"
                  value={clients}
                  onChange={handleClientsChange}
                />
              </div>
              <p>Mijozlar soni</p>
            </div>
            <div className={styles.block}>
              <div className={styles.input}>
                <input
                  type="text"
                  value={formatNumber(profitPerClient)}
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/\s/g, "");
                    setProfitPerClient(Number(rawValue) || 0);
                  }}
                />
                <span>so'm</span>
              </div>
              <p>Har bir mijozdan foyda</p>
            </div>
            <div className={styles.block}>
              <div className={styles.input}>
                <input type="text" value={formatNumber(totalProfit)} readOnly />
                <span>so'm</span>
              </div>
              <p>Umumiy sof foyda</p>
            </div>
          </div>
        </div>
        <p className={styles.bottom} >
          Odatda 1 mutaxassis 3 000 000 so‘mdan o‘rtacha chek bilan 5 tagacha
          mijozni yuritadi, lekin daromad&nbsp;
          <span>
            sizning ko‘nikmalaringizga qarab yanada yuqori bo‘lishi mumkin.
          </span>
        </p>
      </div>
    </div>
  );
});

export default Calculator;
