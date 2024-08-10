import React, { useState } from 'react';
import circle from "/images/home/ourresearch/circle.png";
import image from "/images/home/ourresearch/image.png";

function FifthPage() {
  // State to manage which side is active
  const [isLeftActive, setIsLeftActive] = useState(true);

  // Content for the left side
  const leftContent = (
    <div className='px-6 mb-10 text-center lg:text-start '>
      <h1 className="font-nunito font-bold text-gray-900 text-3xl sm:text-4xl mb-8 mt-10  lg:text-5xl text-center md:text-start">Lorem Ipsum is simply</h1>
      <p className="font-lora text-sm sm:text-lg text-gray-900 mb-10  text-justify xl:leading-loose">
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry <br />
        standard dummy text ever since the 1500s, when an unknown <br />
        printer took a galley of type Lorem Ipsum is simply dummy 
        text of the printing and typesetting industry. Lorem Ipsum has <br />
        been the industry's standard dummy text ever since the 1500s, <br />
        when an unknown printer took.
      </p>
      <button className="bg-yellow-400 sm:text-lg text-white font-nunito font-bold text-sm px-4 py-2 rounded-lg hover:scale-110">
        Read More
      </button>
    </div>
  );

  // Content for the right side
  const rightContent = (
    <div className='mb-10  '>
      <div className="relative dualbtn  bg-orange-100 border-white border-4 rounded-3xl justify-between w-24 h-12 z-20 ml-0 hidden xl:flex text-start xl:ml-5 xl:mt-14 2xl:ml-20">
       <button
          className="left text-3xl hover:bg-yellow-500 active:bg-yellow-500 w-12 rounded-l-3xl text-gray-900"
          onClick={() => setIsLeftActive(false)}
        >
          &lt;
        </button>
        <button
          className="right text-3xl hover:bg-yellow-500 active:bg-yellow-500 w-12 rounded-r-3xl text-gray-900"
          onClick={() => setIsLeftActive(true)}
        >
          &gt;
        </button>
        </div>
      <img src={image} alt="" className=" border-8 border-white border-solid rounded-3xl drop-shadow-md z-20  h-auto w-96 mx-auto lg:-mt-16 lg:w-auto" />
      <img src={circle} alt="" className="xl:h-28 xl:w-28 xl:-mt-16 xl:ml-7 2xl:ml-20  hidden xl:flex" />
      
       
      
    </div>
  );

  return (
    <>
      
        <div className="sub p-3 py-14 ">
          <h1 className="text-center mt-4 font-nunito font-bold text-3xl lg:text-5xl sm:text-4xl text-gray-900">
            Our Research & Case <span className="underline decoration-custom-yellow decoration-4 underline-offset-1">Studies</span>
          </h1>
          <p className="content font-lora text-gray-900 text-sm sm:text-lg text-center mb-10 mt-6 xl:leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br />
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley <br />
            of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </p>
          <div className="bottom md:flex">
            <div className="left md:w-1/2 ">
              {isLeftActive ? leftContent : rightContent}
            </div>
            <div className="right  md:w-1/2 my-auto">
              {isLeftActive ? rightContent : leftContent}
            </div>
          </div>
        </div>
      
    </>
  );
}

export default FifthPage;
