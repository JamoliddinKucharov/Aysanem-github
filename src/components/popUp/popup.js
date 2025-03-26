import React, { useState } from "react";
import styles from "./popup.module.css";
import { Link } from "react-router-dom";

const PopUp = React.memo(() => {
  const [isChecked, setIsChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  // Checkboxni boshqarish funksiyasi
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Telefon raqamini formatlash funksiyasi
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, ""); // Faqat raqamlarni qoldirish

    if (!cleaned) return ""; // Agar input bo'sh bo'lsa, hech narsa qaytarmaydi

    if (cleaned.startsWith("998")) {
      // +998 format
      return `+998 (${cleaned.slice(3, 5)}) ${cleaned.slice(5, 8)} ${cleaned.slice(8, 10)} ${cleaned.slice(10, 12)}`;
    } else if (cleaned.length <= 9) {
      // Ichki format
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 5)} ${cleaned.slice(5, 7)} ${cleaned.slice(7, 9)}`;
    }

    return cleaned; // Agar hech qanday formatga mos kelmasa, o'zini qaytaradi
  };

  // Telefon raqamini o'zgartirish funksiyasi
  const handlePhoneNumberChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <div className={styles.popUp}>
      <div className={styles.title}>
        <img alt="" src="/assets/images/instalady-white.png" />
      </div>
      <form action="">
        <input type="text" name="" id="" placeholder="Ismingiz" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Telefon raqamingiz"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            name="offertaInstaLady"
            id="offertaInstaLady"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="offertaInstaLady">
            Men ommaviy{" "}
            <Link to="https://uz.wikipedia.org/wiki/Oferta" target="_blank">
              oferta
            </Link>{" "}
            shartlariga roziman.
          </label>
        </div>
        <button type="submit" disabled={!isChecked}>
          Yuborish
        </button>
      </form>
    </div>
  );
});

export default PopUp;
