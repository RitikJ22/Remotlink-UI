import React from "react";
import lgn_icon from "../images/Group 2323.svg";
import anmnt_icon from "../images/notification-status.svg";
import banr from "../images/948b3ad28ed67e63c760b2ae2c01e709.png";
import { Link } from "react-router-dom";

const Darkheader = () => {
  return (
    <>
      <div className="w-[1440px] h-[52px] bg-[#1F1B25] flex flex-shrink-0 items-center justify-normal">
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
      <div className="w-[1440px] h-[69px] border-b border-solid border-white border-opacity-20 bg-opacity-33 bg-[#16131E54] shadow-md backdrop-blur-[8px] flex flex-shrink-0 items-center justify-normal">
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
    </>
  );
};

export default Darkheader;
