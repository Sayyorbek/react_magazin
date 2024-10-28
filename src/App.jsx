import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import PM15 from "./assets/imgs tel/iphone 15 PM.webp";
import PM14 from "./assets/imgs tel/Iphone 14 PM.webp";
import PM13 from "./assets/imgs tel/iphone 13 PM.webp";
import PM12 from "./assets/imgs tel/iphone 12 PM.jpg";
import S24 from "./assets/imgs tel/Samsung s24.webp";
import S23 from "./assets/imgs tel/Samsung s23.webp";
import S22 from "./assets/imgs tel/Samsung s22.webp";
import S21 from "./assets/imgs tel/Samsung s21.jpg";
import Fudbolka from "./assets/imges kiyim/Fudbolka.webp";
import shortik from "./assets/imges kiyim/shortik.jpg";
import oqKuylak from "./assets/imges kiyim/Oq kuylak.jpg";
import qoraSHim from "./assets/imges kiyim/qora shim.webp";
import Telifon from "./faylPap/tavarPap/Telifon";
import Header from "./faylPap/headerPap/Header";
import { Route, Routes } from "react-router-dom";
import Product from "./faylPap/Product";
import { useState } from "react";
import Viu from "./faylPap/Viu";

import swiper1 from "./assets/1_swiper.jpg";
import swiper2 from "./assets/2_swiper.jpg";
import swiper3 from "./assets/3_swiper.jpg";
import swiper4 from "./assets/4_swiper.jpg";
import swiper5 from "./assets/5_swiper.jpg";
import swiper6 from "./assets/6_swiper.jpg";
import swiper7 from "./assets/7_swiper.jpg";
// import swiper8 from "./assets/8_swiper.jpg";
import swiper9 from "./assets/9_swiper.jpg";
import swiper10 from "./assets/10_swiper.jpg";



function App() {
  let [phone, setPhone] = useState([
    
    {
      rasm: S24,
      nomi: "Samsung s24 ultra",
      narxi: 1700000,
      id: 13,
      madenIn: "Amerika",
      ishlabChS: "20 09 2024",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: S23,
      nomi: "Samsung s23 ultra",
      narxi: 1500000,
      id: 14,
      madenIn: "Amerika",
      ishlabChS: "20 09 2023",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: S22,
      nomi: "Samsung s22 ultra",
      narxi: 1300000,
      id: 15,
      madenIn: "Amerika",
      ishlabChS: "20 09 2022",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: PM15,
      nomi: "Iphone 15 Pro Max",
      narxi: 2700000,
      id: 9,
      madenIn: "LLA",
      ishlabChS: "15 09 2023",
      xotirasi: "1TB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 0,
    },
    {
      rasm: PM14,
      nomi: "Iphone 14 Pro Max",
      narxi: 1400000,
      id: 10,
      madenIn: "LLA",
      ishlabChS: "15 09 2022",
      xotirasi: "258GB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: PM13,
      nomi: "Iphone 13 Pro Max",
      narxi: 900000,
      id: 11,
      madenIn: "LLA",
      ishlabChS: "15 09 2021",
      xotirasi: "258GB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: PM12,
      nomi: "Iphone 12 Pro Max",
      narxi: 7000000,
      id: 12,
      madenIn: "LLA",
      ishlabChS: "15 09 2020",
      xotirasi: "258GB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: S21,
      nomi: "Samsung s21 ultra",
      narxi: 1100000,
      id: 16,
      madenIn: "Amerika",
      ishlabChS: "20 09 2021",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: Fudbolka,
      nomi: "Fudbolk",
      narxi: 1000000,
      id: 17,
      madenIn: "Uzbekistan",
      ishlabChS: "12 08 2024",
      razmeri: "32,33,34,35,36",
      firma: "Trikatash",
      count: 1,
    },
    {
      rasm: shortik,
      nomi: "Shortik",
      narxi: 1000000,
      id: 18,
      madenIn: "Uzbekistan",
      ishlabChS: "12 08 2024",
      razmeri: "32,33,34,35,36",
      firma: "Trikatash",
      count: 1,
    },
    {
      rasm: oqKuylak,
      nomi: "Oq Ko`ylak",
      narxi: 1200000,
      id: 19,
      madenIn: "Uzbekistan",
      ishlabChS: "12 08 2024",
      razmeri: "32,33...44,45 ",
      firma: "Trikatash",
      count: 1,
    },
    {
      rasm: qoraSHim,
      nomi: "Qora Shim",
      narxi: 1300000,
      id: 20,
      madenIn: "Uzbekistan",
      ishlabChS: "12 08 2024",
      razmeri: "32,33...44,45 ",
      firma: "Trikatash",
      count: 1,
    },
    {
      rasm: PM15,
      nomi: "Iphone 15 Pro Max",
      narxi: 2700000,
      id: 21,
      madenIn: "LLA",
      ishlabChS: "15 09 2023",
      xotirasi: "1TB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 0,
    },
    {
      rasm: S23,
      nomi: "Samsung s23 ultra",
      narxi: 1500000,
      id: 22,
      madenIn: "Amerika",
      ishlabChS: "20 09 2023",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: PM12,
      nomi: "Iphone 12 Pro Max",
      narxi: 7000000,
      id: 23,
      madenIn: "LLA",
      ishlabChS: "15 09 2020",
      xotirasi: "258GB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 1,
    },

    {
      rasm: S24,
      nomi: "Samsung s24 ultra",
      narxi: 1700000,
      id: 24,
      madenIn: "Amerika",
      ishlabChS: "20 09 2024",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: S24,
      nomi: "Samsung s24 ultra",
      narxi: 1700000,
      id: 25,
      madenIn: "Amerika",
      ishlabChS: "20 09 2024",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: S23,
      nomi: "Samsung s23 ultra",
      narxi: 1500000,
      id: 26,
      madenIn: "Amerika",
      ishlabChS: "20 09 2023",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: S22,
      nomi: "Samsung s22 ultra",
      narxi: 1300000,
      id: 27,
      madenIn: "Amerika",
      ishlabChS: "20 09 2022",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: PM15,
      nomi: "Iphone 15 Pro Max",
      narxi: 2700000,
      id: 28,
      madenIn: "LLA",
      ishlabChS: "15 09 2023",
      xotirasi: "1TB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 0,
    },
    {
      rasm: PM14,
      nomi: "Iphone 14 Pro Max",
      narxi: 1400000,
      id: 29,
      madenIn: "LLA",
      ishlabChS: "15 09 2022",
      xotirasi: "258GB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: PM13,
      nomi: "Iphone 13 Pro Max",
      narxi: 900000,
      id: 30,
      madenIn: "LLA",
      ishlabChS: "15 09 2021",
      xotirasi: "258GB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: PM12,
      nomi: "Iphone 12 Pro Max",
      narxi: 7000000,
      id: 31,
      madenIn: "LLA",
      ishlabChS: "15 09 2020",
      xotirasi: "258GB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: S21,
      nomi: "Samsung s21 ultra",
      narxi: 1100000,
      id: 32,
      madenIn: "Amerika",
      ishlabChS: "20 09 2021",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: Fudbolka,
      nomi: "Fudbolk",
      narxi: 1000000,
      id: 33,
      madenIn: "Uzbekistan",
      ishlabChS: "12 08 2024",
      razmeri: "32,33,34,35,36",
      firma: "Trikatash",
      count: 1,
    },
    {
      rasm: shortik,
      nomi: "Shortik",
      narxi: 1000000,
      id: 34,
      madenIn: "Uzbekistan",
      ishlabChS: "12 08 2024",
      razmeri: "32,33,34,35,36",
      firma: "Trikatash",
      count: 1,
    },
    {
      rasm: oqKuylak,
      nomi: "Oq Ko`ylak",
      narxi: 1200000,
      id: 35,
      madenIn: "Uzbekistan",
      ishlabChS: "12 08 2024",
      razmeri: "32,33...44,45 ",
      firma: "Trikatash",
      count: 1,
    },
    {
      rasm: qoraSHim,
      nomi: "Qora Shim",
      narxi: 1300000,
      id: 36,
      madenIn: "Uzbekistan",
      ishlabChS: "12 08 2024",
      razmeri: "32,33...44,45 ",
      firma: "Trikatash",
      count: 1,
    },
    {
      rasm: PM15,
      nomi: "Iphone 15 Pro Max",
      narxi: 2700000,
      id: 37,
      madenIn: "LLA",
      ishlabChS: "15 09 2023",
      xotirasi: "1TB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 0,
    },
    {
      rasm: S23,
      nomi: "Samsung s23 ultra",
      narxi: 1500000,
      id: 38,
      madenIn: "Amerika",
      ishlabChS: "20 09 2023",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
    {
      rasm: PM12,
      nomi: "Iphone 12 Pro Max",
      narxi: 7000000,
      id: 39,
      madenIn: "LLA",
      ishlabChS: "15 09 2020",
      xotirasi: "258GB",
      firma: "Apple",
      malumot: "Zo`r tilifon",
      count: 1,
    },

    {
      rasm: S24,
      nomi: "Samsung s24 ultra",
      narxi: 1700000,
      id: 40,
      madenIn: "Amerika",
      ishlabChS: "20 09 2024",
      xotirasi: "258GB",
      firma: "Samsung",
      malumot: "Zo`r tilifon",
      count: 1,
    },
  ]);

  let [cart, setcart] = useState([]);

  function addtoCartFunc(obj, operator) {
    
    if (true) {
      alert(" tanlangan mahsulot Savatga qo`shildi")
    }
    let result = cart.find((item) => {
      return obj.id == item.id;
    });
    if (result) {
      setcart(
        cart.map((el) => {
          if (obj.id == el.id) {
            let inc = el.count + 1;

            let dec = el.count - 1;
            return { ...el, count: operator ==="+" ? inc : dec, subtotal: operator ==="+" ? inc * el.narxi :dec * el.narxi};
          } else {
            return el;
          }
        })
      );

    } else {
      setcart([...cart, { ...obj, count: 1, subtotal: obj.narxi }]);
    }
  }
  // ? yo`qotish

  function deleteHandler(id) {
    setcart(
      cart.filter((item) => {
        return id !== item.id;
      })
    );
  }
  
  
  return (

    <div className="App">
      <Header cart={cart} />
      <Swiper
    cssMode={true}
    navigation={true}
    pagination={true}
    mousewheel={true}
    keyboard={true}
    modules={[
      Navigation,
      Pagination,
      Mousewheel,
      Keyboard,
      Autoplay,
    ]}
    className="mySwiper"
    autoplay={{
      delay: 5000, // 5 soniya
      disableOnInteraction: true,
    }}
    loop={true}
    >
    <SwiperSlide>
      <img src={swiper1} alt="Slide 1 description" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={swiper2} alt="Slide 2 description" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={swiper3} alt="Slide 3 description" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={swiper4} alt="Slide 4 description" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={swiper5} alt="Slide 5 description" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={swiper6} alt="Slide 6 description" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={swiper7} alt="Slide 7 description" />
    </SwiperSlide>
    {/* <SwiperSlide>
      <img src={swiper8} alt="Slide 8 description" />
    </SwiperSlide> */}
    <SwiperSlide>
      <img src={swiper9} alt="Slide 9 description" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={swiper10} alt="Slide 10 description" />
    </SwiperSlide>
  </Swiper>
  
      <div className="tavar">

        <Routes>
          <Route
            path="/"
            element={<Telifon addtoCartFunc={addtoCartFunc} phone={phone} />}
          />
          <Route path="Viw/:id" element={<Viu phone={phone} />} />
          <Route
            path="product"
            element={<Product cart={cart} deleteHandler={deleteHandler} phone={phone} addtoCartFunc={addtoCartFunc} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
