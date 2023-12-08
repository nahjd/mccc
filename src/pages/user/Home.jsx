import React from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import "./../../style/sass/home.scss";

export default () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{
          width: "65%",
          height: "80%",
          margin: "40px auto",
          borderRadius: "10px",
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://s7d1.scene7.com/is/image/mcdonalds/paddington-happymeal-cs:accessible-carousel-desktop?resmode=sharp2"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://www.mcdonalds.com/content/dam/sites/uk/nfl/hero/festive-food-cs.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://s7d1.scene7.com/is/image/mcdonalds/change-a-little-change-a-lot-cs:accessible-carousel-desktop?resmode=sharp2"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="container">
        <div className="mc-card">
          <section className="section-info">
            <div className="mc-cardimg">
              <img
                src="https://mcdonalds.az/images/392d23f9e55ac4056d2a56184b1d5213.jpg"
                alt=""
              />
            </div>
            <div className="mc-text">
              <h2>
                “McDonald’s”dan yemək sifarişləri “Wolt” vasitəsilə çatdırılma
                ilə.
              </h2>
              <p style={{ marginLeft: 110, marginBottom: 20 }}>
                “McDonald’s”dan yeməklərin “Wolt” vasitəsilə çatdırılması.
              </p>
              <button className="mac-btn">Ətraflı</button>
            </div>
          </section>

          <section className="section-info2">
            <div className="mc-text2">
              <h2>“McDonald’s”ın mobil tətbiqini yükləyin.</h2>

              <p style={{ marginLeft: 110 }}>
                "McDonald's" tətbiqində xüsusi təkliflər.
              </p>
              <br />
              <br />
              <button className="mac-btn2">Ətraflı</button>
            </div>
            <div className="mc-cardimg2">
              <img
                src="https://mcdonalds.az/images/36d465453ba9d421a026d608495fb2e3.png"
                alt=""
              />
            </div>
          </section>
          {/* ===================================================================================== */}
          <section className="section-card">
            <div className="card1">
              <div className="mc-card2">
                <img
                  src="https://mcdonalds.az/images/36d465453ba9d421a026d608495fb2e3.png"
                  alt=""
                />

                <h2 className="cardtext">E-məktublarımıza abunə olun</h2>
                <p style={{ marginLeft: 110 }}>
                  “McDonald’s”dan elektron məktublar almaq üçün qeydiyyatdan
                  keçin.
                </p>
                <br />
                <button className="card-btn1">Ətraflı</button>
              </div>
              {/* ======================================================================================== */}
              <div className="mc-card3">
                <img
                  src="https://mcdonalds.az/images/84b30fedac58f3e1433a3da5d0c945a9.png"
                  alt=""
                />

                <h2 className="cardtext2">“McDonald's” ailəsinə qoşulun</h2>
                <p style={{ marginLeft: 110 }}>
                  “McDonald’s”dan elektron məktublar almaq üçün qeydiyyatdan
                  keçin.
                </p>
                <br />
                <button className="card-btn2">Ətraflı</button>
              </div>
              {/* ================================================================================================ */}
              <div className="mc-card4">
                <img
                  src="https://mcdonalds.az/images/e1365cd6b7a0589ce08bdd726c4d7ab3.jpg"
                  alt=""
                />

                <h1 className="cardtext3">
                  Yeməklərimiz <br /> haqqında
                </h1>
                <p style={{ marginLeft: 110 }}>
                  Yeməklərimizin hazırlanma üsullarının keyfiyyətini
                  təkmilləşdiririk.
                </p>
                <br />
                <button className="card-btn3">Ətraflı</button>
              </div>
            </div>
            <footer className="footercard" style={{display:"flex", marginLeft:"350px"}}>
            <div className="firstfooter">
                <ul>
                    <li>Haqqımızda</li>
                    <br />
                    <li>Tariximiz</li>
                    <li>Xəbərlər və bildirişlər</li>
                    <li>Siz soruşursunuz. Biz cavablandırırq</li>
                    <li>Dəyərlərimiz</li>   
                </ul>
            </div>
            
                <ul className="secondfooter">
                    <li>Karyera</li>
                    <br />
                    <li>İnsanlarımızla tanış olun: Heyət və idarəetmə</li>
                    <li>İndi müraciət edin</li>

                     
                </ul>
           <ul className='thirdfooter'>
            <li>Xidmətlər</li>
            <br />
            <li>Wi-fi</li>
            <li>McDelivery®</li>
            <li>MakAvto®</li>
            <li>Mobil tətbiqi yükləyin</li>
           </ul>
           <ul className='lastfooter'>
            <li>Mobil tətbiq haqqında fikirləriniz</li> 
            <li>Restoran haqqında fikirləriniz</li>
           </ul> 
           <div className="image1">
           <img src="https://mcdonalds.az/images/static/app_store_badge.png" alt="" />
          
           <img src="https://mcdonalds.az/images/static/google_play_badge.png" alt="" />
           </div>
           <ul className="icons">
  
           <li > <CiFacebook /> </li>
          
            <li><CiYoutube /></li>
            <li><CiInstagram /></li>
            <li><CiLinkedin /></li>

           </ul>

         

        </footer>   
          </section>
          
          
          <hr />
        </div>
      </div>
    </>
  );
};