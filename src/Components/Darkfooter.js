import React from 'react';
import footer_logo from "../images/d725dac3fdc6eba7ecd06d67942e90e8.png";
import facebook_icon from "../images/facebook.svg";
import linkedin_icon from "../images/linkedin.svg";
import twitter_icon from "../images/Vector.svg";
import instagram_icon from "../images/Group 427318261.svg";
import Elipse from "../images/Ellipse 24.svg";
import btn_icon from "../images/Group 427318227.svg";
import banr from "../images/948b3ad28ed67e63c760b2ae2c01e709.png"

const Darkfooter = () => {
  return (
    <>
    <div className="w-[1440px] h-[502px] bg-[#26222E] ">
      <div className="flex flex-shrink-0 justify-normal items-center text-white pt-[108px]  pl-[160px] ">
        <ul className="flex flex-shrink-0 items-start justify-between flex-col">
          <li>
            <div className=" rounded-md bg-white ">
              <img className="w-[57.161px] h-[76.68px]" src={banr} alt=''/>
            </div>
          </li>
          <li className="w-[378px] text-white font-Lusitana font-bold text-[18px] leading-10 uppercase pt-[35px] pb-[10px]">
          Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital 
          </li>
          <li className="text-white font-AnekLatin font-medium text-[16px] leading-8 ">
           
              Official Institute Library to access Digital material
              <div className='w-[326px] h-[2px] bg-[#AE9F0F]'></div>
          </li>
        </ul>

        <div className="flex items-start justify-between flex-col w-[272px] ml-[90px]">
          <h1 className="w-[77.714px] text-white font-AnekLatin font-semibold text-base uppercase">
            Address
          </h1>
          <ul className="flex flex-shrink-0 items-start justify-between flex-col">
            <li>
              <p className="whitespace-normal w-64 pt-[19px] pb-[29px]">
                The Principal Swargiya Dadasaheb Kalmegh Smruti Dental College
                & Hospital Wanadongari - Wadhamna Road, Hingna Nagpur - 441110
                Maharashtra, India
              </p>
            </li>
            <li className="flex">
              9178525763{" "}
              <img className="pl-1 pr-1" src={Elipse} alt="dot icon" />
              9178525763
            </li>
            <li className="pt-[13px]">sdddhch@sdmail.com</li>
          </ul>
        </div>

        <div className="flex items-start justify-stretch flex-col  w-[100px] h-[250px] ml-[20px] ">
          <h1 className=" text-white font-AnekLatin font-semibold text-base uppercase">
            Quick Links
          </h1>
          <ul className="flex flex-shrink-0 items-start justify-between flex-col pt-[19px]">
            <li className="pb-[11px]">Home</li>
            <li className="pb-[11px]">About Us</li>
            <li className="pb-[11px]">Categories</li>
            <li className="pb-[11px]">Open Access</li>
            <li className="pb-[11px]">The Institute</li>
          </ul>
        </div>

        <div className="flex items-start justify-between flex-col  w-[100px] h-[250px] ml-[93px]">
          <h1 className=" text-white font-AnekLatin font-semibold text-base uppercase">
            Categories
          </h1>
          <ul className="flex flex-shrink-0 items-start justify-between flex-col pt-[19px]">
            <li className="pb-[11px]">Medical</li>
            <li className="pb-[11px]">Dentist </li>
            <li className="pb-[11px]">Opeodenics</li>
            <li className="pb-[11px]">Medical</li>
            <li className="pb-[11px]">Dentist </li>
            <li className="pb-[11px]">Opeodenics</li>
          </ul>
        </div>

        <div className="relative top-[200px] right-[40px]">
          <img src={btn_icon} alt="Back top icon" className="" />
          <h1 className="text-white font-AnekLatin text-base relative bottom-[33px] left-[15px]">
            {" "}
            Back to Top
          </h1>
        </div>
      </div>
    </div>
    <div className="w-[1440px] h-[117px] bg-[#1F1B25] flex flex-shrink-0 text-white justify-normal items-center fill-white">
      <div className="flex flex-shrink-0 text-white justify-between  items-center ml-[144px]">
        <img
          className="w-[95.308px] h-[59px] rounded-md white"
          src={footer_logo}
          alt=" "
        />
        <h1 className="text-[#DBDBDB] font-AnekLatin font-medium text-[15px] leading-5 pl-[20px]">
          {" "}
          Powered By Remotlink - All Rights Reserved
        </h1>
      </div>
      <div className="flex flex-shrink-0 text-[#DBDBDB] justify-between  items-center ml-[105px] ">
        <h1 className="text-[#DBDBDB] font-AnekLatin font-medium text-[15px] leading-5 font-feature ">
          Privacy Policy
        </h1>
        <h1 className="text-[#DBDBDB] font-AnekLatin font-medium text-[15px] leading-6 font-feature  pl-[28px]  ">
          Terms and Conditions
        </h1>
      </div>
      <div className="flex flex-shrink-0 text-[#DBDBDB]justify-normal items-center w-[30px] ml-[120px]">
        <img
          className="opacity-[54] w-[20.999px] h-[21px]"
          src={instagram_icon}
          alt="instagram icon "
        />
        <img
          className="opacity-[54] w-[20px] h-[20px] fill-white ml-[50px]"
          src={linkedin_icon}
          alt=" linkedin icon"
        />
        <img
          className="opacity-[54] w-[9.29px] h-[18.58px] fill-white ml-[50px] "
          src={facebook_icon}
          alt="facebook icon "
        />
        <img
          className="opacity-[54] w-[13.957px] h-[14.264px] fill-white ml-[50px]"
          src={twitter_icon}
          alt=" twitter icon"
        />
      </div>
    </div>
  </>
  )
}

export default Darkfooter;