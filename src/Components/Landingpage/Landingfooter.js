import React from "react";
import footer_logo from "../../images/d725dac3fdc6eba7ecd06d67942e90e8.png";
import facebook_icon from "../../images/facebook.svg";
import linkedin_icon from "../../images/linkedin.svg";
import twitter_icon from "../../images/Vector.svg";
import instagram_icon from "../../images/Group 427318261.svg";
import facebook_icon2 from "../../images/facebook-_llight.svg";
import linkedin_icon2 from "../../images/linkedin_light.svg";
import twitter_icon2 from "../../images/Vector_light.svg";
import instagram_icon2 from "../../images/Group 427318261_light.svg";
import Elipse from "../../images/Ellipse 24.svg";
import btn_icon from "../../images/Group 427318227.svg";
import btn_icon2 from "../../images/Group 427318227_light.svg";
import banr from "../../images/948b3ad28ed67e63c760b2ae2c01e709.png";
import banr2 from "../../images/Group 2326.svg";

const Landingfooter = () => {
  return (
    <>
      <div className="w-full h-[502px] bg-[#26222E] light:bg-primary  purple:bg-secondary overflow-y-scroll no-scrollbar ">
        <div className="flex flex-shrink-0 justify-normal items-center text-white pt-[108px]  pl-[160px] ">
          <ul className="flex flex-shrink-0 items-start justify-between flex-col">
            <li>
              <div className=" rounded-md bg-white purple:bg-secondary ">
                <img
                  className="w-[57.161px] h-[76.68px] purple:hidden"
                  src={banr}
                  alt=""
                />
                <img
                  className="w-[67.288px] h-[73.94px] hidden purple:block "
                  src={banr2}
                  alt=""
                />
              </div>
            </li>
            <li className="purple:hidden w-[378px] text-white light:text-black font-Lusitana light:font-SourceSans font-bold text-[18px] leading-10 uppercase pt-[35px] pb-[10px]">
              Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital
            </li>
            <li className="hidden purple:block w-[408px] text-white font-Sora font-bold text-[18px] leading-10 uppercase pt-[35px] pb-[10px]">
              Indian Institute of Medical Sciences
            </li>
            <li className="text-white light:text-black font-AnekLatin light:font-SourceSans purple:font-Sora font-medium text-[16px] leading-8 ">
              Official Institute Library to access Digital material
              <div className="w-[326px] h-[2px] bg-[#AE9F0F] light:bg-[#B1CAFF] purple:bg-[#B1CAFF]"></div>
            </li>
          </ul>

          <div className="flex items-start justify-between flex-col w-[272px] ml-[90px]">
            <h1 className="w-[77.714px] text-white light:text-black font-AnekLatin light:font-Outfit purple:font-Sora purple:text-opacity-80  font-semibold text-base uppercase">
              Address
            </h1>
            <ul className="flex flex-shrink-0 items-start justify-between flex-col">
              <li>
                <p className="whitespace-normal w-64 pt-[19px] pb-[29px] light:font-Outfit light:text-[#00000099]  light:text-opacity-80 purple:font-Sora purple:text-opacity-50 ">
                  The Principal Swargiya Dadasaheb Kalmegh Smruti Dental College
                  & Hospital Wanadongari - Wadhamna Road, Hingna Nagpur - 441110
                  Maharashtra, India
                </p>
              </li>
              <li className="flex light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50 ">
                9178525763{" "}
                <img className="pl-1 pr-1" src={Elipse} alt="dot icon" />
                9178525763
              </li>
              <li className="pt-[13px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50 ">
                sdddhch@sdmail.com
              </li>
            </ul>
          </div>

          <div className="flex items-start justify-stretch flex-col  w-[100px] purple:w-[114px] h-[250px] ml-[20px] ">
            <h1 className=" text-white light:text-black font-AnekLatin light:font-Outfit purple:font-Sora purple:text-opacity-80 font-semibold text-base uppercase">
              Quick Links
            </h1>
            <ul className="flex flex-shrink-0 items-start justify-between flex-col pt-[19px]">
              <li className="pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50">
                Home
              </li>
              <li className="pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50">
                About Us
              </li>
              <li className="pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50">
                Categories
              </li>
              <li className="pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50">
                Open Access
              </li>
              <li className="pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50">
                The Institute
              </li>
            </ul>
          </div>

          <div className="flex items-start justify-between flex-col  w-[100px] h-[250px] ml-[93px]">
            <h1 className=" text-white light:text-black font-AnekLatin light:font-Outfit purple:font-Sora purple:text-opacity-80  font-semibold text-base uppercase">
              Categories
            </h1>
            <ul className="flex flex-shrink-0 items-start justify-between flex-col pt-[19px]">
              <li className="pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80  purple:font-Sora purple:text-opacity-50">
                Medical
              </li>
              <li className="pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50">
                Dentist{" "}
              </li>
              <li className="pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50">
                Opeodenics
              </li>
              <li className="pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50">
                Medical
              </li>
              <li className="pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50">
                Dentist{" "}
              </li>
              <li className="pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50">
                Opeodenics
              </li>
            </ul>
          </div>

          <div className="relative top-[200px] right-[40px] ">
            <img src={btn_icon} alt="Back top icon" className="light:hidden" />
            <img src={btn_icon2} alt="Back top icon" className="hidden light:block" />
            <h1 className="text-white light:text-black font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[14px] relative bottom-[33px] left-[15px]">
              {" "}
              Back to Top
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[117px] bg-[#1F1B25] light:bg-primary  purple:bg-brand flex flex-shrink-0 text-white justify-normal items-center fill-white overflow-y-scroll no-scrollbar">
        <div className="flex flex-shrink-0 text-white justify-between  items-center ml-[144px]">
          <img
            className="w-[95.308px] h-[59px] rounded-md white"
            src={footer_logo}
            alt=" "
          />
          <h1 className="text-[#DBDBDB] font-AnekLatin purple:font-Sora font-medium text-[15px] leading-5 pl-[20px] light:font-Outfit light:text-[#00000099] purple:text-white light:text-opacity-60 purple:text-opacity-60 ">
            {" "}
            Powered By Remotlink - All Rights Reserved
          </h1>
        </div>
        <div className="flex flex-shrink-0 text-[#DBDBDB] justify-between  items-center ml-[105px] ">
          <h1 className="text-[#DBDBDB] font-AnekLatin  purple:font-Sora font-medium text-[15px] leading-5 font-feature light:font-Outfit light:text-[#00000099]  light:text-opacity-60 purple:text-white purple:text-opacity-60 ">
            Privacy Policy
          </h1>
          <h1 className="text-[#DBDBDB] font-AnekLatin  purple:font-Sora font-medium text-[15px] leading-6 font-feature  pl-[28px] light:font-Outfit light:text-[#00000099] light:text-opacity-60 purple:text-white purple:text-opacity-60">
            Terms and Conditions
          </h1>
        </div>
        <div className="flex flex-shrink-0 justify-normal items-center w-[30px] ml-[120px]">
          <img
            className="opacity-[54] w-[20.999px] h-[21px] light:hidden"
            src={instagram_icon}
            alt="instagram icon "
          />

          <img
            className="opacity-[54] w-[20px] h-[20px] ml-[50px]  light:hidden"
            src={linkedin_icon}
            alt=" linkedin icon"
          />

          <img
            className="opacity-[54] w-[9.29px] h-[18.58px] ml-[50px]  light:hidden "
            src={facebook_icon}
            alt="facebook icon "
          />

          <img
            className="opacity-[54] w-[13.957px] h-[14.264px]  ml-[50px]  light:hidden"
            src={twitter_icon}
            alt=" twitter icon"
          />

<img
            className="opacity-[54] w-[20.999px] h-[21px] hidden light:block"
            src={instagram_icon2}
            alt="instagram icon "
          />

          <img
            className="opacity-[54] w-[20px] h-[20px] ml-[50px] hidden light:block"
            src={linkedin_icon2}
            alt=" linkedin icon"
          />

          <img
            className="opacity-[54] w-[9.29px] h-[18.58px] ml-[50px] hidden light:block "
            src={facebook_icon2}
            alt="facebook icon "
          />

          <img
            className="opacity-[54] w-[13.957px] h-[14.264px]  ml-[50px] hidden light:block"
            src={twitter_icon2}
            alt=" twitter icon"
          />

          
        </div>
      </div>
    </>
  );
};

export default Landingfooter;
