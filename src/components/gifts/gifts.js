import React from "react";
import styles from "./gifts.module.css";

const Gifts = React.memo(() => {
  return (
    <header className={styles.gift}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className={styles.left}>
            <img src="/assets/images/iphone.png" alt="" />
          </div>
          <div className={styles.right}>
            <svg
              className={styles.title}
              width="663"
              height="172"
              viewBox="0 0 663 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.9175 127.959C41.9175 137.349 37.4577 142.039 28.528 142.039C23.0481 142.039 16.9483 139.779 10.2185 135.239L0.588867 163.648C7.63864 168.968 18.2783 171.628 32.5178 171.628C44.8874 171.628 54.6371 167.598 61.7568 159.538C68.8766 151.478 72.4364 139.539 72.4364 123.729C72.4364 113.24 70.4065 103.46 66.3366 94.3802C62.2668 85.3005 57.8069 78.2207 52.9471 73.1309C48.0972 68.0411 43.6374 62.6812 39.5675 57.0414C35.4976 51.4115 33.4577 46.2417 33.4577 41.5519C33.4577 34.0321 37.2176 30.2822 44.7374 30.2822C49.1172 30.2822 54.2771 31.8424 60.2269 34.9723L69.3866 7.74318C61.5569 3.04333 51.7772 0.693359 40.0376 0.693359C29.3879 0.693359 20.5482 3.82315 13.5084 10.0829C6.45866 16.3527 2.93877 27.2325 2.93877 42.722C2.93877 51.8017 4.26871 60.1013 6.92862 67.6111C9.58854 75.1308 12.8384 81.3505 16.6783 86.2804C20.5082 91.2102 24.3481 95.7903 28.178 100.01C32.0179 104.24 35.2578 108.7 37.9277 113.4C40.5876 118.089 41.9175 122.949 41.9175 127.959ZM326.258 18.7726C326.258 27.5423 328.998 33.1023 334.468 35.4422C333.218 40.922 330.558 45.3818 326.488 48.8317L332.828 60.8012C346.917 53.2915 353.957 40.7721 353.957 23.2327C353.957 8.99312 349.187 1.87325 339.638 1.87325C335.878 1.87325 332.708 3.43314 330.128 6.56304C327.548 9.69294 326.258 13.7628 326.258 18.7726ZM76.8964 86.1605C76.8964 114.65 80.0663 136.019 86.4061 150.258C92.7458 164.508 103.745 171.628 119.395 171.628C134.424 171.628 145.304 164.618 152.034 150.618C158.764 136.609 162.134 115.12 162.134 86.1605C162.134 57.8314 158.924 36.5022 152.504 22.1826C146.084 7.85311 135.124 0.693359 119.635 0.693359C104.295 0.693359 93.3358 7.62316 86.756 21.4727C80.1862 35.3322 76.8964 56.8915 76.8964 86.1605ZM108.835 86.1605C108.835 66.5912 109.535 52.3915 110.945 43.5418C112.355 34.7021 115.175 30.2822 119.395 30.2822C123.935 30.2822 126.875 35.0123 128.205 44.482C129.535 53.9516 130.195 67.8511 130.195 86.1605C130.195 106.2 129.455 120.519 127.965 129.129C126.485 137.739 123.625 142.039 119.395 142.039C115.175 142.039 112.355 137.349 110.945 127.959C109.535 118.559 108.835 104.63 108.835 86.1605ZM192.423 3.98329H155.324L188.893 169.048H215.662L249.941 3.98329H216.842L206.272 93.6703L204.632 123.969H203.692L202.282 93.6703L192.423 3.98329ZM284.689 101.89L297.839 105.18V136.409C295.809 140.169 292.989 142.039 289.389 142.039C283.91 142.039 280.16 137.539 278.12 128.539C276.09 119.539 275.07 105.41 275.07 86.1605C275.07 65.9712 276.2 51.6116 278.47 43.0718C280.74 34.5421 285.399 30.2822 292.439 30.2822C299.019 30.2822 305.279 31.8424 311.229 34.9723L316.858 7.50319C308.249 2.96334 298.309 0.693359 287.039 0.693359C271.86 0.693359 260.74 7.19314 253.7 20.1827C246.661 33.1723 243.131 55.1715 243.131 86.1605C243.131 116.53 246.501 138.369 253.231 151.668C259.96 164.978 270.92 171.628 286.099 171.628C300.499 171.628 312.319 166.068 321.558 154.958V82.8706H284.689V101.89ZM412.425 168.338H444.354L413.365 3.28312H385.426L354.667 168.338H384.716L389.176 134.059H407.965L412.425 168.338ZM396.926 72.3109L398.576 46.0119H399.746L401.386 72.0709L405.616 108.23H393.176L396.926 72.3109ZM512.452 138.759H476.763V3.98329H446.234V168.338H512.452V138.759ZM545.551 168.338H577.49L546.491 3.28312H518.552L487.793 168.338H517.852L522.312 134.059H541.091L545.551 168.338ZM530.061 72.3109L531.701 46.0119H532.871L534.521 72.0709L538.741 108.23H526.302L530.061 72.3109ZM579.36 168.338H609.889V103.54L614.589 106.35L627.968 168.338H662.717L644.168 106.35L637.358 99.54C648.948 92.6602 654.737 75.7508 654.737 48.8317C654.737 17.2127 640.098 1.4033 610.829 1.4033C599.559 1.4033 589.069 2.81322 579.36 5.62313V168.338ZM614.819 30.9824C620.138 30.9824 622.798 38.9721 622.798 54.9316C622.798 64.3213 622.178 71.131 620.918 75.3608C619.668 79.5907 617.249 81.7007 613.649 81.7007H609.889V31.9223C611.139 31.2923 612.779 30.9824 614.819 30.9824Z"
                fill="white"
              />
            </svg>

            <ul>
              <img src="/assets/images/iphone.png" alt="" />

              <li>iphone 16 Pro Max</li>
              <li>5 ta iphone 16</li>
              <li>O‘quvchilarimizdan biri mening SMM menejerim bo‘ladi!</li>
              <li>
                Shuningdek, SMM mutaxassisi uchun zarur bo‘lgan ko‘plab
                sovg‘alar!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Gifts;
