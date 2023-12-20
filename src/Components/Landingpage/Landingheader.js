import React from "react";
import lgn_icon from "../../images/Group 2323.svg";
import anmnt_icon from "../../images/notification-status.svg";

import { Link } from "react-router-dom";

const Landingheader = () => {
  return (
    <>
      <div className="w-full h-[52px]  bg-[#1F1B25] light:bg-secondary flex flex-shrink-0 items-center justify-normal overflow-y-scroll no-scrollbar">
        <div className=" flex flex-shrink-0 items-center justify-center ml-[123px]">
          <h1>👋</h1>
          <h1 className="text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[14px] font-normal leading-normal">
            Hello Visitor , Please Login To Access The Library{" "}
          </h1>
        </div>
        <div className=" w-[146px] h-[52px] bg-[#000000] light:bg-btn flex flex-shrink-0 items-center justify-center ml-[550px] mr-1 hover:bg-[#0B2E78] focus:ring-4 focus:outline-none focus:ring-blue-300   ">
          <img src={lgn_icon} alt="login icon" />
          <Link to={"Home"}>
           
            <h1 className="text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[13px] font-normal leading-5 capitalize ml-3">
              Login Now
            </h1>
          </Link></div>

      
          

          <div className=" w-[170px] h-[52px] bg-[#000000] light:bg-btn flex flex-shrink-0 items-center justify-center mr-[70px] hover:bg-[#0B2E78] focus:ring-4 focus:outline-none focus:ring-blue-300">
            <img src={anmnt_icon} alt="Announcements icon" />
            <h1 className=" text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[13px] font-normal leading-5 capitalize ml-3">
              Announcements
            </h1>
          </div>
       
      </div>
    </>
  );
};

export default Landingheader;
