import React, { useState } from "react";
import styles from "./teachers.module.css";
import Teacher from "./teacher";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const Teachers = React.memo(() => {
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  function getSlidesPerView() {
    if (window.innerWidth > 1250) return 5;
    if (window.innerWidth > 950) return 4;
    if (window.innerWidth > 650) return 3;
    return 2;
  }

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
          <svg
            width="622"
            height="173"
            viewBox="0 0 622 173"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.9263 113.469C48.9263 124.529 48.3363 132.189 47.1564 136.449C45.9664 140.719 43.5565 142.849 39.9266 142.849C36.4567 142.849 34.2068 140.878 33.1768 136.929C32.1469 132.979 31.6369 125.159 31.6369 113.469V3.78309H0.837891V114.889C0.837891 135.429 3.7178 150.188 9.48761 159.198C15.2474 168.198 25.5571 172.697 40.4066 172.697C53.3562 172.697 62.8658 167.848 68.9556 158.128C75.0354 148.418 78.0754 132.659 78.0754 110.86V3.78309H48.9263V113.469ZM124.274 128.869C124.274 138.349 119.764 143.089 110.764 143.089C105.234 143.089 99.0747 140.799 92.2849 136.219L82.5752 164.878C89.675 170.248 100.425 172.938 114.794 172.938C127.274 172.938 137.103 168.868 144.293 160.738C151.473 152.598 155.073 140.559 155.073 124.609C155.073 114.02 153.013 104.15 148.913 94.9901C144.803 85.8304 140.303 78.6806 135.403 73.5508C130.504 68.421 126.004 63.0112 121.904 57.3214C117.794 51.6316 115.744 46.4216 115.744 41.6817C115.744 34.102 119.534 30.3125 127.114 30.3125C131.534 30.3125 136.743 31.8922 142.753 35.0521L151.993 7.57301C144.093 2.83316 134.224 0.463379 122.374 0.463379C111.634 0.463379 102.715 3.62326 95.6048 9.94305C88.495 16.2528 84.9451 27.2322 84.9451 42.8717C84.9451 52.0313 86.2851 60.4014 88.965 67.9812C91.6549 75.5609 94.9348 81.8406 98.8047 86.8204C102.675 91.7902 106.544 96.41 110.414 100.68C114.284 104.94 117.554 109.44 120.244 114.179C122.924 118.919 124.274 123.819 124.274 128.869ZM238.23 3.78309H157.203V33.6322H182.312V169.617H213.111V33.6322H238.23V3.78309ZM238.7 86.7003C238.7 115.449 241.9 137.009 248.3 151.378C254.69 165.748 265.789 172.938 281.579 172.938C296.748 172.938 307.718 165.868 314.518 151.728C321.307 137.599 324.697 115.919 324.697 86.7003C324.697 58.1112 321.467 36.5919 314.988 22.1424C308.508 7.68283 297.458 0.463379 281.819 0.463379C266.339 0.463379 255.28 7.45288 248.65 21.4324C242.02 35.402 238.7 57.1613 238.7 86.7003ZM270.919 86.7003C270.919 66.9609 271.629 52.6214 273.049 43.7017C274.479 34.772 277.319 30.3125 281.579 30.3125C286.159 30.3125 289.128 35.0919 290.468 44.6416C291.808 54.2013 292.478 68.2209 292.478 86.7003C292.478 106.92 291.728 121.369 290.228 130.059C288.728 138.739 285.849 143.089 281.579 143.089C277.319 143.089 274.479 138.349 273.049 128.869C271.629 119.389 270.919 105.34 270.919 86.7003ZM326.837 169.617H396.485V139.769H358.576L365.686 130.289L396.485 33.6322V3.78309H326.837V33.6322H364.976L357.636 43.8218L326.837 139.769V169.617ZM470.162 139.769H434.154V3.78309H403.355V169.617H470.162V139.769ZM503.571 169.617H535.79L504.521 3.07316H476.322L445.293 169.617H475.612L480.122 135.029H499.072L503.571 169.617ZM487.932 72.7208L489.592 46.1816H490.782L492.442 72.481L496.702 108.97H484.142L487.932 72.7208ZM537.69 169.617H568.489V104.23L573.229 107.07L586.729 169.617H621.797L603.078 107.07L596.208 100.2C607.898 93.2501 613.738 76.2007 613.738 49.0316C613.738 17.1227 598.968 1.17332 569.429 1.17332C558.06 1.17332 547.48 2.59304 537.69 5.43294V169.617ZM573.459 31.0224C578.829 31.0224 581.519 39.0821 581.519 55.1916C581.519 64.6612 580.889 71.5409 579.619 75.8007C578.359 80.0606 575.909 82.2004 572.279 82.2004H568.489V31.9721C569.749 31.3421 571.409 31.0224 573.459 31.0224Z"
              fill="black"
            />
          </svg>
        </div>
        <div className={`row ${styles.row}`}>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={20}
            pagination={false}
            className="mySwiper"
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={1000}
            modules={[Pagination, Autoplay]}
            loop={true}
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
