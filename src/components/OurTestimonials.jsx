import first from "/images/home/ourtestimonials/first.png";
import second from "/images/home/ourtestimonials/second.png";
import third from "/images/home/ourtestimonials/third.png";
import fourth from "/images/home/ourtestimonials/fourth.png";
import fifth from "/images/home/ourtestimonials/fifth.png";
import icon1 from "/images/home/ourtestimonials/icon1.png";
import icon2 from "/images/home/ourtestimonials/icon2.png";
import icon3 from "/images/home/ourtestimonials/icon3.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './CustomSwiper.css';
import { Pagination } from "swiper/modules";
function SeventhPage() {
  return (
    <>
      <div className="py-7 lg:my-10">
        <h1 className="font-nunito text-gray-900 text-3xl sm:text-4xl font-bold text-center lg:text-5xl my-4">
          Our{" "}
          <span className="underline decoration-custom-yellow decoration-4 underline-offset-1">
            Testimonials
          </span>
        </h1>
        <Swiper
           spaceBetween={30}
           pagination={{
             clickable: true,
           }}
           modules={[Pagination]}
           className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide">
              <img src={first} alt="" className="h-80 mx-auto" />
              <div className="lst text-center">
                <p className="content font-lora text-gray-900  sm:text-lg text-sm mx-3  xl:leading-loose sm:tracking-wider">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been <br />
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took type <br /> scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                </p>
              </div>
              <div className="lassst  mt-6  text-center mb-10">
                <div className="ftr">
                  <span className="font-semibold font-nunito text-2xl text-gray-900">
                    Jenny Wilson |
                  </span>{" "}
                  <span className="font-lora text-gray-900 text-lg">
                    Digital Agency
                  </span>
                </div>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src={second} alt="" className="h-80 mx-auto" />
              <div className="lst text-center">
                <div className="content font-lora text-gray-900 sm:text-lg text-sm mx-3    sm:tracking-wider xl:leading-loose">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been <br />
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took type <br /> scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                </div>
              </div>
              <div className="lassst  mt-6  text-center mb-10">
                <div className="ftr">
                  <span className="font-semibold font-nunito text-2xl text-gray-900">
                    Jenny Wilson |
                  </span>{" "}
                  <span className="font-lora text-gray-900 text-lg">
                    Digital Agency
                  </span>
                </div>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src={third} alt="" className="h-80 mx-auto" />
              <div className="lst text-center">
                <div className="content font-lora text-gray-900 sm:text-lg mx-3 text:sm    sm:tracking-wider xl:leading-loose">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been <br />
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took type <br /> scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                </div>
              </div>
              <div className="lassst  mt-6  text-center mb-10">
                <div className="ftr">
                  <span className="font-semibold font-nunito text-2xl text-gray-900">
                    Jenny Wilson |
                  </span>{" "}
                  <span className="font-lora text-gray-900 text-lg">
                    Digital Agency
                  </span>
                </div>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src={fourth} alt="" className="h-80 mx-auto" />
              <div className="lst text-center">
                <div className="content font-lora text-gray-900 sm:text-lg text-sm mx-3   sm:tracking-wider xl:leading-loose">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been <br />
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took type <br /> scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                </div>
              </div>
              <div className="lassst  mt-6  text-center mb-10">
                <div className="ftr">
                  <span className="font-semibold font-nunito text-2xl text-gray-900">
                    Jenny Wilson |
                  </span>{" "}
                  <span className="font-lora text-gray-900 text-lg">
                    Digital Agency
                  </span>
                </div>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src={fifth} alt="" className="h-80 mx-auto" />
              <div className="lst text-center">
                <div className="content font-lora text-gray-900 sm:text-lg mx-3 text-sm  sm:tracking-wider xl:leading-loose">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been <br />
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took type <br /> scrambled it to make a
                  type specimen book. It has survived not only five centuries,
                </div>
              </div>
              <div className="lassst  mt-6  text-center mb-10">
                <div className="ftr">
                  <span className="font-semibold font-nunito text-2xl text-gray-900">
                    Jenny Wilson |
                  </span>{" "}
                  <span className="font-lora text-gray-900 text-lg">
                    Digital Agency
                  </span>
                </div>
              </div>
              
            </div>
          </SwiperSlide>
          
        </Swiper>
        </div>
    </>
  );
}
export default SeventhPage;
