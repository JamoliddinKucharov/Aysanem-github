import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./popup.module.css";
import { Link } from "react-router-dom"; 


const PopUp = React.memo(() => {
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("uz");

    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((response) => response.json())
            .then((data) => {
                if (data && data.country_code) {
                    setCountryCode(data.country_code.toLowerCase());
                }
            })
            .catch((error) => console.error("Geolocation error:", error));
    }, []);

    return (
        <div className={styles.popUp}>
            <div className={styles.title}>
                <img alt="" src="/assets/images/instalady-white.png" />
            </div>
            <form action="">
                <input type="text" name="name" id="name" placeholder="Ismingiz" />
                <PhoneInput
                    country={countryCode}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    inputClass={styles.input}
                    placeholder="Telefon raqamingiz"
                />
                <div className={styles.checkbox}>
                    <input type="checkbox" name="offertaInstaLady" id="offertaInstaLady" />
                    <label htmlFor="offertaInstaLady">
                        Men ommaviy <Link to="https://uz.wikipedia.org/wiki/Oferta" target="_blank">oferta</Link> shartlariga roziman.
                    </label>
                </div>
                <button type="submit">Yuborish</button>
            </form>
        </div>
    );
});

export default PopUp;
