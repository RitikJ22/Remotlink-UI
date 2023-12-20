import React from "react";
import card_img from "../images/Rectangle 517.png";

const Explorecard = (props) => {
  const classes=`w-[312px] h-[417px] rounded-5 border border-solid border-blue-700 border-opacity-10  shadow-lg flex flex-shrink-0 flex-col items-start justify-normal bg-[#23222A] `;
  const classes1=`w-[288px] h-[98px] pt-5 pl-4 flex-shrink-0 text-[#F9F9FF] font-Lusitana text-xl font-bold leading-7 tracking-wider capitalize`;
  const classes2=`w-[253px] h-[66px] p-4 flex-shrink-0 text-white font-AnekLatin text-base font-medium leading-7`;
  const classes3=`text-[#DBDBDB] mt-4 ml-4 font-AnekLatin text-base font-medium leading-5 capitalize flex items-center justify-center w-[86px] h-[34px]  gap-2 flex-shrink-0 rounded-[5px] border border-solid border-white border-opacity-11 px-6 py-4`;
  return (
    <div className={`${classes} light:bg-[#FFFFFF] purple:bg-[#FFFFFF]`}>
      <img
        className="w-[301px] h-[161px] mt-[6px] purple:mt-0 ml-[6px] purple:ml-0 flex-shrink-0 rounded-5 border border-solid  border-black border-opacity-10 bg-cover bg-center relative"
        src={card_img}
        alt=" card banner"
      />

      <h1 className={`${classes1} light:text-black purple:text-secondary light:font-FiraSans purple:font-Sora purple:text-[19px]`}>
        The Influence on Medical Activities by Mobile Medical Application
      </h1>
      <h1 className={`${classes2} light:text-black purple:text-black light:font-SourceSans purple:font-Sora purple:text-[13px]`}>
        Year: 2018 | Conference Paper | Publisher: IEEE
      </h1>
      <button className={`${classes3} purple:mt-6 purple:border-opacity-20 light:text-black purple:text-black light:font-FiraSans  purple:font-Sora light:border-black  purple:border-black`}>
        Explore
      </button>
    </div>
  );
};

export default Explorecard;
