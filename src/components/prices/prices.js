import React from "react";
import styles from "./prices.module.css";
import { Link } from "react-router-dom";

const Prices = React.memo(() => {
    return (
        <div className={styles.prices}>
            <div className={styles.title}>
                <div className="container">
                    <h1>Kursning narxi</h1>
                </div>
            </div>

            <div className="container">
                <div className={styles.row}>
                    <div className={styles.price}>
                        <div className={styles.top}>
                            <h4>Start</h4>
                            <p>• 30 ta darslik</p>
                            <p>• Savollar uchun umumiy guruhga kirish</p>
                            <p>• Darslar 1 oy davomida saqlanib qolinadi</p>
                            <p>• Vakansiyalar kanaliga kirish</p>
                            <p>• Chat GPT  Pro  va Midjourney’ga 1 oyga bepul kirish</p>
                        </div>

                        <div className={styles.bottom}>
                            <h5>6 800 000 so’m</h5>
                            <h1>2 955 000 <span> so’m</span></h1>
                            <h3>295 500 <span> so’mdan/oyiga</span></h3>
                            <Link to={"/"}>SMM KASBINI EGALLASH</Link>
                        </div>
                    </div>
                    <div className={styles.price}>
                        <div className={styles.top}>
                            <h4>Premium</h4>
                            <p>• 30 ta darslik</p>
                            <p>• 2 ta sun'iy intellekt bo‘yicha dars</p>
                            <p>• Savollar uchun umumiy guruhga kirish</p>
                            <p>• Kurator bilan 5 ta guruh mashg‘uloti</p>
                            <p>• Darslar 3 oy davomida saqlanib qolinadi</p>
                            <p>• Chat GPT  Pro  va Midjourney’ga oyga bepul kirish</p>
                            <p>• Vakansiyalar kanaliga kirish </p>
                            <p>• 1 ta individual mashg‘ulot loyiha rodyuseri, marketing agentligigasi - Ruslan bilan</p>
                            <p>• Sovrinli o‘yinlarda ishtirok etish</p>
                            <p>• Agentlik jamoasiga saralash bosqichida qatnashish</p>
                            <p>• Sertifikat beriladi</p>
                        </div>
                        <div className={styles.bottom}>
                            <h5>9 600 000 so’m</h5>
                            <h1>5 350 000<span> so’m</span></h1>
                            <h3>520 000 <span> so’mdan/oyiga</span></h3>
                            <Link to={"/"}>SMM KASBINI EGALLASH</Link>
                        </div>
                    </div>
                    <div className={styles.price}>
                        <div className={styles.top}>
                            <h4>VIP</h4>
                            <p>• 30 ta darslik</p>
                            <p>• 2 ta sun'iy intellekt bo‘yicha dars</p>
                            <p>• Savollar uchun umumiy guruhga kirish</p>
                            <p>• Kurator bilan 5 ta guruh mashg‘uloti</p>
                            <p>• Darslar 6 oy davomida saqlanib qolinadi</p>
                            <p>• Kurs tugagandan so‘ng 1 oy qo‘shimcha kuratorlik</p>
                            <p>• Chat GPT  Pro va Midjourney’ga bepul kirish </p>
                            <p>• Vakansiyalar kanaliga kirish</p>
                            <p>• 2 ta individual mashg‘ulot loyiha rodyuseri, marketing agentligi gasi - Ruslan bilan</p>
                            <p>• Sovrinli o‘yinlarda ishtirok etish</p>
                            <p>• Aysanem Yusupova bilan guruhli onlayn suhbat</p>
                            <p>• Agentlik jamoasiga saralash bosqichida qatnashish</p>
                            <p>• VIP-Sertifikat beriladi</p>
                        </div>
                        <div className={styles.bottom}>
                            <h5>16 900 000 so’m</h5>
                            <h1>8 960 000<span> so’m</span></h1>
                            <h3>900 000<span> so’mdan/oyiga</span></h3>
                            <Link to={"/"}>SMM KASBINI EGALLASH</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.payBlock}>
                    <div className={styles.payRow}>
                        <div className={styles.left}>
                            <h3>Kursni harid qilish</h3>
                            <div  className={styles.payIcons}>
                                <div className={styles.pay}>
                                    <img src="/assets/images/payme.png" alt="" />
                                </div>
                                <div className={styles.pay}>
                                    <img src="/assets/images/click.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <h3>Kursni nasiyaga harid qilish</h3>
                            <div className={styles.payIcons}>
                                <div className={styles.pay}>
                                    <img src="/assets/images/uzum.png" alt="" />
                                </div>
                                <div className={styles.pay}>
                                    <img src="/assets/images/tbc.png" alt="" />
                                </div>
                                <div className={styles.pay}>
                                    <img src="/assets/images/anorbank.png" alt="" />
                                </div>
                                <div className={styles.pay}>
                                    <img src="/assets/images/alif.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Prices;
