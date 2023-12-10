import React from "react";
import card_img from "../images/Rectangle 517.png";

const Explorecard = () => {
  return (
    <div className="w-[312px] h-[417px] rounded-5 border border-solid border-blue-700 border-opacity-10 bg-[#23222A] shadow-lg flex flex-shrink-0 flex-col items-start justify-normal">
      <img
        className="w-[301px] h-[161px] mt-[6px] ml-[6px] flex-shrink-0 rounded-5 border border-solid border-black border-opacity-10 bg-cover bg-center relative"
        src={card_img}
        alt=" card banner"
      />

      <h1 className="w-[288px] h-[98px] pt-5 pl-4 flex-shrink-0 text-white font-Lusitana text-xl font-bold leading-7 tracking-wider capitalize">
        The Influence on Medical Activities by Mobile Medical Application
      </h1>
      <h1 className="w-[253p] h-[66px] p-4 flex-shrink-0 text-[#FFFFFF99] font-anek text-base font-medium leading-7">
        Year: 2018 | Conference Paper | Publisher: IEEE
      </h1>
      <button className="text-gray-300 mt-4 ml-4 font-AnekLatin text-base font-medium leading-5 capitalize flex items-center justify-center w-[86px] h-[34px]  gap-2 flex-shrink-0 rounded-5 border border-solid border-white border-opacity-11 px-6 py-4">
        Explore
      </button>
    </div>
  );
};

export default Explorecard;
