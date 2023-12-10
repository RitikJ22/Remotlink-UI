import React from "react";

import library_cover from "../images/Group 3247.svg";
import search_icn from "../images/magnifying-glass.svg";
import books from "../images/book.svg";

const Darkhome = () => {
  return (
    <>
      <div className="w-[1440px] h-[757px]" class="background">
        <div className="pt-[150px] flex flex-shrink-0  items-center justify-normal ml-[93px]">
          <img src={library_cover} alt="library cover" />
          <div className="flex flex-shrink-0  items-center justify-normal relative right-56">
            <img src={books} alt="books icon" />
            <h2 className="text-white font-AnekLatin text-base font-normal leading-8 pl-2">
              Institute Digital Library
            </h2>
          </div>
        </div>
        <h1 className="w-[992px] text-white font-Lusitana text-[51px] font-bold leading-17 capitalize ml-[93px]  mt-3">
          Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital
        </h1>
        <h1 className="w-[992px] ml-[93px] mt-3 text-white font-Lusitana text-[21px] font-bold leading-20 capitalize">
          Your gateway to a world of Dental information and research resources.
        </h1>
        <div className="ml-[93px] mt-[66px] flex flex-shrink-0 items-start gap-6 justify-normal w-[661px] px-[18px] py-4 rounded-md border border-solid border-white border-opacity-45 opacity-60 bg-gray-900 ">
          <img src={search_icn} alt="search icon" />
          <input className="text-white opacity-60 bg-gray-900 font-AnekLatin text-base font-medium leading-125 capitalize w-52 h-6" placeholder="Search ebooks,journals,papers"></input>
        </div>
      </div>

      {/* <div className="w-[1440px] h-[5121px]">Main content here</div> */}
    </>
  );
};

export default Darkhome;
