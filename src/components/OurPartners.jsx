import React from 'react';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Microsoft from "/images/home/ourpartner/Microsoft.png";
import Safari from "/images/home/ourpartner/Safari.png";
import Google from "/images/home/ourpartner/Google.png";
import Firefox from "/images/home/ourpartner/Firefox.png";
import right from "/images/home/ourpartner/chevron-right.svg";
import left from "/images/home/ourpartner/chevron-left.svg";

// Define responsive breakpoints for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 4 // Number of slides to move per click
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const items = [
  { id: 1, src: Microsoft, alt: "Microsoft" },
  { id: 2, src: Google, alt: "Google" },
  { id: 3, src: Firefox, alt: "Firefox" },
  { id: 4, src: Safari, alt: "Safari" }
];

function OurPartners() {
  return (
    <div className="">
      <div className="py-10 px-5 lg:py-20 flex flex-col justify-center items-center">
        <div className="header flex justify-center mb-12">
          <span className="font-nunito font-bold sm:text-4xl lg:text-5xl text-3xl text-gray-900">
            Our <span className="underline decoration-custom-yellow decoration-4 underline-offset-0">Partner</span>
          </span>
        </div>
        
        <div className="relative w-full">
          <MultiCarousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={1000}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            customLeftArrow={
              <div className="absolute top-1/2 -left-4  transform -translate-y-1/2 z-20 mx-4">
                <img src={left} alt="left arrow" className="h-12 w-12 cursor-pointer rounded-full bg-gray-200" />
              </div>
            }
            customRightArrow={
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 mx-4">
                <img src={right} alt="right arrow" className="h-12 w-12 cursor-pointer rounded-full bg-gray-200" />
              </div>
            }
          >
            {items.map(item => (
              <div key={item.id} className="bg-gray-100 flex justify-center items-center rounded-lg px-2 py-4 sm:mx-14 mx-20 ">
                <img src={item.src} alt={item.alt} className="h-16 my-4" />
              </div>
            ))}
          </MultiCarousel>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
