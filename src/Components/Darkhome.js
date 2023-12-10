import React from "react";
import banr from "../images/948b3ad28ed67e63c760b2ae2c01e709.png";
import library_cover from "../images/Group 3247.svg";
import search_icn from "../images/magnifying-glass.svg";
import books from "../images/book.svg";
import arrow from "../images/bi_arrow-left-short.svg";
import abt_us1 from "../images/Rectangle 522.png";
import abt_us2 from "../images/Rectangle 523.png";
import Explorecard from "./Explorecard";
import Showcard from "./Showcard";

const Darkhome = () => {
  return (
    <>
      
      <div
        className="w-[1440px] h-[757px]"
        class="background overflow-y-scroll no-scrollbar"
      >
        <div className="w-[1440px] h-[69px] border-b border-solid border-white border-opacity-20 bg-opacity-33 bg-[#16131E54] shadow-md backdrop-blur-[8px] flex flex-shrink-0 items-center justify-normal overflow-y-scroll no-scrollbar">
        <div className="flex flex-shrink-0 items-center justify-center ml-[112px]">
          <img className="w-[43px] h-[57.683px]" src={banr} alt="banner" />
          <h1 className="text-white font-Lusitana text-base font-bold leading-6 w-[377px] pl-[25px]">Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital</h1>
        </div>
        <div className="ml-[435px]">
          <ul>
            <l1 className="text-white font-AnekLatin text-base font-medium leading-normal pr-[35px]" >Home</l1>
            <l1 className="text-white font-AnekLatin text-base font-medium leading-normal pr-[35px]" >About Us</l1>
            <l1 className="text-white font-AnekLatin text-base font-medium leading-normal pr-[35px]" >Categories</l1>
            <l1 className="text-white font-AnekLatin text-base font-medium leading-normal pr-[35px]" >Featured</l1>
          </ul>
        </div>
      </div>
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
          <input
            className="text-white opacity-60 bg-gray-900 font-AnekLatin text-base font-medium leading-125 capitalize w-52 h-6"
            placeholder="Search ebooks,journals,papers"
          ></input>
        </div>
      </div>

      <div className="w-[1440px] h-[5121px] bg-[#06040E] ">
        <div className="flex items-start justify-center">
          <button>About Us</button>
          <div>
            <h1>Quality Practical Medical Education</h1>
            <p>
              Dvirtual Library (DVL) is a leading digital resource hub dedicated
              to empowering excellence in medical education and research. With a
              rich history of serving the community, DVL provides access to a
              comprehensive database of over 25,000 records from 1,000+
              publishers, spanning diverse subjects in medicine, clinical
              sciences, engineering, management, and more .
            </p>
          </div>
          <div>
            <img src={abt_us1} alt="syringe pic"/>
            <img src={abt_us2} alt="dental checkup"/>
          </div>
        </div>
        <div>
          <button>Statistis</button>
          <div>
            <h1>Access to Various resources</h1>
            <p>Dvirtual Library (DVL) is a leading digital resource hub dedicated to empowering excellence in medical education and research. With a rich history of serving the </p>
          </div>
          <div>
            <Showcard/>
            <Showcard/>
            <Showcard/>
            <Showcard/>
          </div>
        </div>
        <div className="w-[1440px] h-[817px] border border-solid border-white border-opacity-20 bg-[#0E0D0F] flex flex-shrink-0 flex-col  justify-evenly">
          <div className="flex flex-shrink-0 flex-col items-start justify-center  rounded-5 ml-[92px] mt-[84px] gap-5">
            <h1 className="text-gray-300 font-Lusitana text-4xl font-bold leading-normal tracking-wide capitalize">
              Categorical Resources
            </h1>
            <h3 className="text-[#FFFFFF99] font-AnekLatin text-base font-medium leading-8">
              Explore a World of Knowledge with these resources here{" "}
            </h3>
          </div>

          <div className="flex flex-shrink-0 items-center justify-between">
            <div className="ml-[92px]">
              <button className="text-gray-300 py-4 px-4 mr-2 font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                Journals
              </button>
              <button className="text-gray-300 py-4 px-4 mr-2  font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                Papers
              </button>
              <button className="text-gray-300 py-4 px-4 mr-2  font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                ENews
              </button>
              <button className="text-gray-300  py-4 px-4 mr-2  font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                More
              </button>
            </div>
            <div className="flex flex-shrink-0 items-center justify-between mr-[68px]">
              <img src={arrow} alt="arrow icon" />
              <img src={arrow} alt="arrow icon" className="rotate-180" />
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center justify-evenly ml-[76px] mr-[76px]">
            <Explorecard />
            <Explorecard />
            <Explorecard />
            <Explorecard />
          </div>
        </div>
        <div className="w-[1545px] h-[817px] border border-solid border-blue-500 border-opacity-20 bg-[#0E0D0F] flex flex-shrink-0 flex-col  justify-evenly mt-[42px]">
          <div className="flex flex-shrink-0 flex-col items-start justify-center  rounded-5 ml-[92px] mt-[42px] gap-5">
            <button className="w-[82px] h-[26px]  flex-shrink-0 rounded-5 border border-solid border-white border-opacity-10 text-gray-300 text-right font-AnekLatin text-xs font-medium leading-5 capitalize rounded-[5px] pr-4">
              Featured
            </button>
            <h1 className="text-gray-300 font-Lusitana text-4xl font-bold leading-normal tracking-wide capitalize">
              Featured Resources
            </h1>
            <h3 className="text-[#FFFFFF99] font-AnekLatin text-base font-medium leading-8">
              Explore a World of Knowledge with these resources here
            </h3>
          </div>

          <div className="flex flex-shrink-0 items-center justify-between">
            <div className="ml-[145px]">
              <button className="text-gray-300 py-4 px-4 mr-2 font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                Medical
              </button>
              <button className="text-gray-300 py-4 px-4 mr-2  font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                Pharmacy
              </button>
              <button className="text-gray-300 py-4 px-4 mr-2  font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                Dental
              </button>
              <button className="text-gray-300  py-4 px-4  mr-2 font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                Social Science
              </button>
              <button className="text-gray-300  py-4 px-4  mr-2 font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                Archtecture
              </button>
              <button className="text-gray-300  py-4 px-4  mr-2 font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                Life Science
              </button>
              <button className="text-gray-300  py-4 px-4 mr-2  font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                Health Science
              </button>
              <button className="text-gray-300  py-4 px-4 mr-2  font-Lusitana rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white border-opacity-17 bg-[#18151F]">
                Media
              </button>
            </div>
            <div className="flex flex-shrink-0 items-center justify-between mr-[68px]">
              <img src={arrow} alt="arrow icon" />
              <img src={arrow} alt="arrow icon" className="rotate-180" />
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center justify-evenly ml-[90px] mr-[68px]">
            <Explorecard />
            <Explorecard />
            <Explorecard />
            <Explorecard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Darkhome;
