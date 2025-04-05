import React, { useState } from "react";
import styles from "./faq.module.css";

const Faq = React.memo(() => {

    const [faqData, setFaqData] = useState([
        {
            question: "O‘qishni boshlash uchun nima kerak?",
            answer: "Bizning kursimiz uchun faqat telefon va internet kerak."
        },
        {
            question: "Kurs yangi boshlovchilar uchun mosmi yoki tajriba kerakmi?",
            answer: "Kurs yangi boshlovchilar va mutaxassislar uchun mo‘ljallangan, chunki biz eng so‘nggi insaytlar va fishkalarni ulashamiz."
        },
        {
            question: "Amaliy topshiriqlar va fikr-mulohaza bo‘ladimi?",
            answer: "Topshiriqlar va menejerlar bilan aloqa bo‘ladi. Agar siz tahlil va muhokamalarni xohlasangiz, o‘zingizga mos paketni tanlang."
        },
        {
            question: "Kursni tugatgandan keyin qanchalik tez natijalarni ko‘rishim mumkin?",
            answer: "Birinchi oy ichida asoslarni o‘rganib, parallel ravishda birinchi loyihangizni boshlashingiz mumkin."
        },
        {
            question: "Muvaffaqiyatli o‘quvchilar bormi?",
            answer: "Biz 100+ mutaxassisni tayyorladik, ular bizning agentliklarimiz va mamlakatning yirik kompaniyalarida ishlamoqda."
        },
        {
            question: "Ta’lim qanday o‘tadi: video darslar, vebinarlar yoki jonli uchrashuvlar?",
            answer: "Ta’lim aralash formatda o‘tadi: video darslar, uyga vazifalar bilan taqdimotlar, keyslarning tahlillari va ekspertlardan master-klasslar."
        },
        {
            question: "O‘qituvchiga savol berish mumkinmi?",
            answer: "Tanlangan paketga qarab individual maslahatlar yoki umumiy guruhlarda ustozlarga savol berish imkoniyati mavjud."
        },
        {
            question: "Agar kurs mos kelmasa, pulni qaytarib olish mumkinmi?",
            answer: "Agar kurs sizga mos kelmasa, oqim boshlangan kundan boshlab 10 kun ichida xarajatlar chegirilib, pulingiz qaytariladi. 10 kundan keyin pul qaytarilmaydi."
        },
        {
            question: "Kursni tugatgandan keyin sertifikat beriladimi?",
            answer: "Sertifikat ishga tushirish bo‘yicha hamkorlarimiz bilan birgalikda ma’lum paketlar uchun beriladi. Har bir paketning tavsifida mavjud imkoniyatlar ro‘yxati keltirilgan."
        },
        {
            question: "Ish yoki amaliyot topishda yordam berasizmi?",
            answer: "Biz ish topish va mijozlarni izlashda yordam beramiz. Buning uchun alohida blok ajratilgan. Shuningdek, bizda aktual vakansiyalar joylashtirilgan kanal mavjud."
        },
        {
            question: "Kursni tugatgandan keyin qancha daromad olish mumkin?",
            answer: "Tajriba asosida, o‘quvchilarimizning o‘rtacha daromadi 10-15 million so‘mni tashkil etadi. Agar jamoaviy ishlansa, daromad bir necha barobar oshishi mumkin."
        },
        {
            question: "Darslar qancha vaqt davomida saqlanib qoladi?",
            answer: "Kurs tugagandan keyin 1 dan 6 oygacha materiallarga kirish imkoniyati saqlanib qoladi. Bu tanlangan paketga bog‘liq."
        },
        {
            question: "Kursni o‘zimga qulay vaqtda o‘tishim mumkinmi?",
            answer: "Darslar ma’lum bir vaqtda yuboriladi, lekin siz istalgan vaqtda ularni ko‘rishingiz mumkin."
        },
        {
            question: "Agar darsni o‘tkazib yuborsam, nima qilishim kerak?",
            answer: "Dars Telegram botimizda saqlanadi va siz uni istalgan vaqtda tomosha qilishingiz mumkin. Onlayn master-klasslar va workshoplar esa yozib olinib, keyinchalik ham mavjud bo‘ladi."
        },
    ])


    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(prev => prev === index ? null : index);
    };


    return (
        <div className={`${styles.faq} container`}>
            <h1>Eng ko'p beriladigan savollar:</h1>
            <div className={styles.faqWrapper}>
                {faqData.map((item, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div className={styles.question} onClick={() => toggleFaq(index)}>
                            {item.question}
                        </div>
                        <div
                            className={`${styles.answerWrapper} ${activeIndex === index ? styles.open : ''}`}
                        >
                            <div className={styles.answer}>
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Faq;
