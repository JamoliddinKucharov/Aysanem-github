import React, { useEffect, useState } from "react";
import styles from "./lessons.module.css";

const Gifts = React.memo(() => {
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.lessons}>
      <div className="container">
        <div className={styles.titles}>
          <svg
            width="558"
            height="173"
            viewBox="0 0 558 173"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.885742 169.517C10.3554 171.097 20.0751 171.886 30.0248 171.886C39.0245 171.886 46.8042 170.347 53.364 167.267C59.9138 164.187 65.1236 160.197 68.9935 155.297C72.8634 150.407 75.9033 144.048 78.1132 136.228C80.3231 128.408 81.7931 120.548 82.5031 112.658C83.213 104.759 83.563 95.5192 83.563 84.9396C83.563 73.41 83.213 63.65 82.5031 55.6803C81.7931 47.7006 80.3631 40.0007 78.2332 32.581C76.1033 25.1512 73.1434 19.2715 69.3535 14.9316C65.5636 10.5818 60.5438 7.15184 54.304 4.62192C48.0642 2.09201 40.6044 0.832008 31.9147 0.832008C20.7051 0.832008 10.3554 1.70233 0.885742 3.44227V169.517ZM37.3645 30.6811C43.5243 30.6811 47.3942 34.5513 48.9742 42.2911C50.5541 50.0308 51.3441 63.6901 51.3441 83.2795C51.3441 101.759 50.3941 116.169 48.5042 126.518C46.6042 136.858 42.7344 142.038 36.8946 142.038C34.3646 142.038 32.6247 141.797 31.6847 141.327V31.3911C33.1047 30.9211 34.9946 30.6811 37.3645 30.6811ZM142.321 169.277H174.54L143.271 2.73234H115.072L84.043 169.277H114.362L118.862 134.688H137.821L142.321 169.277ZM126.682 72.3799L128.342 45.8408H129.532L131.181 72.1397L135.451 108.629H122.892L126.682 72.3799ZM176.44 169.277H207.239V103.889L211.979 106.729L225.478 169.277H260.537L241.828 106.729L234.958 99.859C246.648 92.9092 252.487 75.8599 252.487 48.6908C252.487 16.7818 237.718 0.832008 208.179 0.832008C196.809 0.832008 186.23 2.25222 176.44 5.09212V169.277ZM212.209 30.6811C217.579 30.6811 220.269 38.7408 220.269 54.8503C220.269 64.3199 219.639 71.2001 218.369 75.4599C217.109 79.7198 214.659 81.8596 211.029 81.8596H207.239V31.6313C208.499 31.0013 210.159 30.6811 212.209 30.6811ZM302.946 128.528C302.946 138.008 298.446 142.748 289.446 142.748C283.916 142.748 277.757 140.458 270.967 135.878L261.247 164.537C268.357 169.907 279.097 172.596 293.476 172.596C305.946 172.596 315.785 168.527 322.965 160.397C330.155 152.257 333.745 140.218 333.745 124.268C333.745 113.679 331.695 103.809 327.585 94.6492C323.485 85.4895 318.985 78.3398 314.085 73.21C309.186 68.0802 304.686 62.6704 300.576 56.9806C296.476 51.2907 294.416 46.0808 294.416 41.3409C294.416 33.7612 298.206 29.9712 305.796 29.9712C310.216 29.9712 315.425 31.5514 321.425 34.7113L330.665 7.23219C322.775 2.49234 312.895 0.12207 301.056 0.12207C290.316 0.12207 281.386 3.28195 274.287 9.60174C267.177 15.9115 263.617 26.8913 263.617 42.5308C263.617 51.6905 264.967 60.0601 267.647 67.6399C270.337 75.2196 273.607 81.4997 277.477 86.4796C281.346 91.4494 285.216 96.0691 289.086 100.339C292.956 104.599 296.236 109.099 298.926 113.839C301.606 118.578 302.946 123.478 302.946 128.528ZM406.242 139.428H370.234V3.44227H339.435V169.277H406.242V139.428ZM439.651 169.277H471.87L440.601 2.73234H412.402L381.373 169.277H411.692L416.192 134.688H435.151L439.651 169.277ZM424.012 72.3799L425.672 45.8408H426.862L428.512 72.1397L432.782 108.629H420.222L424.012 72.3799ZM473.77 169.277H504.569V103.889L509.299 106.729L522.809 169.277H557.867L539.158 106.729L532.288 99.859C543.968 92.9092 549.818 75.8599 549.818 48.6908C549.818 16.7818 535.048 0.832008 505.509 0.832008C494.14 0.832008 483.56 2.25222 473.77 5.09212V169.277ZM509.539 30.6811C514.909 30.6811 517.599 38.7408 517.599 54.8503C517.599 64.3199 516.969 71.2001 515.699 75.4599C514.439 79.7198 511.989 81.8596 508.359 81.8596H504.569V31.6313C505.829 31.0013 507.489 30.6811 509.539 30.6811Z"
              fill="black"
            />
          </svg>

          <p>
            <span> 30 dan ortiq professional darslar,</span>
            insaydlar va ekspertlar fikrlari bilan.
          </p>
        </div>
        {isVisible ?  
        <div className={`row ${styles.row} ${styles.rowPC}`}>
          <div className={styles.left}>
            <div className={`${styles.block} ${styles.one}`}>
              <div className={styles.title}>
                <h2>1 Blok</h2>
              </div>
              <h3>SMM asoslari</h3>
              <ul>
                <p><span>• SMM ga kirish</span></p>
                <p>- SMM nima va u nima uchun kerak?  </p>
                <p>- Ijtimoiy tarmoqlar va algoritmlar qanday ishlaydi?  </p>
                <p>- SMM'da qanday imkoniyatlar bor?  </p>
              </ul>
              <ul>
                <p><span>• Kontent strategiyasi </span></p>
                <p>- Shaxsiy brend va pozitsiyalash qanday yaratiladi?  </p>
                <p>- Maqsadli auditoriyani aniqlash: sening odaming kim?  </p>
                <p>- Blog/proekt mavzusini qanday tanlash kerak?  </p>
              </ul>
              <ul>
                <p><span>• Profilni bezash</span></p>
                <p>- Sotuvchi akkauntni qanday yaratish mumkin?  </p>
                <p>- Biografiya, avatar, havolalar – nima muhim?  </p>
                <p>- Profil sarlavhasi, mahkamlab qo‘yilgan storislar  </p>
              </ul>
              <ul>
                <p><span>• Trendli kontent yaratish </span></p>
                <p>- Hozir SMM'da nima ommabop?  </p>
                <p>- Trendlarni qayerdan topish mumkin?  </p>
                <p>- Trendlarni o‘z mavzusiga moslashtirish  </p>
              </ul>
              <ul>
                <p><span>• Stories: auditoriyani qanday jalb qilish mumkin? </span></p>
                <p>- Storis turlari: interaktiv, sotuvchi, jalb qiluvchi  </p>
                <p>- Storislarni suratga olish, montaj qilish va bezash  </p>
                <p>- Har kuni storis uchun 10 ta g‘oya  </p>
              </ul>
              <ul>
                <p><span>• Telegram kanalini yuritish </span></p>
                <p>- Telegramda targ‘ibot asoslari  </p>
                <p>- Kontentni qayerdan olish va nimalarni e’lon qilish kerak?</p>
                <p>- Qamrovni qanday oshirish mumkin?  </p>
              </ul>
              <ul>
                <p><span>• Bir oyga kontent-reja tuzish  </span></p>
                <p>- Postlar va storislar uchun g‘oyalarni qayerdan topish mumkin?  </p>
                <p>- Charchab qolmaslik va ko‘p vaqt sarflamaslik  </p>
                <p>- Turli hil sohalar uchun kontent-reja namunasi</p>
              </ul>
            </div>
            <div className={`${styles.block} ${styles.four}`}>
              <div className={styles.title}>
                <h2>4 Blok</h2>
              </div>
              <h3>Kopirayting</h3>
              <ul>
                <p><span>• Qanday qilib auditoriyani jalb qiluvchi matnlar yozish mumkin?  </span></p>
                <p>- Zo‘r postlar yozish uchun formulalar   </p>
                <p>- Qanday yozish kerakki, odamlar oxirigacha o‘qisin?  </p>
                <p>- Matn orqali sotishni qanday amalga oshirish mumkin?  </p>
              </ul>
              <ul>
                <p><span>• Sotuvchi postlar va storislar yozish   </span></p>
                <p>- Mukammal sotuvchi post formulasi   </p>
                <p>- Agresiyasiz storis orqali qanday sotish mumkin?  </p>
                <p>- Xatolar, tufayli hech kim sotib olmaydi   </p>
              </ul>
              <ul>
                <p><span>• Salbiy fikrlar va heyt bilan qanday ishlash kerak?  </span></p>
                <p>- Tanqidlarga to‘g‘ri javob berish usullari   </p>
                <p>- Qachon izohlarni o‘chirish va qachon javob berish kerak?   </p>
                <p>- Heytdan qanday qo‘rqmaslik mumkin?  </p>
              </ul>
            </div>
            <div className={`${styles.block} ${styles.five}`}>
              <div className={styles.title}>
                <h2>5 Blok</h2>
              </div>
              <h3>Target va reklama</h3>
              <ul>
                <p><span>• Reklama uchun kreativlarni qanday yaratish kerak? </span></p>
                <p> Reklama uchun banner yoki video qanday
                  tayyorlanadi?   </p>
                <p> G‘oyalar va ilhomni qayerdan topish mumkin?   </p>
                <p>- Telefonda kreativ yaratish uchun eng yaxshi vositalar    </p>
              </ul>
              <ul>
                <p><span>• Targetlangan reklamani qanday ishga tushirish kerak?   </span></p>
                <p> Instagram'da target reklamaning asoslari   </p>
                <p> Telefonda reklamani to‘g‘ri sozlash   </p>
                <p> Target byudjetini yo‘q qilishga olib keladigan xatolar </p>
              </ul>
              <ul>
                <p><span>• Profilni bezash</span></p>
                <p>- Sotuvchi akkauntni qanday yaratish mumkin?  </p>
                <p>- Biografiya, avatar, havolalar – nima muhim?  </p>
                <p>- Profil sarlavhasi, mahkamlab qo‘yilgan storislar  </p>
              </ul>

            </div>
            <div className={`${styles.block} ${styles.seven}`}>
              <div className={styles.title}>
                <h2>7 Blok</h2>
              </div>
              <h3>Mijozlar va daromad</h3>
              <ul>
                <p><span>• Muvaffaqiyatli SMM-mutaxassisining chek-listi </span></p>
                <p>- SMM-menejerga qanday ko‘nikmalar kerak?    </p>
                <p>- Ishni qanday tizimlashtirish va charchashdan qochish?   </p>
                <p>- Qanday xatolarga yo‘l qo‘ymaslik kerak?   </p>
              </ul>
              <ul>
                <p><span>• SMM'da mijozlarni qanday topish mumkin?  </span></p>
                <p>- Birinchi mijozlarni qayerdan izlash kerak?   </p>
                <p>- Xizmatlaringni to‘g‘ri taklif qilish usullari   </p>
                <p>- Tajriba bo‘lmasa ham kuchli portfolio
                  yaratish </p>
              </ul>
              <ul>
                <p><span>• Mijozlar bilan ishlash va motivatsiyani yo‘qotmaslik</span></p>
                <p>- Mijozlar bilan qanday to‘g‘ri ishlash kerak?   </p>
                <p>- Zaharli buyurtmachilarni qanday tanib olish va oldini olish?   </p>
                <p>- Hammasiga ulgurish uchun kunni qanday tashkil qilish kerak?  </p>
              </ul>
              <ul>
                <p><span>•  Xizmat narxini qanday oshirish mumkin? </span></p>
                <p>- O‘z qadriyatini qanday aniqlash kerak?  </p>
                <p>- Mijozga nega qimmatligini qanday tushuntirish mumkin?  </p>
                <p>- Arzon mutaxassislar qanday xatolarga yo‘l qo‘yadi?    </p>
              </ul>
              <ul>
                <p><span>• Yakuniy dars: SMM'dagi shaxsiy strategiyang  </span></p>
                <p>- O‘rgangan barcha bilimlarni qanday qo‘llash kerak?   </p>
                <p>- Birinchi qadamlar qanday bo‘lishi kerak?    </p>
                <p>- Motivatsiyani yo‘qotmaslik va natijaga erishish yo‘llari   </p>
              </ul>
            </div>
          </div>
          <div className={styles.right}>
            <div className={`${styles.block} ${styles.two}`}>
              <div className={styles.title}>
                <h2>2 Blok</h2>
              </div>
              <h3>Shaxsiy brend</h3>
              <ul>
                <p><span>• Birinchi 1000 obunachini qanday yig‘ish mumkin?  </span></p>
                <p>- Bepul va xavfsiz targ‘ibot usullari  </p>
                <p>- Hamkorlik va o‘zaro piarni qanday tashkil qilish kerak?  </p>
                <p>- Obunachilarni kontentingni bo‘lishishga qanday undash mumkin?  </p>
              </ul>
              <ul>
                <p><span>• Blogerlar bilan ishlash   </span></p>
                <p>- Hamkorlik uchun blogerlarni qanday topish kerak?   </p>
                <p>- Reklama bo‘yicha to‘g‘ri kelishish yo‘llari   </p>
                <p>- Yangi boshlovchilar qanday xatolarga yo‘l qo‘yadi?   </p>
              </ul>
              <ul>
                <p><span>• Jonli efirlar va auditoriyani jalb qilish  </span></p>
                <p>- Jonli efirlarni qanday to‘g‘ri o‘tkazish kerak?   </p>
                <p>- Muvaffaqiyatli mavzular   </p>
                <p>- Efirga qanday tayyorlanish va qo‘rqmaslik?   </p>
              </ul>
              <ul>
                <p><span>• SMM'ni qanday monetizatsiya qilish mumkin?  </span></p>
                <p>- Daromad olishning 5 real usuli   </p>
                <p>- Kichik blog bilan ham pul ishlashni qanday boshlash mumkin?  </p>
                <p>- Daromad olishga xalaqit beradigan xatolar   </p>
              </ul>
              <ul>
                <p><span>• Avtovoronka va progrev orqali sotish   </span></p>
                <p>- Voronka nima va u qanday ishlaydi?   </p>
                <p>- Auditoriyani xarid qilishga qanday tayyorlash kerak?   </p>
                <p>- Storis orqali sotuvni qanday to‘g‘ri yo‘lga qo‘yish mumkin? </p>
              </ul>

            </div>
            <div className={`${styles.block} ${styles.three}`}>
              <div className={styles.title}>
                <h2>3 Blok</h2>
              </div>
              <h3>Mobilografiya</h3>
              <ul>
                <p><span>• Mobil fotosuratga olish (mobilografiya) </span></p>
                <p> Telefonda ajoyib suratlarni qanday tushirish mumkin?    </p>
                <p> Yorug‘lik, rakurslar, kompozitsiya    </p>
                <p> Yangi boshlovchilar qiladigan asosiy xatolar    </p>
              </ul>
              <ul>
                <p><span>• Telefon orqali suratlarni tahrirlash va montaj qilish  </span></p>
                <p> Eng yaxshi bepul tahrirlash ilovalari    </p>
                <p> Instagram uchun uslubiy vizual yaratish    </p>
                <p> Rang tuzatish, filtrlar, presetlar   </p>
              </ul>
              <ul>
                <p><span>• Reels turlari va ularni yaratish  </span></p>
                <p> Qaysi Reels eng ko‘p ko‘rish to‘playdi?    </p>
                <p> Trendlar tahlili: hozirgi eng ommabop formatlar   </p>
                <p> Ssenariy, suratga olish, montaj   </p>
              </ul>
              <ul>
                <p><span>• Video-kontent (asoslar)   </span></p>
                <p> Nega video ijtimoiy tarmoqlarda asosiy vositadir?    </p>
                <p> Qanday qilib zo‘r Reels va TikTok videolarini suratga olish mumkin?    </p>
                <p> Suratga olishda eng ko‘p uchraydigan xatolar    </p>
              </ul>
              <ul>
                <p><span>• Telefonda video montaj qilish   </span></p>
                <p> Eng yaxshi bepul montaj ilovalari  </p>
                <p> Videolarni qanday kesish, matn va effektlar qo‘shish    </p>
                <p> Musiqa va trendli tovushlar  </p>
              </ul>
            </div>
            <div className={`${styles.block} ${styles.six}`}>
              <div className={styles.title}>
                <h2>6 Blok</h2>
              </div>
              <h3>Aysanemxondan <br /> expertli darslar</h3>
              <ul>
                <p><span>• Kamerada ishonch bilan ishlash </span></p>
                <p>- Kameradan qo‘rqishni qanday yengish kerak?    </p>
                <p>- Qo‘llar va hissiyotlarni qanday boshqarish kerak?  </p>
                <p>- Ob’ektivga qanday qarash kerak, shunda tomoshabinlarni o‘ziga jalb qilish mumkin?   </p>
              </ul>
              <ul>
                <p><span>• Aniq va chiroyli gapirish </span></p>
                <p>- Parazit so‘zlardan qanday qutulish mumkin?   </p>
                <p>- Diksiya, ovoz va intonatsiyani qanday yaxshilash kerak?   </p>
                <p>- Ishonchli nutq uchun samarali mashqlar   </p>
              </ul>
              <ul>
                <p><span>• Xarizmatik storislarni qanday yaratish mumkin?</span></p>
                <p>- Odamlar sening gaplaringni diqqat bilan eshitishi uchun qanday gapirish kerak?   </p>
                <p>- Ekran orqali hissiyotlarni qanday yetkazish mumkin?   </p>
                <p>- Nega tabiiy bo‘lish juda muhim? </p>
              </ul>

            </div>
            <div className={`${styles.block} ${styles.bonus}`}>
              <div className={styles.title}>
                <h2>Bonus darslar</h2>
              </div>
              <h3>Sun'iy intellekt</h3>
              <ul>
                <p><span>•  Sun’iy intellekt (SI) SMM’da</span></p>
                <p>- Sun’iy intellekt yordamida kontent yaratish   </p>
                <p>- SI yordamida g‘oyalar, matnlar va tasvirlarni eneratsiya qilish   </p>
                <p>- Instagram va boshqa ijtimoiy tarmoqlarda ish jarayonini avtomatlashtirish   </p>
              </ul>
              <ul>
                <p><span>• SI yordamida foto va videolarni qayta ishlash  </span></p>
                <p>- Fotosurat sifatini yaxshilash uchun ilovalar va servislar   </p>
                <p>- Reels va storis uchun SI-filtrlar va effektlar   </p>
                <p>- Sun’iy intellekt yordamida tezkor montaj qilish    </p>
              </ul>

              <div className={styles.bonusFooter}>
                <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.4336 0.50293H64.9524C72.2621 0.50293 78.9019 3.49312 83.7218 8.30297C88.5316 13.1228 91.5216 19.7626 91.5216 27.0724V64.5912C91.5216 71.9009 88.5316 78.5507 83.7218 83.3606C78.9019 88.1804 72.2621 91.1704 64.9524 91.1704H27.4336C20.1238 91.1704 13.474 88.1804 8.65416 83.3606C3.84432 78.5507 0.854492 71.9009 0.854492 64.5912V27.0724C0.854492 19.7626 3.84432 13.1228 8.65416 8.30297C13.474 3.49312 20.1238 0.50293 27.4336 0.50293ZM64.9524 7.40309H27.4336C22.0238 7.40309 17.1039 9.62281 13.544 13.1827C9.97413 16.7526 7.75429 21.6725 7.75429 27.0724V64.5912C7.75429 70.001 9.97413 74.9205 13.544 78.4803C17.1039 82.0502 22.0238 84.2604 27.4336 84.2604H64.9524C70.3522 84.2604 75.272 82.0502 78.8419 78.4803C82.4118 74.9205 84.6218 70.001 84.6218 64.5912V27.0724C84.6218 21.6725 82.4018 16.7526 78.8419 13.1827C75.272 9.62281 70.3522 7.40309 64.9524 7.40309Z" fill="#F00050" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M46.1929 65.5114C40.9231 61.3216 35.5632 57.0614 31.1734 51.9816C27.8035 48.0917 23.5537 41.9823 23.9737 36.5724C24.1837 33.7925 25.8036 30.7825 28.4635 29.6625C32.3434 28.0326 36.5133 29.5724 38.7532 33.0623C39.4532 34.1523 40.0232 35.4425 40.6432 36.5925L46.1729 46.9222L46.1929 46.8919L46.2029 46.9222L51.7328 36.5925C52.3527 35.4425 52.9227 34.1523 53.6227 33.0623C55.8626 29.5724 60.0324 28.0326 63.9123 29.6625C66.5722 30.7825 68.1921 33.7925 68.4021 36.5724C68.8221 41.9823 64.5723 48.0917 61.2124 51.9816C56.8126 57.0614 51.4527 61.3216 46.1929 65.5114ZM46.1629 33.6326C45.3929 32.1926 44.8029 30.8825 44.0329 29.6825C40.0631 23.5027 32.6033 21.1228 26.0335 23.8927C21.2337 25.9126 18.1239 30.9026 17.7239 36.0925C17.1639 43.4622 21.8537 50.7817 26.4335 56.0816C31.6834 62.1514 38.0932 67.0412 44.323 72.041C44.583 72.251 44.843 72.4511 45.093 72.6611C45.503 72.9911 45.8529 73.1213 46.1929 73.1113C46.5229 73.1213 46.8728 72.9911 47.2828 72.6611C47.5428 72.4511 47.7928 72.251 48.0528 72.041C54.2826 67.0412 60.6924 62.1514 65.9423 56.0816C70.5221 50.7817 75.2119 43.4622 74.6519 36.0925C74.2519 30.9026 71.1421 25.9126 66.3523 23.8927C59.7725 21.1228 52.3127 23.5027 48.3529 29.6825C47.5829 30.8825 46.9829 32.1926 46.2129 33.6326C46.2029 33.6226 46.1929 33.6023 46.1929 33.5823C46.1829 33.6023 46.1729 33.6226 46.1629 33.6326Z" fill="#F00050" />
                </svg>

                <h4>Amaliy mashg‘ulotlar va
                  <br />
                  SI  foydalanish imkoniyati.</h4>
              </div>
            </div>
          </div>
        </div>: 
        <div className={`row ${styles.row} ${styles.rowMobile}`}>
          <div className={`${styles.block} ${styles.one}`}>
            <div className={styles.title}>
              <h2>1 Blok</h2>
            </div>
            <h3>SMM asoslari</h3>
            <ul>
              <p><span>• SMM ga kirish</span></p>
              <p>- SMM nima va u nima uchun kerak?  </p>
              <p>- Ijtimoiy tarmoqlar va algoritmlar qanday ishlaydi?  </p>
              <p>- SMM'da qanday imkoniyatlar bor?  </p>
            </ul>
            <ul>
              <p><span>• Kontent strategiyasi </span></p>
              <p>- Shaxsiy brend va pozitsiyalash qanday yaratiladi?  </p>
              <p>- Maqsadli auditoriyani aniqlash: sening odaming kim?  </p>
              <p>- Blog/proekt mavzusini qanday tanlash kerak?  </p>
            </ul>
            <ul>
              <p><span>• Profilni bezash</span></p>
              <p>- Sotuvchi akkauntni qanday yaratish mumkin?  </p>
              <p>- Biografiya, avatar, havolalar – nima muhim?  </p>
              <p>- Profil sarlavhasi, mahkamlab qo‘yilgan storislar  </p>
            </ul>
            <ul>
              <p><span>• Trendli kontent yaratish </span></p>
              <p>- Hozir SMM'da nima ommabop?  </p>
              <p>- Trendlarni qayerdan topish mumkin?  </p>
              <p>- Trendlarni o‘z mavzusiga moslashtirish  </p>
            </ul>
            <ul>
              <p><span>• Stories: auditoriyani qanday jalb qilish mumkin? </span></p>
              <p>- Storis turlari: interaktiv, sotuvchi, jalb qiluvchi  </p>
              <p>- Storislarni suratga olish, montaj qilish va bezash  </p>
              <p>- Har kuni storis uchun 10 ta g‘oya  </p>
            </ul>
            <ul>
              <p><span>• Telegram kanalini yuritish </span></p>
              <p>- Telegramda targ‘ibot asoslari  </p>
              <p>- Kontentni qayerdan olish va nimalarni e’lon ilish kerak?</p>
              <p>- Qamrovni qanday oshirish mumkin?  </p>
            </ul>
            <ul>
              <p><span>• Bir oyga kontent-reja tuzish  </span></p>
              <p>- Postlar va storislar uchun g‘oyalarni qayerdan topish mumkin?  </p>
              <p>- Charchab qolmaslik va ko‘p vaqt sarflamaslik  </p>
              <p>- Turli sohalar uchun kontent-reja namunasi</p>
            </ul>
          </div>
          <div className={`${styles.block} ${styles.two}`}>
            <div className={styles.title}>
              <h2>2 Blok</h2>
            </div>
            <h3>Shaxsiy brend</h3>
            <ul>
              <p><span>• Birinchi 1000 obunachini qanday yig‘ish mumkin?  </span></p>
              <p>- Bepul va xavfsiz targ‘ibot usullari  </p>
              <p>- Hamkorlik va o‘zaro piarni qanday tashkil qilish kerak?  </p>
              <p>- Obunachilarni kontentingni bo‘lishishga qanday undash mumkin?  </p>
            </ul>
            <ul>
              <p><span>• Blogerlar bilan ishlash   </span></p>
              <p>- Hamkorlik uchun blogerlarni qanday topish kerak?   </p>
              <p>- Reklama bo‘yicha to‘g‘ri kelishish yo‘llari   </p>
              <p>- Yangi boshlovchilar qanday xatolarga yo‘l qo‘yadi?   </p>
            </ul>
            <ul>
              <p><span>• Jonli efirlar va auditoriyani jalb qilish  </span></p>
              <p>- Jonli efirlarni qanday to‘g‘ri o‘tkazish kerak?   </p>
              <p>- Muvaffaqiyatli mavzular   </p>
              <p>- Efirga qanday tayyorlanish va qo‘rqmaslik?   </p>
            </ul>
            <ul>
              <p><span>• SMM'ni qanday monetizatsiya qilish mumkin?  </span></p>
              <p>- Daromad olishning 5 real usuli   </p>
              <p>- Kichik blog bilan ham pul ishlashni qanday boshlash mumkin?  </p>
              <p>- Daromad olishga xalaqit beradigan xatolar   </p>
            </ul>
            <ul>
              <p><span>• Avtovoronka va progrev orqali sotish   </span></p>
              <p>- Voronka nima va u qanday ishlaydi?   </p>
              <p>- Auditoriyani xarid qilishga qanday tayyorlash kerak?   </p>
              <p>- Storis orqali sotuvni qanday to‘g‘ri yo‘lga qo‘yish mumkin? </p>
            </ul>

          </div>
          <div className={`${styles.block} ${styles.three}`}>
            <div className={styles.title}>
              <h2>3 Blok</h2>
            </div>
            <h3>Mobilografiya</h3>
            <ul>
              <p><span>• Mobil fotosuratga olish (mobilografiya) </span></p>
              <p> Telefonda ajoyib suratlarni qanday tushirish mumkin?    </p>
              <p> Yorug‘lik, rakurslar, kompozitsiya    </p>
              <p> Yangi boshlovchilar qiladigan asosiy xatolar    </p>
            </ul>
            <ul>
              <p><span>• Telefon orqali suratlarni tahrirlash va montaj qilish  </span></p>
              <p> Eng yaxshi bepul tahrirlash ilovalari    </p>
              <p> Instagram uchun uslubiy vizual yaratish    </p>
              <p> Rang tuzatish, filtrlar, presetlar   </p>
            </ul>
            <ul>
              <p><span>• Reels turlari va ularni yaratish  </span></p>
              <p> Qaysi Reels eng ko‘p ko‘rish to‘playdi?    </p>
              <p> Trendlar tahlili: hozirgi eng ommabop formatlar   </p>
              <p> Ssenariy, suratga olish, montaj   </p>
            </ul>
            <ul>
              <p><span>• Video-kontent (asoslar)   </span></p>
              <p> Nega video ijtimoiy tarmoqlarda asosiy vositadir?    </p>
              <p> Qanday qilib zo‘r Reels va TikTok videolarini suratga olish mumkin?    </p>
              <p> Suratga olishda eng ko‘p uchraydigan xatolar    </p>
            </ul>
            <ul>
              <p><span>• Telefonda video montaj qilish   </span></p>
              <p> Eng yaxshi bepul montaj ilovalari  </p>
              <p> Videolarni qanday kesish, matn va effektlar qo‘shish    </p>
              <p> Musiqa va trendli tovushlar  </p>
            </ul>
          </div>
          <div className={`${styles.block} ${styles.four}`}>
            <div className={styles.title}>
              <h2>4 Blok</h2>
            </div>
            <h3>Kopirayting</h3>
            <ul>
              <p><span>• Qanday qilib auditoriyani jalb qiluvchi matnlar yozish mumkin?  </span></p>
              <p>- Zo‘r postlar yozish uchun formulalar   </p>
              <p>- Qanday yozish kerakki, odamlar oxirigacha o‘qisin?  </p>
              <p>- Matn orqali sotishni qanday amalga oshirish mumkin?  </p>
            </ul>
            <ul>
              <p><span>• Sotuvchi postlar va storislar yozish   </span></p>
              <p>- Mukammal sotuvchi post formulasi   </p>
              <p>- Agresiyasiz storis orqali qanday sotish mumkin?  </p>
              <p>- Xatolar, tufayli hech kim sotib olmaydi   </p>
            </ul>
            <ul>
              <p><span>• Salbiy fikrlar va heyt bilan qanday ishlash kerak?  </span></p>
              <p>- Tanqidlarga to‘g‘ri javob berish usullari   </p>
              <p>- Qachon izohlarni o‘chirish va qachon javob berish kerak?   </p>
              <p>- Heytdan qanday qo‘rqmaslik mumkin?  </p>
            </ul>
          </div>
          <div className={`${styles.block} ${styles.five}`}>
            <div className={styles.title}>
              <h2>5 Blok</h2>
            </div>
            <h3>Target va reklama</h3>
            <ul>
              <p><span>• Reklama uchun kreativlarni qanday yaratish kerak? </span></p>
              <p> Reklama uchun banner yoki video qanday
                tayyorlanadi?   </p>
              <p> G‘oyalar va ilhomni qayerdan topish mumkin?   </p>
              <p>- Telefonda kreativ yaratish uchun eng yaxshi vositalar    </p>
            </ul>
            <ul>
              <p><span>• Targetlangan reklamani qanday ishga tushirish kerak?   </span></p>
              <p> Instagram'da target reklamaning asoslari   </p>
              <p> Telefonda reklamani to‘g‘ri sozlash   </p>
              <p> Target byudjetini yo‘q qilishga olib keladigan xatolar </p>
            </ul>
            <ul>
              <p><span>• Profilni bezash</span></p>
              <p>- Sotuvchi akkauntni qanday yaratish mumkin?  </p>
              <p>- Biografiya, avatar, havolalar – nima muhim?  </p>
              <p>- Profil sarlavhasi, mahkamlab qo‘yilgan storislar  </p>
            </ul>

          </div>
          <div className={`${styles.block} ${styles.six}`}>
            <div className={styles.title}>
              <h2>6 Blok</h2>
            </div>
            <h3>Aysanemxondan <br /> expertli darslar</h3>
            <ul>
              <p><span>• Kamerada ishonch bilan ishlash </span></p>
              <p>- Kameradan qo‘rqishni qanday yengish kerak?    </p>
              <p>- Qo‘llar va hissiyotlarni qanday boshqarish kerak?  </p>
              <p>- Ob’ektivga qanday qarash kerak, shunda tomoshabinlarni o‘ziga jalb qilish mumkin?   </p>
            </ul>
            <ul>
              <p><span>• Aniq va chiroyli gapirish </span></p>
              <p>- Parazit so‘zlardan qanday qutulish mumkin?   </p>
              <p>- Diksiya, ovoz va intonatsiyani qanday yaxshilash kerak?   </p>
              <p>- Ishonchli nutq uchun samarali mashqlar   </p>
            </ul>
            <ul>
              <p><span>• Xarizmatik storislarni qanday yaratish mumkin?</span></p>
              <p>- Odamlar sening gaplaringni diqqat bilan eshitishi uchun qanday gapirish kerak?   </p>
              <p>- Ekran orqali hissiyotlarni qanday yetkazish mumkin?   </p>
              <p>- Nega tabiiy bo‘lish juda muhim? </p>
            </ul>

          </div>
          <div className={`${styles.block} ${styles.seven}`}>
            <div className={styles.title}>
              <h2>7 Blok</h2>
            </div>
            <h3>Mijozlar va daromad</h3>
            <ul>
              <p><span>• Muvaffaqiyatli SMM-mutaxassisining chek-listi </span></p>
              <p>- SMM-menejerga qanday ko‘nikmalar kerak?    </p>
              <p>- Ishni qanday tizimlashtirish va charchashdan qochish?   </p>
              <p>- Qanday xatolarga yo‘l qo‘ymaslik kerak?   </p>
            </ul>
            <ul>
              <p><span>• SMM'da mijozlarni qanday topish mumkin?  </span></p>
              <p>- Birinchi mijozlarni qayerdan izlash kerak?   </p>
              <p>- Xizmatlaringni to‘g‘ri taklif qilish usullari   </p>
              <p>- Tajriba bo‘lmasa ham kuchli portfolio
                yaratish </p>
            </ul>
            <ul>
              <p><span>• Mijozlar bilan ishlash va motivatsiyani yo‘qotmaslik</span></p>
              <p>- Mijozlar bilan qanday to‘g‘ri ishlash kerak?   </p>
              <p>- Zaharli buyurtmachilarni qanday tanib olish va oldini olish?   </p>
              <p>- Hammasiga ulgurish uchun kunni qanday tashkil qilish kerak?  </p>
            </ul>
            <ul>
              <p><span>•  Xizmat narxini qanday oshirish mumkin? </span></p>
              <p>- O‘z qadriyatini qanday aniqlash kerak?  </p>
              <p>- Mijozga nega qimmatligini qanday tushuntirish mumkin?  </p>
              <p>- Arzon mutaxassislar qanday xatolarga yo‘l qo‘yadi?    </p>
            </ul>
            <ul>
              <p><span>• Yakuniy dars: SMM'dagi shaxsiy strategiyang  </span></p>
              <p>- O‘rgangan barcha bilimlarni qanday qo‘llash kerak?   </p>
              <p>- Birinchi qadamlar qanday bo‘lishi kerak?    </p>
              <p>- Motivatsiyani yo‘qotmaslik va natijaga erishish yo‘llari   </p>
            </ul>
          </div>
          <div className={`${styles.block} ${styles.bonus}`}>
            <div className={styles.title}>
              <h2>Bonus darslar</h2>
            </div>
            <h3>Sun'iy intellekt</h3>
            <ul>
              <p><span>•  Sun’iy intellekt (SI) SMM’da</span></p>
              <p>- Sun’iy intellekt yordamida kontent yaratish   </p>
              <p>- SI yordamida g‘oyalar, matnlar va tasvirlarni eneratsiya qilish   </p>
              <p>- Instagram va boshqa ijtimoiy tarmoqlarda ish jarayonini avtomatlashtirish   </p>
            </ul>
            <ul>
              <p><span>• SI yordamida foto va videolarni qayta ishlash  </span></p>
              <p>- Fotosurat sifatini yaxshilash uchun ilovalar va servislar   </p>
              <p>- Reels va storis uchun SI-filtrlar va effektlar   </p>
              <p>- Sun’iy intellekt yordamida tezkor montaj qilish    </p>
            </ul>

            <div className={styles.bonusFooter}>
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.4336 0.50293H64.9524C72.2621 0.50293 78.9019 3.49312 83.7218 8.30297C88.5316 13.1228 91.5216 19.7626 91.5216 27.0724V64.5912C91.5216 71.9009 88.5316 78.5507 83.7218 83.3606C78.9019 88.1804 72.2621 91.1704 64.9524 91.1704H27.4336C20.1238 91.1704 13.474 88.1804 8.65416 83.3606C3.84432 78.5507 0.854492 71.9009 0.854492 64.5912V27.0724C0.854492 19.7626 3.84432 13.1228 8.65416 8.30297C13.474 3.49312 20.1238 0.50293 27.4336 0.50293ZM64.9524 7.40309H27.4336C22.0238 7.40309 17.1039 9.62281 13.544 13.1827C9.97413 16.7526 7.75429 21.6725 7.75429 27.0724V64.5912C7.75429 70.001 9.97413 74.9205 13.544 78.4803C17.1039 82.0502 22.0238 84.2604 27.4336 84.2604H64.9524C70.3522 84.2604 75.272 82.0502 78.8419 78.4803C82.4118 74.9205 84.6218 70.001 84.6218 64.5912V27.0724C84.6218 21.6725 82.4018 16.7526 78.8419 13.1827C75.272 9.62281 70.3522 7.40309 64.9524 7.40309Z" fill="#F00050" />
                <path fillRule="evenodd" clipRule="evenodd" d="M46.1929 65.5114C40.9231 61.3216 35.5632 57.0614 31.1734 51.9816C27.8035 48.0917 23.5537 41.9823 23.9737 36.5724C24.1837 33.7925 25.8036 30.7825 28.4635 29.6625C32.3434 28.0326 36.5133 29.5724 38.7532 33.0623C39.4532 34.1523 40.0232 35.4425 40.6432 36.5925L46.1729 46.9222L46.1929 46.8919L46.2029 46.9222L51.7328 36.5925C52.3527 35.4425 52.9227 34.1523 53.6227 33.0623C55.8626 29.5724 60.0324 28.0326 63.9123 29.6625C66.5722 30.7825 68.1921 33.7925 68.4021 36.5724C68.8221 41.9823 64.5723 48.0917 61.2124 51.9816C56.8126 57.0614 51.4527 61.3216 46.1929 65.5114ZM46.1629 33.6326C45.3929 32.1926 44.8029 30.8825 44.0329 29.6825C40.0631 23.5027 32.6033 21.1228 26.0335 23.8927C21.2337 25.9126 18.1239 30.9026 17.7239 36.0925C17.1639 43.4622 21.8537 50.7817 26.4335 56.0816C31.6834 62.1514 38.0932 67.0412 44.323 72.041C44.583 72.251 44.843 72.4511 45.093 72.6611C45.503 72.9911 45.8529 73.1213 46.1929 73.1113C46.5229 73.1213 46.8728 72.9911 47.2828 72.6611C47.5428 72.4511 47.7928 72.251 48.0528 72.041C54.2826 67.0412 60.6924 62.1514 65.9423 56.0816C70.5221 50.7817 75.2119 43.4622 74.6519 36.0925C74.2519 30.9026 71.1421 25.9126 66.3523 23.8927C59.7725 21.1228 52.3127 23.5027 48.3529 29.6825C47.5829 30.8825 46.9829 32.1926 46.2129 33.6326C46.2029 33.6226 46.1929 33.6023 46.1929 33.5823C46.1829 33.6023 46.1729 33.6226 46.1629 33.6326Z" fill="#F00050" />
              </svg>

              <h4>Amaliy mashg‘ulotlar va
                <br />
                SI  foydalanish imkoniyati.</h4>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
});

export default Gifts;
