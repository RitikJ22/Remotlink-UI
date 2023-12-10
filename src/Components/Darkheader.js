import React from "react";
import lgn_icon from "../images/Group 2323.svg";
import anmnt_icon from "../images/notification-status.svg";

import { Link } from "react-router-dom";

const Darkheader = () => {
  return (
    <>
      <div className="w-[1440px] h-[52px] bg-[#1F1B25] flex flex-shrink-0 items-center justify-normal overflow-y-scroll no-scrollbar">
        <div className=" flex flex-shrink-0 items-center justify-center ml-[123px]">
          <h1>👋</h1>
          <h1 className="text-white font-AnekLatin text-base font-normal leading-normal">
            Hello Visitor , Please Login To Access The Library{" "}
          </h1>
        </div>
        <div className=" w-[146px] h-[52px] bg-[#000000] flex flex-shrink-0 items-center justify-center ml-[550px] mr-1">
         
            <img src={lgn_icon} alt="login icon" />
            <Link to={"Home"}> <h1 className="text-white font-AnekLatin text-base font-normal leading-5 capitalize ml-3">Login Now</h1>
          </Link>
        </div>
        <div className=" w-[170px] h-[52px] bg-[#000000] flex flex-shrink-0 items-center justify-center mr-[70px]">
          <img src={anmnt_icon} alt="Announcements icon" />
          <h1 className=" text-white font-AnekLatin text-base font-normal leading-5 capitalize ml-3">Announcements</h1>
        </div>
      </div>
     
    </>
  );
};

export default Darkheader;
