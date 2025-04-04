import React from "react";
import styles from "./forWhom.module.css";

const ForWhom = React.memo(() => {
    return (
        <div className="container">
            <div className={styles.forWhom}>
                <h3>Kurs kimga ma’qul bo’ladi?</h3>
                <div className={`${styles.row}`}>
                    <div className={styles.block}>
                        <h4>Tadbirkorlarga</h4>
                    </div>
                    <div className={styles.block}>
                        <h4>Yangi boshlovchilarga</h4>
                    </div>
                    <div className={styles.block}>
                        <h4>Uy bekalariga</h4>
                    </div>
                    <div className={styles.block}>
                        <h4>Freylanserlarga</h4>
                    </div>
                    <div className={styles.block}>
                        <h4>Kompaniyalar xodimlariga</h4>
                    </div>
                    <div className={styles.block}>
                        <h4>Talabalarga</h4>
                    </div>
                    <div className={`${styles.block} ${styles.blockLast}`}>
                        <h4>Marketing va PR mutaxassislarga</h4>
                    </div>
                    <div className={`${styles.block} ${styles.blockLast}`}>
                        <h4>Yangi kasb izlayotganlarga</h4>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ForWhom;
