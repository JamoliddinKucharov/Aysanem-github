import React from "react";
import styles from "./main.module.css";

const Main = React.memo(() => {
  return (
    <div className={styles.main}>
      <div className="container">
        <svg
          className={styles.title}
          width="1001"
          height="87"
          viewBox="0 0 1001 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.1358 85.3307H35.6054V12.0431H22.7859V40.9221L24.9658 55.8317H24.3458L21.0059 40.1922L11.8362 11.7332H0.266602V85.0208H13.0862V56.8717L11.1062 41.9622H11.6262L15.0661 57.5017L24.1358 85.3307ZM912.297 19.5529C912.297 15.663 911.077 13.193 908.647 12.1531C909.207 9.72315 910.387 7.74328 912.197 6.21333L909.377 0.893555C903.127 4.23344 899.997 9.79319 899.997 17.5729C899.997 23.8927 902.117 27.0626 906.357 27.0626C908.027 27.0626 909.427 26.3627 910.577 24.9727C911.727 23.5828 912.297 21.7728 912.297 19.5529ZM989.544 61.8815C989.544 58.6816 990.114 55.6517 991.264 52.8118C992.404 49.9619 993.664 47.612 995.014 45.7721C996.374 43.9321 997.624 41.4222 998.764 38.2623C999.914 35.1024 1000.48 31.6425 1000.48 27.8927C1000.48 22.2629 999.224 17.973 996.684 15.0231C994.144 12.0632 990.654 10.5932 986.204 10.5932C980.024 10.5932 975.224 12.3631 971.825 15.9029L976.724 25.8127C978.454 23.8627 980.614 22.8928 983.184 22.8928C986.034 22.8928 987.454 25.0827 987.454 29.4526C987.454 32.2325 986.744 35.1724 985.324 38.2623C983.894 41.3622 982.474 44.6421 981.044 48.112C979.624 51.5919 978.904 55.1717 978.904 58.8516C978.904 60.1716 978.944 61.1816 979.014 61.8815H989.544ZM977.764 77.4109C977.764 83.2507 980.094 86.1707 984.744 86.1707C989.614 86.1707 992.044 83.2507 992.044 77.4109C992.044 71.6411 989.614 68.7613 984.744 68.7613C982.594 68.7613 980.894 69.5013 979.634 71.0012C978.384 72.4912 977.764 74.631 977.764 77.4109ZM39.4553 85.0208H67.9144V71.8812H53.0149V54.9917H66.1444V41.8622H53.0149V25.1827H67.6044V12.0431H39.4553V85.0208ZM88.8737 55.5218L94.7135 56.9817V70.8412C93.8035 72.5111 92.5536 73.3411 90.9536 73.3411C88.5237 73.3411 86.8537 71.3412 85.9538 67.3513C85.0538 63.3515 84.5938 57.0816 84.5938 48.5319C84.5938 39.5722 85.1038 33.1924 86.1038 29.4025C87.1137 25.6126 89.1837 23.7228 92.3136 23.7228C95.2335 23.7228 98.0134 24.4227 100.653 25.8127L103.153 13.6131C99.3333 11.5932 94.9135 10.5932 89.9136 10.5932C83.1739 10.5932 78.234 13.4731 75.1141 19.2429C71.9842 25.0127 70.4243 34.7723 70.4243 48.5319C70.4243 62.0114 71.9142 71.7112 74.9041 77.621C77.8941 83.5208 82.7539 86.4807 89.4937 86.4807C95.8934 86.4807 101.133 84.0108 105.233 79.0809V47.072H88.8737V55.5218ZM130.462 85.0208H144.642L130.882 11.7332H118.473L104.823 85.0208H118.163L120.143 69.8012H128.482L130.462 85.0208ZM123.583 42.3822L124.313 30.7125H124.832L125.562 42.2821L127.442 58.3316H121.913L123.583 42.3822ZM192.39 28.6226C192.39 21.8128 190.82 17.1529 187.69 14.653C184.571 12.1531 179.841 10.9031 173.521 10.9031C168.171 10.9031 163.441 11.4531 159.341 12.5731V84.5008C163.511 85.6108 168.651 86.1707 174.771 86.1707C180.811 86.1707 185.49 84.3908 188.79 80.8509C192.09 77.301 193.74 71.8812 193.74 64.5914C193.74 59.4416 193.05 55.5918 191.66 53.0118C190.27 50.4419 188.25 48.5019 185.61 47.1819V46.552C190.13 43.5621 192.39 37.5923 192.39 28.6226ZM175.501 73.8611C173.831 73.8611 172.721 73.6911 172.161 73.3411V53.8518H174.771C176.511 53.8518 177.811 54.4217 178.681 55.5717C179.551 56.7216 179.981 59.1615 179.981 62.9214C179.981 70.2212 178.491 73.8611 175.501 73.8611ZM172.161 42.6921V23.6228C173.001 23.3428 174.001 23.2028 175.181 23.2028C176.581 23.2028 177.561 23.9527 178.161 25.4427C178.751 26.9426 179.041 29.3825 179.041 32.7924C179.041 37.5923 178.101 40.7122 176.231 42.1721C175.391 42.5221 174.631 42.6921 173.931 42.6921H172.161ZM217.509 60.3115C217.509 65.1814 217.249 68.5512 216.729 70.4212C216.209 72.3011 215.15 73.2411 213.55 73.2411C212.02 73.2411 211.03 72.3712 210.58 70.6312C210.13 68.8913 209.9 65.4514 209.9 60.3115V12.0431H196.35V60.9415C196.35 69.9712 197.62 76.471 200.15 80.4309C202.69 84.3907 207.22 86.3707 213.76 86.3707C219.459 86.3707 223.639 84.2408 226.319 79.9609C228.989 75.691 230.329 68.7612 230.329 59.1615V12.0431H217.509V60.3115ZM270.158 85.0208H286.307L274.738 50.1019L270.878 46.552L275.158 42.8021L284.437 12.0431H269.528L262.338 43.2221L261.188 44.052V12.0431H247.638V85.0208H261.188V54.5817H262.338L270.158 85.0208ZM308.936 60.3115C308.936 65.1814 308.666 68.5512 308.146 70.4212C307.626 72.3011 306.567 73.2411 304.967 73.2411C303.437 73.2411 302.447 72.3712 301.997 70.6312C301.547 68.8913 301.317 65.4514 301.317 60.3115V12.0431H287.767V60.9415C287.767 69.9712 289.037 76.471 291.577 80.4309C294.117 84.3907 298.647 86.3707 305.177 86.3707C310.876 86.3707 315.066 84.2408 317.736 79.9609C320.416 75.691 321.756 68.7612 321.756 59.1615V12.0431H308.936V60.3115ZM325.196 85.0208H338.745V56.2517L340.825 57.5017L346.775 85.0208H362.205L353.965 57.5017L350.945 54.4717C356.085 51.4218 358.655 43.9121 358.655 31.9625C358.655 17.9229 352.155 10.9031 339.165 10.9031C334.156 10.9031 329.506 11.5232 325.196 12.7732V85.0208ZM340.935 24.0327C343.295 24.0327 344.475 27.5826 344.475 34.6724C344.475 38.8422 344.205 41.8622 343.645 43.7421C343.085 45.6121 342.015 46.552 340.415 46.552H338.745V24.4527C339.305 24.1727 340.035 24.0327 340.935 24.0327ZM380.864 67.0913C380.864 71.2612 378.884 73.3411 374.914 73.3411C372.484 73.3411 369.774 72.3311 366.785 70.3212L362.515 82.9308C365.645 85.3007 370.364 86.4807 376.694 86.4807C382.184 86.4807 386.504 84.6908 389.674 81.1109C392.834 77.531 394.414 72.2312 394.414 65.2114C394.414 60.5615 393.514 56.2117 391.704 52.1818C389.894 48.1519 387.914 45.0021 385.764 42.7522C383.604 40.4922 381.624 38.1123 379.814 35.6024C378.014 33.1025 377.104 30.8125 377.104 28.7226C377.104 25.3927 378.774 23.7228 382.114 23.7228C384.054 23.7228 386.354 24.4227 388.994 25.8127L393.054 13.7131C389.584 11.6331 385.234 10.5932 380.024 10.5932C375.304 10.5932 371.374 11.9832 368.244 14.7631C365.125 17.533 363.555 22.3728 363.555 29.2526C363.555 33.2825 364.145 36.9623 365.325 40.3022C366.505 43.6321 367.955 46.392 369.654 48.5819C371.354 50.7719 373.054 52.8118 374.764 54.6817C376.464 56.5616 377.904 58.5416 379.084 60.6216C380.274 62.7115 380.864 64.8614 380.864 67.0913ZM427.663 67.0913C427.663 71.2612 425.683 73.3411 421.723 73.3411C419.293 73.3411 416.583 72.3311 413.593 70.3212L409.323 82.9308C412.443 85.3007 417.173 86.4807 423.493 86.4807C428.982 86.4807 433.312 84.6908 436.472 81.1109C439.632 77.531 441.222 72.2312 441.222 65.2114C441.222 60.5615 440.312 56.2117 438.512 52.1818C436.702 48.1519 434.722 45.0021 432.562 42.7522C430.412 40.4922 428.432 38.1123 426.623 35.6024C424.813 33.1025 423.913 30.8125 423.913 28.7226C423.913 25.3927 425.583 23.7228 428.913 23.7228C430.862 23.7228 433.152 24.4227 435.792 25.8127L439.862 13.7131C436.392 11.6331 432.042 10.5932 426.833 10.5932C422.103 10.5932 418.183 11.9832 415.053 14.7631C411.923 17.533 410.363 22.3728 410.363 29.2526C410.363 33.2825 410.953 36.9623 412.133 40.3022C413.313 43.6321 414.753 46.392 416.463 48.5819C418.163 50.7719 419.863 52.8118 421.573 54.6817C423.273 56.5616 424.713 58.5416 425.893 60.6216C427.073 62.7115 427.663 64.8614 427.663 67.0913ZM444.242 85.0208H457.792V12.0431H444.242V85.0208ZM461.231 85.0208H491.88V71.8812H475.201L478.331 67.7113L491.88 25.1827V12.0431H461.231V25.1827H478.011L474.781 29.6625L461.231 71.8812V85.0208ZM529.719 60.3115C529.719 65.1814 529.459 68.5512 528.939 70.4212C528.419 72.3011 527.359 73.2411 525.759 73.2411C524.229 73.2411 523.239 72.3712 522.789 70.6312C522.339 68.8913 522.109 65.4514 522.109 60.3115V12.0431H508.56V60.9415C508.56 69.9712 509.83 76.471 512.36 80.4309C514.9 84.3907 519.44 86.3707 525.969 86.3707C531.669 86.3707 535.849 84.2408 538.529 79.9609C541.209 75.691 542.539 68.7612 542.539 59.1615V12.0431H529.719V60.3115ZM574.648 70.2212C572.148 72.3012 569.818 73.3411 567.668 73.3411C564.398 73.3411 562.248 71.1912 561.198 66.8814C560.158 62.5715 559.638 56.4216 559.638 48.4319C559.638 39.6722 560.148 33.3625 561.148 29.5126C562.158 25.6527 564.158 23.7228 567.148 23.7228C569.438 23.7228 571.768 24.3827 574.128 25.7027L576.628 13.3031C573.578 11.4931 569.608 10.5932 564.748 10.5932C561.758 10.5932 559.208 11.0731 557.088 12.0431C554.968 13.0231 552.968 14.813 551.089 17.4129C549.219 20.0228 547.809 23.8828 546.869 28.9926C545.929 34.0924 545.459 40.5022 545.459 48.222C545.459 55.7217 545.899 62.0315 546.769 67.1414C547.629 72.2512 548.939 76.171 550.678 78.9209C552.408 81.6708 554.378 83.6108 556.568 84.7608C558.748 85.9007 561.378 86.4807 564.438 86.4807C566.728 86.4807 569.088 86.1107 571.528 85.3808C573.958 84.6508 575.828 83.5908 577.148 82.2008L574.648 70.2212ZM599.567 85.0208H613.116V12.0431H599.567V41.7622H592.167V12.0431H578.608V85.0208H592.167V54.8918H599.567V85.0208ZM637.826 60.3115C637.826 65.1814 637.566 68.5512 637.046 70.4212C636.516 72.3011 635.456 73.2411 633.866 73.2411C632.336 73.2411 631.346 72.3712 630.886 70.6312C630.436 68.8913 630.216 65.4514 630.216 60.3115V12.0431H616.656V60.9415C616.656 69.9712 617.926 76.471 620.466 80.4309C623.006 84.3907 627.536 86.3707 634.066 86.3707C639.766 86.3707 643.955 84.2408 646.635 79.9609C649.305 75.691 650.645 68.7612 650.645 59.1615V12.0431H637.826V60.3115ZM677.954 85.3307H689.424V12.0431H676.604V40.9221L678.794 55.8317H678.164L674.834 40.1922L665.655 11.7332H654.085V85.0208H666.905V56.8717L664.925 41.9622H665.445L668.885 57.5017L677.954 85.3307ZM707.143 85.0208H735.602V71.8812H720.693V54.9917H733.833V41.8622H720.693V25.1827H735.292V12.0431H707.143V85.0208ZM762.502 85.3307H773.961V12.0431H761.142V40.9221L763.332 55.8317H762.712L759.372 40.1922L750.202 11.7332H738.622V85.0208H751.452V56.8717L749.472 41.9622H749.992L753.432 57.5017L762.502 85.3307ZM795.75 55.5218L801.59 56.9817V70.8412C800.69 72.5111 799.44 73.3411 797.84 73.3411C795.41 73.3411 793.741 71.3412 792.831 67.3513C791.931 63.3515 791.481 57.0816 791.481 48.5319C791.481 39.5722 791.981 33.1924 792.991 29.4025C794 25.6126 796.07 23.7228 799.19 23.7228C802.11 23.7228 804.89 24.4227 807.53 25.8127L810.03 13.6131C806.21 11.5932 801.8 10.5932 796.8 10.5932C790.051 10.5932 785.121 13.4731 781.991 19.2429C778.861 25.0127 777.301 34.7723 777.301 48.5319C777.301 62.0114 778.801 71.7112 781.781 77.621C784.771 83.5208 789.641 86.4807 796.38 86.4807C802.77 86.4807 808.02 84.0108 812.12 79.0809V47.072H795.75V55.5218ZM827.759 85.0208H858.408V71.8812H841.729L844.849 67.7113L858.408 25.1827V12.0431H827.759V25.1827H844.539L841.309 29.6625L827.759 71.8812V85.0208ZM859.448 48.5319C859.448 61.1815 860.848 70.6712 863.668 76.991C866.478 83.3208 871.368 86.4807 878.318 86.4807C884.987 86.4807 889.817 83.3707 892.807 77.1509C895.797 70.9311 897.287 61.3915 897.287 48.5319C897.287 35.9523 895.867 26.4827 893.017 20.1229C890.167 13.7631 885.298 10.5932 878.418 10.5932C871.608 10.5932 866.738 13.6631 863.828 19.8129C860.908 25.9627 859.448 35.5323 859.448 48.5319ZM873.618 48.5319C873.618 39.8422 873.938 33.5424 874.558 29.6126C875.188 25.6827 876.438 23.7228 878.318 23.7228C880.328 23.7228 881.638 25.8226 882.228 30.0325C882.818 34.2323 883.108 40.4021 883.108 48.5319C883.108 57.4316 882.778 63.7915 882.118 67.6113C881.458 71.4312 880.188 73.3411 878.318 73.3411C876.438 73.3411 875.188 71.2612 874.558 67.0913C873.938 62.9215 873.618 56.7316 873.618 48.5319ZM915.637 85.0208H929.186V56.2517L931.266 57.5017L937.216 85.0208H952.635L944.406 57.5017L941.386 54.4717C946.526 51.4218 949.095 43.9121 949.095 31.9625C949.095 17.9229 942.596 10.9031 929.606 10.9031C924.596 10.9031 919.946 11.5232 915.637 12.7732V85.0208ZM931.376 24.0327C933.736 24.0327 934.916 27.5826 934.916 34.6724C934.916 38.8422 934.636 41.8622 934.086 43.7421C933.526 45.6121 932.446 46.552 930.856 46.552H929.186V24.4527C929.746 24.1727 930.466 24.0327 931.376 24.0327ZM954.935 85.0208H968.485V12.0431H954.935V85.0208Z"
            fill="white"
          />
        </svg>

        <div className={`row ${styles.row}`}>
          <div className={styles.block}>
            <img src="/assets/images/icon-agency.png" alt="" />

            <h4>Agentlik egalari tomonidan to‘liq SMM kursi.</h4>
            <p>
              Oson metodologiya va tajriba hamda bilimni oshirish uchun samarali
              topshiriqlar.
            </p>
          </div>
          <div className={styles.block}>
            <img src="/assets/images/icon-camera.png" alt="" />
            <h4>Kameraga mahorat bilan yondashish.</h4>
            <p>
              Nutqni shakllantirish, hissiyotlar bilan to‘g‘ri ishlash va o‘ziga
              ishonchni oshirish.
            </p>
          </div>
          <div className={styles.block}>
            <img src="/assets/images/icon-search.png" alt="" />

            <h4>Ishga joylashish va mijozlarni topishda yordam.</h4>
            <p>
              Nutqni shakllantirish, hissiyotlar bilan to‘g‘ri ishlash va o‘ziga
              ishonchni oshirish.
            </p>
          </div>
          <div className={styles.block}>
            <img src="/assets/images/icon-circle.png" alt="" />

            <h4>Chat GPT Midjourney</h4>
            <p>
              Talabalarimizga Chat GPT Pro va Midjourney xizmatlaridan bepul
              foydalanish imkoniyatini taqdim etamiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Main;
