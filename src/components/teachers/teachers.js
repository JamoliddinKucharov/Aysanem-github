import React, { useEffect, useState } from "react";
import styles from "./teachers.module.css";
import Teacher from "./teacher";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Teachers = React.memo(() => {
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  function getSlidesPerView() {
    if (window.innerWidth > 1250) return 5;
    if (window.innerWidth > 950) return 4;
    if (window.innerWidth > 650) return 3;
    return 2;
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [teachersList, setTeachersList] = useState([
    {
      name: "Aysanemxon<br/> Yusupova",
      image: "/assets/images/teacher-1.png",
      descs: [
        "- Aktrisa",
        "- Teleboshlovchi",
        "- Blogger",
        "- Mualliflik kontenti yaratuvchisi",
        "- To‘g‘ri nutq bo‘yicha ekspert.",
      ],
    },
    {
      name: "Shahnoza<br/> Satаrova",
      image: "/assets/images/teacher-2.png",
      descs: [
        "- Professional mobilograf",
        "- 5 yildan ortiq tajriba",
        "- Fashion fotograf",
        "- Qimmatbaho kontent bo‘yicha ekspert",
        "- Mashhur yulduzlar va blogerlar bilan ishlab keladi",
      ],
    },
    {
      name: "Ruslan <br/> Lashyonov",
      image: "/assets/images/teacher-3.png",
      descs: [
        "- «Mainstream» marketing agentligi asoschisi.",
        "- Marketolog va dizayner.  ",
        "- 10 yildan ortiq tajriba.  ",
        " Loyihalar: Magic City, BYD, Tashkent City, STEP, UzAuto, va boshqalar.",
      ],
    },
    {
      name: `Temur <br/> Nasirov`,
      image: "/assets/images/teacher-4.png",
      descs: [
        "- «Adversus» marketing agentligi asoschisi.",
        "- 10 yildan ortiq tajriba.",
        "- Marketolog va SMM  mutaxassisi.",
        "- Loyihalar: Sello, Atlas Mebel, Uzinfocom, Plan Baby.",
        "- Trafik bo‘yicha ekspert.",
      ],
    },
    {
      name: "Maxfiy yulduzli<br/> mehmon.",
      image: "/assets/images/teacher-5.png",
    },
  ]);

  return (
    <header className={styles.teachers}>
      <div className={`${styles.container} container`}>
        <div className={styles.bg}>
          <img src="/assets/images/teachers-bg.png" alt="" />
        </div>
        <div className={styles.title}>
          <h1>Ustozlar</h1>
        </div>
        <div className={`row ${styles.row}`}>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={20}
            pagination={false}
            modules={[Pagination]}
            className="mySwiper"
          >
            {teachersList.map((item, index) => (
              <SwiperSlide key={index}>
                <Teacher item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </header>
  );
});

export default Teachers;
