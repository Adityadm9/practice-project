import React from 'react';
import clock from '/images/home/cards/clock.svg'
const Card = ({ imageSrc, title, description, buttonText,smallImg,imgTxt,btnclr}) => {
  return (
    <div className="border-2 border-yellow-200 rounded-3xl shadow-lg inline-block bg-white mb-4 ">
      
      <div className="px-3">
        <img src={imageSrc} alt={title} className="w-80 h-72 rounded-3xl shadow-md" />
      </div>

      
      <div className="p-2">
        <h2 className="font-nunito font-bold text-xl sm:text-2xl text-gray-900 mb-3">{title}</h2>
        <p className=" break-words w-80 h-24 font-lora text-gray-900 text-sm sm:text-lg overflow-auto">{description}</p>
      </div>
      <div class="border border-gray-300 mx-3"></div>
      <div className="flex items-center justify-start sm:my-4 sm:px-3">
        <img src={smallImg} alt="" className="w-10 h-10 pt-2 " />
        <div className="font-nunito text-sm text-gray-900 mr-1">{imgTxt}</div>
        <img src={clock} alt="" className="w-3 h-3 mr-2 ml-6" />
        <div className="font-nunito text-xs text-gray-500">{`28, Aug 2020, 09:48:00`}</div>
      </div>
      <div className=" p-3 sm:p-6 text-center">

        <button className={`${btnclr}  text-white font-nunito font-bold sm:text-lg text-sm px-4 py-2 rounded-lg hover:scale-110`}>{buttonText}</button>
      </div>
    </div>

  );
};

export default Card;


