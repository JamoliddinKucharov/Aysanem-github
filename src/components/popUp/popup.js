import React, { useContext, useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import styles from "./popup.module.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "../../context/globalState";

const PopUp = React.memo(() => {

    const {
        setPopuphandler } = useContext(GlobalContext);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("uz");





    useEffect(() => {
        let isMounted = true;
        fetch("https://ipapi.co/json/")
            .then((response) => response.json())
            .then((data) => {
                if (isMounted && data && data.country_code) {
                    setCountryCode(data.country_code.toLowerCase());
                }
            })
            .catch((error) => console.error("Geolocation error:", error));
        return () => {
            isMounted = false;
        };
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name === "" || phone.length > 5) {
            toast.error("Ismingiz va telefon raqamingizni kiriting!");
        } else {
            const payload = {
                name,
                phone,
            };

            try {
                const response = await fetch("https://backend-aysanem.vercel.app/api/send-to-amocrm", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });

                if (response.ok) {
                    toast.success("Ma'lumotlar yuborildi! Tez orada siz bilan bog'lanamiz.");
                    setPopuphandler(false)
                } else {
                    toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.");
                }
            } catch (error) {
                console.error("Yuborish xatosi:", error);
                toast.error("Server bilan bog'lanib bo'lmadi.");
            }
        }
    };







    return (
        <>


            <div className={styles.popUp}>
                <div className={styles.title}>
                    <svg width="420" height="101" viewBox="0 0 420 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M85.4789 79.835C85.4789 79.835 85.4789 61.5726 85.4789 25.0478C85.4789 25.0478 87.3015 25.0478 90.9467 25.0478C90.9467 25.0478 90.9467 43.3102 90.9467 79.835C90.9467 79.835 89.1241 79.835 85.4789 79.835ZM101.231 79.835C101.231 79.835 101.231 66.3162 101.231 39.2787C101.231 39.2787 103.065 39.2787 106.735 39.2787C106.735 39.2787 106.735 41.0289 106.735 44.5293C110.066 40.3771 114.411 38.301 119.771 38.301C122.643 38.301 125.263 38.8442 127.628 39.9305C129.994 40.9927 131.974 42.5498 133.567 44.6017C134.871 46.3398 135.788 48.247 136.319 50.323C136.85 52.3991 137.116 55.1391 137.116 58.5429V79.835H131.648C131.648 79.835 131.648 72.7376 131.648 58.5429C131.648 55.815 131.418 53.6182 130.96 51.9525C130.525 50.2627 129.789 48.778 128.751 47.4986C126.458 44.7224 123.247 43.3343 119.119 43.3343C116.898 43.3343 114.858 43.793 112.999 44.7103C111.164 45.6277 109.716 46.9071 108.654 48.5487C107.954 49.6592 107.459 50.8904 107.169 52.2422C106.88 53.57 106.735 55.3322 106.735 57.529V79.835H101.231ZM143.163 67.8854C143.163 67.8854 144.961 67.8854 148.558 67.8854C148.703 70.396 149.439 72.3393 150.767 73.7153C152.095 75.0672 153.905 75.7431 156.199 75.7431C158.203 75.7431 159.844 75.0913 161.124 73.7877C162.403 72.46 163.043 70.7702 163.043 68.7182C163.043 66.8594 162.524 65.423 161.486 64.4091C160.472 63.3952 158.371 62.2364 155.185 60.9329C152.264 59.7017 150.49 58.9292 149.862 58.6154C149.258 58.3015 148.534 57.7584 147.689 56.9859C145.661 55.1029 144.648 52.6888 144.648 49.7437C144.648 46.4364 145.722 43.7085 147.87 41.56C150.043 39.3873 152.795 38.301 156.126 38.301C159.385 38.301 162.077 39.3149 164.201 41.3427C166.35 43.3705 167.473 46.0139 167.569 49.2729H161.993C161.848 47.3417 161.256 45.8691 160.218 44.8552C159.204 43.8413 157.816 43.3343 156.054 43.3343C154.437 43.3343 153.048 43.9016 151.89 45.0362C150.755 46.1709 150.188 47.5589 150.188 49.2005C150.188 51.518 151.455 53.3286 153.99 54.6321C156.911 55.8633 159.434 56.9255 161.558 57.8187C166.241 59.7741 168.583 63.2262 168.583 68.175C168.583 71.8927 167.436 74.9344 165.143 77.3002C162.85 79.6418 159.868 80.8127 156.199 80.8127C152.264 80.8127 149.114 79.6418 146.748 77.3002C144.406 74.9586 143.211 71.8203 143.163 67.8854ZM180.786 79.835C180.786 79.835 180.786 67.9698 180.786 44.2396C180.786 44.2396 177.877 44.2396 172.059 44.2396C172.059 44.2396 172.059 42.586 172.059 39.2787C172.059 39.2787 174.968 39.2787 180.786 39.2787C180.786 39.2787 180.786 34.5351 180.786 25.0478C180.786 25.0478 182.621 25.0478 186.29 25.0478C186.29 25.0478 186.29 29.7914 186.29 39.2787C186.29 39.2787 189.332 39.2787 195.415 39.2787C195.415 39.2787 195.415 40.9323 195.415 44.2396C195.415 44.2396 192.374 44.2396 186.29 44.2396C186.29 44.2396 186.29 56.1047 186.29 79.835C186.29 79.835 184.455 79.835 180.786 79.835ZM240.389 39.2787C240.389 39.2787 240.389 52.7975 240.389 79.835C240.389 79.835 238.555 79.835 234.885 79.835C234.885 79.835 234.885 77.4571 234.885 72.7014C232.737 75.5983 230.455 77.6744 228.041 78.9297C225.651 80.185 222.742 80.8127 219.314 80.8127C215.186 80.8127 211.457 79.9074 208.125 78.0968C204.818 76.2621 202.223 73.7395 200.34 70.5287C198.457 67.2939 197.516 63.6728 197.516 59.6655C197.516 55.6581 198.445 52.025 200.304 48.766C202.163 45.507 204.721 42.9481 207.98 41.0893C211.239 39.2304 214.873 38.301 218.88 38.301C222.429 38.301 225.47 38.9528 228.005 40.2564C230.564 41.5359 232.857 43.5999 234.885 46.4485V39.2787H240.389ZM218.808 43.3343C214.462 43.3343 210.757 44.9035 207.691 48.0418C204.625 51.18 203.092 54.9822 203.092 59.4482C203.092 64.0108 204.661 67.8733 207.799 71.0357C210.938 74.174 214.752 75.7431 219.242 75.7431C223.66 75.7431 227.365 74.1861 230.359 71.0719C233.376 67.9336 234.885 64.0591 234.885 59.4482C234.885 54.8373 233.352 50.999 230.286 47.9331C227.221 44.8673 223.394 43.3343 218.808 43.3343Z" fill="white" />
                        <path d="M248.789 80.835C248.789 80.835 248.789 62.5726 248.789 26.0478C248.789 26.0478 250.612 26.0478 254.257 26.0478C254.257 26.0478 254.257 42.6566 254.257 75.8741C254.257 75.8741 261.825 75.8741 276.961 75.8741C276.961 75.8741 276.961 77.5277 276.961 80.835C276.961 80.835 267.57 80.835 248.789 80.835ZM323.383 40.2787C323.383 40.2787 323.383 53.7975 323.383 80.835C323.383 80.835 321.549 80.835 317.879 80.835C317.879 80.835 317.879 78.4571 317.879 73.7014C315.731 76.5983 313.45 78.6744 311.036 79.9297C308.646 81.185 305.737 81.8127 302.309 81.8127C298.181 81.8127 294.451 80.9074 291.12 79.0968C287.812 77.2621 285.217 74.7395 283.334 71.5287C281.451 68.2939 280.51 64.6728 280.51 60.6655C280.51 56.6581 281.439 53.025 283.298 49.766C285.157 46.507 287.716 43.9481 290.975 42.0893C294.234 40.2304 297.867 39.301 301.874 39.301C305.423 39.301 308.465 39.9528 310.999 41.2564C313.558 42.5359 315.852 44.5999 317.879 47.4485V40.2787H323.383ZM301.802 44.3343C297.456 44.3343 293.751 45.9035 290.685 49.0418C287.619 52.18 286.086 55.9822 286.086 60.4482C286.086 65.0108 287.655 68.8733 290.794 72.0357C293.932 75.174 297.746 76.7431 302.236 76.7431C306.654 76.7431 310.36 75.1861 313.353 72.0719C316.371 68.9336 317.879 65.0591 317.879 60.4482C317.879 55.8373 316.346 51.999 313.281 48.9331C310.215 45.8673 306.388 44.3343 301.802 44.3343ZM374.151 26.0478C374.151 26.0478 374.151 44.3102 374.151 80.835C374.151 80.835 372.317 80.835 368.647 80.835C368.647 80.835 368.647 78.3847 368.647 73.4841C366.547 76.4293 364.29 78.5537 361.876 79.8573C359.486 81.1609 356.601 81.8127 353.221 81.8127C349.093 81.8127 345.339 80.8953 341.96 79.0606C338.604 77.2259 335.961 74.6912 334.029 71.4563C332.098 68.2215 331.133 64.6245 331.133 60.6655C331.133 56.6581 332.062 53.025 333.921 49.766C335.804 46.507 338.387 43.9481 341.67 42.0893C344.977 40.2304 348.659 39.301 352.714 39.301C359.208 39.301 364.519 41.7754 368.647 46.7243V26.0478H374.151ZM352.352 44.3343C348.007 44.3343 344.313 45.9155 341.272 49.078C338.23 52.2162 336.709 56.0305 336.709 60.5206C336.709 65.0832 338.278 68.9336 341.417 72.0719C344.579 75.1861 348.466 76.7431 353.076 76.7431C357.422 76.7431 361.139 75.1498 364.229 71.9633C367.319 68.7767 368.864 64.9384 368.864 60.4482C368.864 55.958 367.271 52.1559 364.085 49.0418C360.898 45.9035 356.987 44.3343 352.352 44.3343ZM388.563 95.0659C388.563 95.0659 390.772 89.8756 395.19 79.4952C395.19 79.4952 389.939 66.423 379.438 40.2787C379.438 40.2787 381.442 40.2787 385.449 40.2787C385.449 40.2787 389.734 51.0575 398.304 72.6151C398.304 72.6151 402.879 61.8363 412.028 40.2787C412.028 40.2787 413.971 40.2787 417.858 40.2787C417.858 40.2787 410.048 58.5411 394.429 95.0659C394.429 95.0659 392.474 95.0659 388.563 95.0659Z" fill="#F00050" />
                        <path d="M84.6916 96.5449C84.6916 96.5449 84.6916 93.0481 84.6916 86.0544C84.6916 86.0544 85.5098 86.0544 87.1461 86.0544C87.7794 86.0544 88.304 86.1029 88.72 86.2C89.1407 86.2971 89.5012 86.4519 89.8017 86.6646C90.0975 86.8818 90.3263 87.1753 90.4881 87.5451C90.6545 87.9149 90.7377 88.3263 90.7377 88.7793C90.7377 89.3016 90.643 89.7384 90.4534 90.0897C90.2685 90.4364 89.975 90.723 89.5729 90.9495C90.183 91.2084 90.6291 91.5435 90.9111 91.9549C91.193 92.3663 91.334 92.8932 91.334 93.5357C91.334 94.0766 91.23 94.5642 91.022 94.9987C90.814 95.4286 90.5251 95.7591 90.1553 95.9902C89.8225 96.189 89.4342 96.3323 88.9905 96.4201C88.5513 96.5033 87.9828 96.5449 87.2848 96.5449H84.6916ZM85.7386 95.595H87.1739C88.2139 95.595 88.972 95.4656 89.4481 95.2067C89.6977 95.0773 89.8964 94.867 90.0444 94.5758C90.1969 94.2799 90.2732 93.9518 90.2732 93.5912C90.2732 93.1243 90.1645 92.7268 89.9473 92.3986C89.7347 92.0658 89.4388 91.8393 89.0598 91.7191C88.6022 91.5851 87.9111 91.5181 86.9866 91.5181H85.7386V95.595ZM85.7386 90.5682H87.0213C87.4928 90.5682 87.8626 90.5497 88.1307 90.5127C88.4034 90.4711 88.6484 90.3994 88.8656 90.2978C89.1291 90.1776 89.3279 89.9881 89.4619 89.7292C89.6006 89.4703 89.6699 89.1583 89.6699 88.7932C89.6699 88.4835 89.6145 88.1992 89.5035 87.9403C89.3926 87.6815 89.2447 87.492 89.0598 87.3718C88.8656 87.2377 88.6091 87.143 88.2902 87.0875C87.9758 87.032 87.546 87.0043 87.0005 87.0043H85.7386V90.5682ZM100.57 88.7793C100.57 88.7793 100.57 91.3678 100.57 96.5449C100.57 96.5449 100.218 96.5449 99.5156 96.5449C99.5156 96.5449 99.5156 96.0896 99.5156 95.179C99.1043 95.7337 98.6674 96.1312 98.2052 96.3716C97.7476 96.6119 97.1906 96.7321 96.5342 96.7321C95.7438 96.7321 95.0296 96.5588 94.3917 96.2121C93.7585 95.8608 93.2615 95.3778 92.901 94.763C92.5405 94.1436 92.3602 93.4502 92.3602 92.6829C92.3602 91.9156 92.5381 91.2199 92.8941 90.5959C93.25 89.9719 93.74 89.4819 94.364 89.126C94.988 88.7701 95.6837 88.5921 96.451 88.5921C97.1305 88.5921 97.7129 88.7169 98.1983 88.9665C98.6882 89.2115 99.1274 89.6067 99.5156 90.1521V88.7793H100.57ZM96.4371 89.5559C95.6051 89.5559 94.8956 89.8563 94.3085 90.4572C93.7215 91.0581 93.428 91.7862 93.428 92.6413C93.428 93.5149 93.7284 94.2545 94.3293 94.8601C94.9302 95.461 95.6606 95.7614 96.5203 95.7614C97.3662 95.7614 98.0758 95.4633 98.6489 94.867C99.2267 94.2661 99.5156 93.5242 99.5156 92.6413C99.5156 91.7584 99.2221 91.0235 98.6351 90.4364C98.048 89.8494 97.3154 89.5559 96.4371 89.5559ZM102.351 96.5449C102.351 96.5449 102.351 93.9564 102.351 88.7793C102.351 88.7793 102.703 88.7793 103.405 88.7793C103.405 88.7793 103.405 89.1468 103.405 89.8817C103.609 89.4565 103.884 89.1422 104.23 88.9388C104.582 88.7354 105.039 88.6198 105.603 88.5921V89.6321C104.138 89.7708 103.405 90.5659 103.405 92.0173C103.405 92.0173 103.405 93.5265 103.405 96.5449C103.405 96.5449 103.054 96.5449 102.351 96.5449ZM106.706 96.5449C106.706 96.5449 106.706 93.0481 106.706 86.0544C106.706 86.0544 107.057 86.0544 107.76 86.0544C107.76 86.0544 107.76 88.5343 107.76 93.4941C107.76 93.4941 108.966 91.9225 111.379 88.7793C111.379 88.7793 111.809 88.7793 112.669 88.7793C112.669 88.7793 111.661 90.0805 109.646 92.6829C109.646 92.6829 110.72 93.9702 112.87 96.5449C112.87 96.5449 112.433 96.5449 111.559 96.5449C111.559 96.5449 110.7 95.5072 108.98 93.4317C108.98 93.4317 108.573 93.9356 107.76 94.9433C107.76 94.9433 107.76 95.4771 107.76 96.5449C107.76 96.5449 107.408 96.5449 106.706 96.5449ZM121.343 88.7793C121.343 88.7793 121.343 91.3678 121.343 96.5449C121.343 96.5449 120.991 96.5449 120.289 96.5449C120.289 96.5449 120.289 96.0896 120.289 95.179C119.877 95.7337 119.44 96.1312 118.978 96.3716C118.521 96.6119 117.964 96.7321 117.307 96.7321C116.517 96.7321 115.803 96.5588 115.165 96.2121C114.532 95.8608 114.035 95.3778 113.674 94.763C113.314 94.1436 113.133 93.4502 113.133 92.6829C113.133 91.9156 113.311 91.2199 113.667 90.5959C114.023 89.9719 114.513 89.4819 115.137 89.126C115.761 88.7701 116.457 88.5921 117.224 88.5921C117.904 88.5921 118.486 88.7169 118.971 88.9665C119.461 89.2115 119.9 89.6067 120.289 90.1521V88.7793H121.343ZM117.21 89.5559C116.378 89.5559 115.669 89.8563 115.082 90.4572C114.495 91.0581 114.201 91.7862 114.201 92.6413C114.201 93.5149 114.501 94.2545 115.102 94.8601C115.703 95.461 116.434 95.7614 117.293 95.7614C118.139 95.7614 118.849 95.4633 119.422 94.867C120 94.2661 120.289 93.5242 120.289 92.6413C120.289 91.7584 119.995 91.0235 119.408 90.4364C118.821 89.8494 118.088 89.5559 117.21 89.5559ZM123.125 96.5449C123.125 96.5449 123.125 93.9564 123.125 88.7793C123.125 88.7793 123.476 88.7793 124.178 88.7793C124.178 88.7793 124.178 89.0774 124.178 89.6737C124.484 89.2808 124.8 89.0035 125.128 88.8417C125.461 88.6753 125.873 88.5921 126.363 88.5921C126.954 88.5921 127.449 88.71 127.846 88.9457C128.248 89.1768 128.602 89.5559 128.907 90.0828C129.231 89.5651 129.607 89.1884 130.037 88.9526C130.472 88.7123 130.99 88.5921 131.59 88.5921C132.117 88.5921 132.594 88.6915 133.019 88.8902C133.449 89.089 133.8 89.3733 134.073 89.7431C134.461 90.27 134.655 90.998 134.655 91.9271V96.5449H133.601V92.045C133.601 91.2453 133.446 90.6491 133.137 90.2562C132.966 90.0389 132.739 89.8679 132.457 89.7431C132.175 89.6183 131.87 89.5559 131.542 89.5559C131.168 89.5559 130.819 89.6414 130.495 89.8124C130.176 89.9788 129.924 90.2076 129.739 90.4988C129.522 90.8455 129.413 91.3609 129.413 92.045V96.5449H128.366V92.0173C128.366 91.2176 128.191 90.6213 127.839 90.2284C127.437 89.78 126.913 89.5559 126.265 89.5559C125.614 89.5559 125.103 89.7731 124.733 90.2076C124.363 90.6421 124.178 91.2453 124.178 92.0173V96.5449C124.178 96.5449 123.827 96.5449 123.125 96.5449ZM140.271 88.5921C141.025 88.5921 141.704 88.7701 142.31 89.126C142.92 89.4773 143.396 89.9649 143.738 90.589C144.085 91.213 144.258 91.911 144.258 92.6829C144.258 93.8478 143.884 94.8138 143.135 95.5812C142.386 96.3485 141.441 96.7321 140.299 96.7321C139.518 96.7321 138.811 96.5565 138.177 96.2052C137.544 95.8539 137.047 95.3685 136.687 94.7491C136.331 94.1297 136.153 93.4364 136.153 92.669C136.153 91.4903 136.541 90.5173 137.318 89.75C138.094 88.9781 139.079 88.5921 140.271 88.5921ZM140.188 89.5559C139.338 89.5559 138.63 89.854 138.066 90.4503C137.502 91.042 137.221 91.7862 137.221 92.6829C137.221 93.5704 137.509 94.3054 138.087 94.8878C138.665 95.4702 139.393 95.7614 140.271 95.7614C141.126 95.7614 141.827 95.4748 142.372 94.9017C142.922 94.3239 143.197 93.5889 143.197 92.6968C143.197 91.7815 142.915 91.0304 142.351 90.4434C141.787 89.8517 141.066 89.5559 140.188 89.5559ZM145.756 96.5449C145.756 96.5449 145.756 93.0481 145.756 86.0544C145.756 86.0544 146.107 86.0544 146.81 86.0544C146.81 86.0544 146.81 89.5512 146.81 96.5449C146.81 96.5449 146.458 96.5449 145.756 96.5449ZM160.476 86.0544C160.476 86.0544 160.476 89.5512 160.476 96.5449C160.476 96.5449 160.125 96.5449 159.422 96.5449C159.422 96.5449 159.422 96.0757 159.422 95.1374C159.02 95.7013 158.588 96.1081 158.125 96.3577C157.668 96.6073 157.115 96.7321 156.468 96.7321C155.678 96.7321 154.959 96.5565 154.312 96.2052C153.669 95.8539 153.163 95.3685 152.793 94.7491C152.424 94.1297 152.239 93.441 152.239 92.6829C152.239 91.9156 152.417 91.2199 152.773 90.5959C153.133 89.9719 153.628 89.4819 154.256 89.126C154.89 88.7701 155.595 88.5921 156.371 88.5921C157.615 88.5921 158.631 89.0659 159.422 90.0135V86.0544H160.476ZM156.302 89.5559C155.47 89.5559 154.763 89.8586 154.18 90.4642C153.598 91.0651 153.306 91.7954 153.306 92.6552C153.306 93.5288 153.607 94.2661 154.208 94.867C154.813 95.4633 155.558 95.7614 156.44 95.7614C157.272 95.7614 157.984 95.4563 158.576 94.8462C159.168 94.236 159.464 93.5011 159.464 92.6413C159.464 91.7815 159.158 91.0535 158.548 90.4572C157.938 89.8563 157.189 89.5559 156.302 89.5559ZM170.169 88.7793C170.169 88.7793 170.169 91.3678 170.169 96.5449C170.169 96.5449 169.818 96.5449 169.115 96.5449C169.115 96.5449 169.115 96.0896 169.115 95.179C168.704 95.7337 168.267 96.1312 167.805 96.3716C167.347 96.6119 166.79 96.7321 166.134 96.7321C165.343 96.7321 164.629 96.5588 163.991 96.2121C163.358 95.8608 162.861 95.3778 162.5 94.763C162.14 94.1436 161.96 93.4502 161.96 92.6829C161.96 91.9156 162.138 91.2199 162.493 90.5959C162.849 89.9719 163.339 89.4819 163.963 89.126C164.587 88.7701 165.283 88.5921 166.05 88.5921C166.73 88.5921 167.312 88.7169 167.798 88.9665C168.288 89.2115 168.727 89.6067 169.115 90.1521V88.7793H170.169ZM166.037 89.5559C165.205 89.5559 164.495 89.8563 163.908 90.4572C163.321 91.0581 163.027 91.7862 163.027 92.6413C163.027 93.5149 163.328 94.2545 163.929 94.8601C164.53 95.461 165.26 95.7614 166.12 95.7614C166.966 95.7614 167.675 95.4633 168.248 94.867C168.826 94.2661 169.115 93.5242 169.115 92.6413C169.115 91.7584 168.822 91.0235 168.234 90.4364C167.647 89.8494 166.915 89.5559 166.037 89.5559ZM171.951 96.5449C171.951 96.5449 171.951 93.9564 171.951 88.7793C171.951 88.7793 172.302 88.7793 173.005 88.7793C173.005 88.7793 173.005 89.1468 173.005 89.8817C173.208 89.4565 173.483 89.1422 173.83 88.9388C174.181 88.7354 174.639 88.6198 175.203 88.5921V89.6321C173.737 89.7708 173.005 90.5659 173.005 92.0173C173.005 92.0173 173.005 93.5265 173.005 96.5449C173.005 96.5449 172.654 96.5449 171.951 96.5449ZM179.654 88.5921C180.408 88.5921 181.087 88.7701 181.693 89.126C182.303 89.4773 182.779 89.9649 183.121 90.589C183.468 91.213 183.641 91.911 183.641 92.6829C183.641 93.8478 183.267 94.8138 182.518 95.5812C181.769 96.3485 180.824 96.7321 179.682 96.7321C178.901 96.7321 178.193 96.5565 177.56 96.2052C176.927 95.8539 176.43 95.3685 176.069 94.7491C175.714 94.1297 175.536 93.4364 175.536 92.669C175.536 91.4903 175.924 90.5173 176.7 89.75C177.477 88.9781 178.462 88.5921 179.654 88.5921ZM179.571 89.5559C178.72 89.5559 178.013 89.854 177.449 90.4503C176.885 91.042 176.603 91.7862 176.603 92.6829C176.603 93.5704 176.892 94.3054 177.47 94.8878C178.048 95.4702 178.776 95.7614 179.654 95.7614C180.509 95.7614 181.21 95.4748 181.755 94.9017C182.305 94.3239 182.58 93.5889 182.58 92.6968C182.58 91.7815 182.298 91.0304 181.734 90.4434C181.17 89.8517 180.449 89.5559 179.571 89.5559ZM185.139 96.5449C185.139 96.5449 185.139 93.9564 185.139 88.7793C185.139 88.7793 185.49 88.7793 186.193 88.7793C186.193 88.7793 186.193 89.0774 186.193 89.6737C186.498 89.2808 186.814 89.0035 187.142 88.8417C187.475 88.6753 187.887 88.5921 188.377 88.5921C188.968 88.5921 189.463 88.71 189.86 88.9457C190.263 89.1768 190.616 89.5559 190.921 90.0828C191.245 89.5651 191.622 89.1884 192.051 88.9526C192.486 88.7123 193.004 88.5921 193.605 88.5921C194.131 88.5921 194.608 88.6915 195.033 88.8902C195.463 89.089 195.814 89.3733 196.087 89.7431C196.475 90.27 196.669 90.998 196.669 91.9271V96.5449H195.615V92.045C195.615 91.2453 195.46 90.6491 195.151 90.2562C194.98 90.0389 194.753 89.8679 194.471 89.7431C194.189 89.6183 193.884 89.5559 193.556 89.5559C193.182 89.5559 192.833 89.6414 192.509 89.8124C192.19 89.9788 191.938 90.2076 191.753 90.4988C191.536 90.8455 191.427 91.3609 191.427 92.045V96.5449H190.38V92.0173C190.38 91.2176 190.205 90.6213 189.853 90.2284C189.451 89.78 188.927 89.5559 188.28 89.5559C187.628 89.5559 187.117 89.7731 186.747 90.2076C186.377 90.6421 186.193 91.2453 186.193 92.0173V96.5449C186.193 96.5449 185.841 96.5449 185.139 96.5449ZM206.376 88.7793C206.376 88.7793 206.376 91.3678 206.376 96.5449C206.376 96.5449 206.025 96.5449 205.322 96.5449C205.322 96.5449 205.322 96.0896 205.322 95.179C204.911 95.7337 204.474 96.1312 204.012 96.3716C203.554 96.6119 202.997 96.7321 202.341 96.7321C201.55 96.7321 200.836 96.5588 200.198 96.2121C199.565 95.8608 199.068 95.3778 198.708 94.763C198.347 94.1436 198.167 93.4502 198.167 92.6829C198.167 91.9156 198.345 91.2199 198.701 90.5959C199.057 89.9719 199.547 89.4819 200.171 89.126C200.795 88.7701 201.49 88.5921 202.258 88.5921C202.937 88.5921 203.52 88.7169 204.005 88.9665C204.495 89.2115 204.934 89.6067 205.322 90.1521V88.7793H206.376ZM202.244 89.5559C201.412 89.5559 200.702 89.8563 200.115 90.4572C199.528 91.0581 199.235 91.7862 199.235 92.6413C199.235 93.5149 199.535 94.2545 200.136 94.8601C200.737 95.461 201.467 95.7614 202.327 95.7614C203.173 95.7614 203.882 95.4633 204.456 94.867C205.033 94.2661 205.322 93.5242 205.322 92.6413C205.322 91.7584 205.029 91.0235 204.442 90.4364C203.855 89.8494 203.122 89.5559 202.244 89.5559ZM209.108 96.5449C209.108 96.5449 209.108 94.273 209.108 89.7292C209.108 89.7292 208.551 89.7292 207.437 89.7292C207.437 89.7292 207.437 89.4126 207.437 88.7793C207.437 88.7793 207.994 88.7793 209.108 88.7793C209.108 88.7793 209.108 87.871 209.108 86.0544C209.108 86.0544 209.459 86.0544 210.162 86.0544C210.162 86.0544 210.162 86.9627 210.162 88.7793C210.162 88.7793 210.744 88.7793 211.909 88.7793C211.909 88.7793 211.909 89.0959 211.909 89.7292C211.909 89.7292 211.327 89.7292 210.162 89.7292C210.162 89.7292 210.162 92.0011 210.162 96.5449C210.162 96.5449 209.811 96.5449 209.108 96.5449ZM220.736 88.7793C220.736 88.7793 220.736 90.9033 220.736 95.1513C220.736 95.914 220.68 96.5264 220.569 96.9887C220.463 97.4509 220.278 97.8577 220.015 98.209C219.682 98.6527 219.243 98.9948 218.697 99.2352C218.152 99.4755 217.539 99.5957 216.86 99.5957C215.88 99.5957 215.055 99.3553 214.384 98.8746C213.719 98.3939 213.243 97.6982 212.956 96.7876H213.975C214.146 97.0927 214.285 97.3215 214.391 97.474C214.502 97.6266 214.629 97.7675 214.773 97.897C215.318 98.3869 216.005 98.6319 216.832 98.6319C217.438 98.6319 217.962 98.5094 218.406 98.2645C218.85 98.0195 219.173 97.6728 219.377 97.2244C219.585 96.7853 219.689 96.2075 219.689 95.491V94.971C219.384 95.5673 218.988 96.011 218.503 96.3022C218.018 96.5888 217.424 96.7321 216.721 96.7321C216.157 96.7321 215.623 96.6281 215.119 96.4201C214.62 96.2121 214.19 95.9301 213.83 95.5742C213.474 95.2137 213.192 94.7838 212.984 94.2846C212.776 93.7854 212.672 93.2561 212.672 92.6968C212.672 91.9202 212.843 91.2199 213.185 90.5959C213.527 89.9673 213.999 89.4773 214.599 89.126C215.205 88.7701 215.882 88.5921 216.631 88.5921C217.292 88.5921 217.87 88.7169 218.364 88.9665C218.859 89.2161 219.3 89.6113 219.689 90.1521V88.7793H220.736ZM216.617 89.5559C215.799 89.5559 215.115 89.8494 214.565 90.4364C214.015 91.0188 213.74 91.7446 213.74 92.6136C213.74 93.5149 214.022 94.2661 214.586 94.867C215.154 95.4633 215.866 95.7614 216.721 95.7614C217.567 95.7614 218.272 95.4587 218.836 94.8531C219.404 94.243 219.689 93.4872 219.689 92.5858C219.689 91.7122 219.397 90.9888 218.815 90.4156C218.233 89.8424 217.5 89.5559 216.617 89.5559ZM230.533 88.7793C230.533 88.7793 230.533 91.3678 230.533 96.5449C230.533 96.5449 230.182 96.5449 229.479 96.5449C229.479 96.5449 229.479 96.0896 229.479 95.179C229.068 95.7337 228.631 96.1312 228.168 96.3716C227.711 96.6119 227.154 96.7321 226.497 96.7321C225.707 96.7321 224.993 96.5588 224.355 96.2121C223.722 95.8608 223.225 95.3778 222.864 94.763C222.504 94.1436 222.323 93.4502 222.323 92.6829C222.323 91.9156 222.501 91.2199 222.857 90.5959C223.213 89.9719 223.703 89.4819 224.327 89.126C224.951 88.7701 225.647 88.5921 226.414 88.5921C227.094 88.5921 227.676 88.7169 228.162 88.9665C228.652 89.2115 229.091 89.6067 229.479 90.1521V88.7793H230.533ZM226.4 89.5559C225.568 89.5559 224.859 89.8563 224.272 90.4572C223.685 91.0581 223.391 91.7862 223.391 92.6413C223.391 93.5149 223.692 94.2545 224.293 94.8601C224.894 95.461 225.624 95.7614 226.484 95.7614C227.33 95.7614 228.039 95.4633 228.612 94.867C229.19 94.2661 229.479 93.5242 229.479 92.6413C229.479 91.7584 229.185 91.0235 228.598 90.4364C228.011 89.8494 227.279 89.5559 226.4 89.5559ZM244.15 88.7793C244.15 88.7793 244.15 92.2761 244.15 99.2698C244.15 99.2698 243.799 99.2698 243.097 99.2698C243.097 99.2698 243.097 97.9155 243.097 95.2067C242.754 95.7013 242.325 96.0804 241.807 96.3438C241.294 96.6027 240.716 96.7321 240.073 96.7321C239.311 96.7321 238.613 96.5542 237.98 96.1982C237.351 95.8423 236.856 95.3547 236.496 94.7353C236.135 94.1112 235.955 93.4225 235.955 92.669C235.955 91.9063 236.133 91.2153 236.489 90.5959C236.849 89.9719 237.342 89.4819 237.966 89.126C238.59 88.7701 239.283 88.5921 240.046 88.5921C240.716 88.5921 241.31 88.7215 241.828 88.9804C242.35 89.2392 242.773 89.616 243.097 90.1105V88.7793H244.15ZM240.06 89.5559C239.195 89.5559 238.472 89.8563 237.889 90.4572C237.312 91.0535 237.023 91.7954 237.023 92.6829C237.023 93.5612 237.314 94.2938 237.896 94.8809C238.483 95.4679 239.214 95.7614 240.087 95.7614C240.961 95.7614 241.691 95.4656 242.278 94.8739C242.87 94.2776 243.166 93.5427 243.166 92.669C243.166 91.7815 242.87 91.042 242.278 90.4503C241.687 89.854 240.947 89.5559 240.06 89.5559ZM253.844 88.7793C253.844 88.7793 253.844 91.3678 253.844 96.5449C253.844 96.5449 253.492 96.5449 252.79 96.5449C252.79 96.5449 252.79 96.0896 252.79 95.179C252.378 95.7337 251.941 96.1312 251.479 96.3716C251.022 96.6119 250.465 96.7321 249.808 96.7321C249.018 96.7321 248.304 96.5588 247.666 96.2121C247.032 95.8608 246.536 95.3778 246.175 94.763C245.814 94.1436 245.634 93.4502 245.634 92.6829C245.634 91.9156 245.812 91.2199 246.168 90.5959C246.524 89.9719 247.014 89.4819 247.638 89.126C248.262 88.7701 248.958 88.5921 249.725 88.5921C250.405 88.5921 250.987 88.7169 251.472 88.9665C251.962 89.2115 252.401 89.6067 252.79 90.1521V88.7793H253.844ZM249.711 89.5559C248.879 89.5559 248.17 89.8563 247.583 90.4572C246.996 91.0581 246.702 91.7862 246.702 92.6413C246.702 93.5149 247.002 94.2545 247.603 94.8601C248.204 95.461 248.935 95.7614 249.794 95.7614C250.64 95.7614 251.35 95.4633 251.923 94.867C252.501 94.2661 252.79 93.5242 252.79 92.6413C252.79 91.7584 252.496 91.0235 251.909 90.4364C251.322 89.8494 250.589 89.5559 249.711 89.5559ZM263.564 86.0544C263.564 86.0544 263.564 89.5512 263.564 96.5449C263.564 96.5449 263.213 96.5449 262.511 96.5449C262.511 96.5449 262.511 96.0757 262.511 95.1374C262.108 95.7013 261.676 96.1081 261.214 96.3577C260.756 96.6073 260.204 96.7321 259.557 96.7321C258.766 96.7321 258.048 96.5565 257.401 96.2052C256.758 95.8539 256.252 95.3685 255.882 94.7491C255.512 94.1297 255.327 93.441 255.327 92.6829C255.327 91.9156 255.505 91.2199 255.861 90.5959C256.222 89.9719 256.716 89.4819 257.345 89.126C257.978 88.7701 258.683 88.5921 259.46 88.5921C260.703 88.5921 261.72 89.0659 262.511 90.0135V86.0544H263.564ZM259.39 89.5559C258.558 89.5559 257.851 89.8586 257.269 90.4642C256.686 91.0651 256.395 91.7954 256.395 92.6552C256.395 93.5288 256.696 94.2661 257.297 94.867C257.902 95.4633 258.646 95.7614 259.529 95.7614C260.361 95.7614 261.073 95.4563 261.665 94.8462C262.256 94.236 262.552 93.5011 262.552 92.6413C262.552 91.7815 262.247 91.0535 261.637 90.4572C261.027 89.8563 260.278 89.5559 259.39 89.5559ZM273.258 88.7793C273.258 88.7793 273.258 91.3678 273.258 96.5449C273.258 96.5449 272.906 96.5449 272.204 96.5449C272.204 96.5449 272.204 96.0896 272.204 95.179C271.792 95.7337 271.356 96.1312 270.893 96.3716C270.436 96.6119 269.879 96.7321 269.222 96.7321C268.432 96.7321 267.718 96.5588 267.08 96.2121C266.447 95.8608 265.95 95.3778 265.589 94.763C265.229 94.1436 265.048 93.4502 265.048 92.6829C265.048 91.9156 265.226 91.2199 265.582 90.5959C265.938 89.9719 266.428 89.4819 267.052 89.126C267.676 88.7701 268.372 88.5921 269.139 88.5921C269.819 88.5921 270.401 88.7169 270.886 88.9665C271.376 89.2115 271.815 89.6067 272.204 90.1521V88.7793H273.258ZM269.125 89.5559C268.293 89.5559 267.584 89.8563 266.997 90.4572C266.41 91.0581 266.116 91.7862 266.116 92.6413C266.116 93.5149 266.416 94.2545 267.017 94.8601C267.618 95.461 268.349 95.7614 269.208 95.7614C270.054 95.7614 270.764 95.4633 271.337 94.867C271.915 94.2661 272.204 93.5242 272.204 92.6413C272.204 91.7584 271.91 91.0235 271.323 90.4364C270.736 89.8494 270.003 89.5559 269.125 89.5559ZM275.04 96.5449C275.04 96.5449 275.04 93.9564 275.04 88.7793C275.04 88.7793 275.391 88.7793 276.093 88.7793C276.093 88.7793 276.093 89.0774 276.093 89.6737C276.399 89.2808 276.715 89.0035 277.043 88.8417C277.376 88.6753 277.788 88.5921 278.278 88.5921C278.869 88.5921 279.364 88.71 279.761 88.9457C280.164 89.1768 280.517 89.5559 280.822 90.0828C281.146 89.5651 281.522 89.1884 281.952 88.9526C282.387 88.7123 282.905 88.5921 283.505 88.5921C284.032 88.5921 284.509 88.6915 284.934 88.8902C285.364 89.089 285.715 89.3733 285.988 89.7431C286.376 90.27 286.57 90.998 286.57 91.9271V96.5449H285.516V92.045C285.516 91.2453 285.361 90.6491 285.052 90.2562C284.881 90.0389 284.654 89.8679 284.372 89.7431C284.09 89.6183 283.785 89.5559 283.457 89.5559C283.083 89.5559 282.734 89.6414 282.41 89.8124C282.091 89.9788 281.839 90.2076 281.654 90.4988C281.437 90.8455 281.328 91.3609 281.328 92.045V96.5449H280.281V92.0173C280.281 91.2176 280.106 90.6213 279.754 90.2284C279.352 89.78 278.828 89.5559 278.18 89.5559C277.529 89.5559 277.018 89.7731 276.648 90.2076C276.278 90.6421 276.093 91.2453 276.093 92.0173V96.5449C276.093 96.5449 275.742 96.5449 275.04 96.5449Z" fill="#F00050" />
                        <path d="M21.51 22.915H51.65C57.52 22.915 62.86 25.315 66.73 29.185C70.59 33.055 72.99 38.395 72.99 44.265V74.395C72.99 80.275 70.59 85.605 66.73 89.475C62.86 93.345 57.52 95.745 51.65 95.745H21.51C15.64 95.745 10.3 93.345 6.43999 89.475C2.56999 85.605 0.169983 80.275 0.169983 74.395V44.265C0.169983 38.395 2.56999 33.055 6.43999 29.185C10.3 25.315 15.64 22.915 21.51 22.915ZM51.65 28.465H21.51C17.17 28.465 13.22 30.245 10.36 33.105C7.48999 35.965 5.70998 39.925 5.70998 44.265V74.395C5.70998 78.745 7.48999 82.695 10.36 85.555C13.22 88.415 17.17 90.195 21.51 90.195H51.65C55.99 90.195 59.94 88.425 62.81 85.555C65.67 82.695 67.45 78.745 67.45 74.395V44.265C67.45 39.925 65.67 35.965 62.81 33.105C59.94 30.245 55.99 28.465 51.65 28.465Z" fill="#F00050" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M36.58 75.1347C32.36 71.7747 28.05 68.3447 24.52 64.2647C21.82 61.1447 18.4 56.2347 18.74 51.8847C18.91 49.6547 20.21 47.2447 22.34 46.3447C25.46 45.0247 28.81 46.2647 30.61 49.0747C31.17 49.9447 31.63 50.9847 32.13 51.9047L36.57 60.2047L36.58 60.1847L36.59 60.2047L41.04 51.9047C41.53 50.9847 41.99 49.9447 42.55 49.0747C44.35 46.2647 47.7 45.0247 50.82 46.3447C52.95 47.2447 54.26 49.6547 54.43 51.8847C54.76 56.2347 51.35 61.1447 48.64 64.2647C45.12 68.3447 40.81 71.7747 36.58 75.1347ZM36.56 49.5347C35.94 48.3747 35.47 47.3247 34.85 46.3547C31.66 41.3947 25.67 39.4847 20.39 41.7047C16.54 43.3347 14.04 47.3347 13.72 51.5047C13.27 57.4247 17.04 63.3047 20.71 67.5547C24.93 72.4447 30.08 76.3647 35.09 80.3747C35.29 80.5447 35.5 80.7147 35.7 80.8747C36.03 81.1447 36.31 81.2447 36.58 81.2347C36.85 81.2447 37.13 81.1447 37.46 80.8747C37.67 80.7147 37.87 80.5447 38.08 80.3747C43.08 76.3647 48.23 72.4447 52.45 67.5547C56.13 63.3047 59.9 57.4247 59.44 51.5047C59.12 47.3347 56.63 43.3347 52.77 41.7047C47.49 39.4847 41.5 41.3947 38.32 46.3547C37.7 47.3247 37.22 48.3747 36.6 49.5347C36.6 49.5147 36.59 49.5047 36.58 49.4947C36.58 49.5047 36.57 49.5147 36.56 49.5347Z" fill="#F00050" />
                    </svg>
                </div>

                <form onSubmit={handleSubmit}  >
                    <input type="text" name="name" id="name" placeholder="Ismingiz" value={name} onChange={(e) => setName(e.target.value)} />
                    <PhoneInput
                        country={countryCode}
                        name="phone"
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
        </>


    );
});

export default PopUp;
