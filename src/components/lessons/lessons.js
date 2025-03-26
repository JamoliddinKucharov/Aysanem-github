import React from "react";
import styles from "./lessons.module.css";

const Gifts = React.memo(() => {
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
            insaydlar va ekspert fikrlari bilan.
          </p>
        </div>
        <div className={`row ${styles.row}`}>
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
                <p>- Trendlarni o‘z mavzusingga moslashtirish  </p>
              </ul>
              <ul>
                <p><span>• Stories: auditoriyani qanday jalb qilish mumkin? </span></p>
                <p>- Storis turlari: interaktiv, sotuvchi, jalb qiluvchi  </p>
                <p>- Storislarni suratga olish, montaj qilish va bezash  </p>
                <p>- Har kuni storis uchun 10 ta g‘oya  </p>
              </ul>
              <ul>
                <p><span>• Telegram kanalini yuritish </span></p>
                <p>- Telegram'da targ‘ibot asoslari  </p>
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
                  ayyorlanadi?   </p>
                <p> G‘oyalar va ilhomni qayerdan topish mumkin?   </p>
                <p>- Telefonda kreativ yaratish uchun eng yaxshi vositalar    </p>
              </ul>
              <ul>
                <p><span>• Targetlangan reklamani qanday ishga tushirish kerak?   </span></p>
                <p> Instagram'da target reklamaning asoslari   </p>
                <p> Telefonda reklamani to‘g‘ri sozlash   </p>
                <p> Target byudjetni yo‘q qilishga olib keladigan xatolar </p>
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
                <p>- Obunachilarni kontentingni bo‘lishishga qanday ndash mumkin?  </p>
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
                <p>- Daromad olishga halal beradigan xatolar   </p>
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
                <p>- Trendlarni o‘z mavzusingga moslashtirish  </p>
              </ul>
              <ul>
                <p><span>• Stories: auditoriyani qanday jalb qilish mumkin? </span></p>
                <p>- Storis turlari: interaktiv, sotuvchi, jalb qiluvchi  </p>
                <p>- Storislarni suratga olish, montaj qilish va bezash  </p>
                <p>- Har kuni storis uchun 10 ta g‘oya  </p>
              </ul>
              <ul>
                <p><span>• Telegram kanalini yuritish </span></p>
                <p>- Telegram'da targ‘ibot asoslari  </p>
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
            <div className={`${styles.block} ${styles.bonus}`}>
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
                <p>- Trendlarni o‘z mavzusingga moslashtirish  </p>
              </ul>
              <ul>
                <p><span>• Stories: auditoriyani qanday jalb qilish mumkin? </span></p>
                <p>- Storis turlari: interaktiv, sotuvchi, jalb qiluvchi  </p>
                <p>- Storislarni suratga olish, montaj qilish va bezash  </p>
                <p>- Har kuni storis uchun 10 ta g‘oya  </p>
              </ul>
              <ul>
                <p><span>• Telegram kanalini yuritish </span></p>
                <p>- Telegram'da targ‘ibot asoslari  </p>
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
          </div>
        </div>
      </div>
    </div>
  );
});

export default Gifts;
