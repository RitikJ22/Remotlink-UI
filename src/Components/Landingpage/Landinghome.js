import React from "react";
import banr from "../../images/948b3ad28ed67e63c760b2ae2c01e709.png";
import library_cover from "../../images/Group 3247.svg";
import search_icn from "../../images/magnifying-glass.svg";
import books from "../../images/book.svg";
import arrow from "../../images/bi_arrow-left-short.svg";
import abt_us1 from "../../images/Rectangle 522.png";
import abt_us2 from "../../images/Rectangle 523.png";
import Explorecard from "../Explorecard";
import Showcard from "../Showcard";
import video_pic from "../../images/Rectangle 255.png";
import circle from "../../images/play-circle.svg";
import scenery from "../../images/Rectangle 550.png";
const Landinghome = () => {
  return (
    <>
      <div
        className="w-full h-[757px]"
        class="background overflow-y-scroll no-scrollbar"
      >
        <div className="w-full h-[69px] border-b border-solid border-white border-opacity-20 bg-opacity-33 bg-[#16131E54] light:bg-brand light:bg-opacity-[68] purple:bg-primary shadow-md backdrop-blur-[8px] flex flex-shrink-0 items-center justify-normal overflow-y-scroll no-scrollbar">
          <div className="flex flex-shrink-0 items-center justify-center ml-[112px]">
            {/* <img className="w-[43px] h-[57.683px]" src={banr} alt="banner" /> */}
            <div className="logo-pic  purple:logo-pic-purple w-[43px] h-[57.683px] "></div>
            <h1 className="text-white light:text-black purple:hidden  font-Lusitana light:font-SourceSans text-base font-bold leading-6 w-[377px] pl-[25px]">
              Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital
            </h1>
            <h1 className="hidden purple:block text-[#6F1AB6]  text-base font-Sora font-bold leading-6 w-[250px] pl-[25px]">
              Indian Institute of Medical Sciences
            </h1>
          </div>
          <div className="ml-[435px]">
            <ul>
              <l1 className="text-white light:text-[#0B2E78] purple:text-black font-AnekLatin light:font-Outfit purple:font-Sora text-base font-medium leading-normal pr-[35px]">
                Home
              </l1>
              <l1 className="text-white light:text-[#0B2E78] purple:text-black font-AnekLatin light:font-Outfit purple:font-Sora text-base font-medium leading-normal pr-[35px]">
                About Us
              </l1>
              <l1 className="text-white light:text-[#0B2E78] purple:text-black font-AnekLatin light:font-Outfit purple:font-Sora text-base font-medium leading-normal pr-[35px]">
                Categories
              </l1>
              <l1 className="text-white light:text-[#0B2E78] purple:text-black font-AnekLatin light:font-Outfit purple:font-Sora text-base font-medium leading-normal pr-[35px]">
                Featured
              </l1>
            </ul>
          </div>
        </div>
        <div>
          <div className="hidden purple:block w-[829px] h-[455px] bg-[#3D1766] bg-opacity-50 absolute inset-0 top-60"></div>
          <div className="z-10 relative">
          <div className="pt-[150px] flex flex-shrink-0  items-center justify-normal ml-[93px]">
            {/* <img src={library_cover} alt="library cover" className="light" /> */}
            <div className="bg-pic light:bg-pic-light purple:bg-pic-purple purple:ellipse w-[256px] h-[57px]">
              
            </div>
            <div className="flex flex-shrink-0  items-center justify-normal relative right-56">
            <div className="hidden purple:block ellipse-icon w-[43px] h-[43px] absolute right-[159px]"></div>
              <img src={books} alt="books icon" />
              <h2 className="text-white font-AnekLatin light:font-SourceSans text-base font-normal leading-8 pl-3">
                Institute Digital Library
              </h2>
            </div>
          </div>
          <h1 className="w-[992px] purple:w-[725px] text-white font-Lusitana  light:font-SourceSans purple:font-Sora  text-[51px] purple:text-[35px] font-bold leading-17 capitalize ml-[93px]  mt-3">
            Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital
          </h1>
          <h1 className="w-[992px] purple:w-[692px] ml-[93px] mt-3 purple:mt-5 text-white font-Lusitana purple:font-Sora  light:font-SourceSans light:italic text-[21px] purple:text-[18px] font-bold leading-20 capitalize">
            Your gateway to a world of Dental information and research
            resources.
          </h1>
          <div className="ml-[93px] mt-[66px] flex flex-shrink-0 items-start gap-6 justify-normal w-[661px] px-[18px] py-4 rounded-md border border-solid border-white border-opacity-45 opacity-60 purple:opacity-100 bg-gray-900 purple:bg-white ">
            {/* <img src={search_icn} alt="search icon" /> */}
            <div className="search-icon  purple:search-icon-purple w-[21px] h-[21px] "></div>
            <input
              className="text-white purple:text-[#3D1766] opacity-60 purple:bg-opacity-100 bg-gray-900 purple:bg-white font-AnekLatin light:font-SourceSans purple:font-Sora text-base purple:text-[13px] font-medium leading-125 capitalize w-52 h-6"
              placeholder="Search ebooks,journals,papers"
            ></input>
          </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[3771px] purple:h-[3500px] bg-[#06040E] light:bg-primary purple:bg-primary ">
        <div className="hidden purple:block">
          <div className=" flex    items-center justify-center bg-[#3D1766] w-full h-[452px]">
            <div className="">
              <h1 className="text-white w-[664px] font-feature-settings-[clig-off liga-off] font-Sora text-[32px]  font-bold leading-56 capitalize">
                Our Commitment to Academic Excellence
              </h1>
              <p className="text-white w-[539px] font-feature-settings-[clig-off liga-off] font-Sora text-[16px] opacity-60  font-light leading-32 capitalize pt-8">
                At [Institute Name], we are dedicated to fostering a rich
                learning environment through our comprehensive digital library.
                Our mission is to provide a diverse collection of resources,
                including journals, research papers, and educational materials,
                to support the academic pursuits of our students and faculty.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-normal">
              <img
                className="w-[459px] h-[401px]"
                src={scenery}
                alt="scenery"
              />
              <div className="w-[459px] h-[39px] bg-[#B096FA] mt-3"></div>
            </div>
          </div>
        </div>
        <div className="purple:hidden flex items-start justify-center flex-col ml-[93px] pt-[72px]">
          <button className="flex items-center justify-center  h-[26px] p-4 gap-2 flex-shrink-0 border rounded-[5px] border-solid border-white light:border-[#0B2E781A] border-opacity-10 text-[#AE9F0F] light:text-[#0B2E78] text-right font-AnekLatin  light:font-Outfit text-xs font-medium leading-5 capitalize">
            About Us
          </button>
          <div className="flex flex-shrink-0 items-center justify-between mt-[28px]">
            <h1 className="w-[576px] text-[#DBDBDB] light:text-[#000000] font-Lusitana  light:font-SourceSans  uppercasetext-gray-300  text-5xl font-bold leading-normal tracking-tight uppercase">
              Quality Practical Medical Education
            </h1>
            <p className="w-[651px] text-white light:text-[#00000099] light:text-opacity-60 font-AnekLatin  light:font-SourceSans text-base font-medium leading-8">
              Dvirtual Library (DVL) is a leading digital resource hub dedicated
              to empowering excellence in medical education and research. With a
              rich history of serving the community, DVL provides access to a
              comprehensive database of over 25,000 records from 1,000+
              publishers, spanning diverse subjects in medicine, clinical
              sciences, engineering, management, and more .
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center justify-between mt-[103px]">
            <img
              className="w-[465px] h-[284px] rounded-[5px] pr-3"
              src={abt_us1}
              alt="syringe pic"
            />
            <img
              className="w-[774px] h-[284px] rounded-[5px]"
              src={abt_us2}
              alt="dental checkup"
            />
          </div>
        </div>
        <div className="flex flex-shrink-0 flex-col items-center justify-center mt-[39px]">
          <div className="purple:hidden">
          <button className="flex items-center justify-center w-[82px] h-[26px] p-4 gap-2 flex-shrink-0 border rounded-[5px] border-solid border-white light:border-[#0B2E781A] border-opacity-10 text-[#AE9F0F] light:text-[#0B2E78] text-right font-AnekLatin light:font-Outfit text-xs font-medium leading-5 capitalize">
            Statistis
          </button>
          </div>
          <div className="flex flex-shrink-0 flex-col items-center justify-center mt-[28px] gap-5">
            <h1 className="w-[679px] text-gray-300 light:text-black purple:text-secondary font-Lusitana light:font-SourceSans purple:font-Sora text-5xl purple:text-4xl font-bold  leading-normal tracking-tight capitalize pl-12 ">
              Access to Various resources
            </h1>
            <p className="w-[808px] text-white light:text-[#00000099] purple:text-[#696969] text-opacity-60 text-center font-AnekLatin light:font-SourceSans purple:font-Sora text-base font-medium leading-8 ">
              Dvirtual Library (DVL) is a leading digital resource hub dedicated
              to empowering excellence in medical education and research. With a
              rich history of serving the{" "}
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center flex-wrap mt-[12px] mb-[24px] justify-center">
            <Showcard
              heading="500+ Journals"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB] "
              bgcolor="bg-[#18151F] light:bg-[#FFFFFF] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
            />
            <Showcard
              heading="250+ ebooks"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB]"
              bgcolor="bg-[#18151F]  light:bg-[#0B2E78] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#FFFFFF] purple:text-black"
              subheadingtxtclr="text-white light:text-[#FFFFFF] purple:text-black"
            />
            <Showcard
              heading="80+ Videos"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB]"
              bgcolor="bg-[#18151F]  light:bg-[#FFFFFF] purple:bg-[#FFFFFF] "
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
            />
            <Showcard
              heading="50+ Subjects"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB]"
              bgcolor="bg-[#18151F] light:bg-[#0B2E78] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#FFFFFF] purple:text-black"
              subheadingtxtclr="text-white light:text-[#FFFFFF] purple:text-black"
            />
            <Showcard
              heading="200 Databases"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB]"
              bgcolor="bg-[#18151F] light:bg-[#FFFFFF] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
            />
            <Showcard
              heading="100 E-Resource"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB]"
              bgcolor="bg-[#18151F] light:bg-[#FFFFFF] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
            />
          </div>
        </div>
        <div className="w-full h-[817px] border border-solid border-white light:border-[#3461FF33] border-opacity-20 bg-[#0E0D0F] light:bg-primary purple:bg-secondary flex flex-shrink-0 flex-col  justify-evenly">
          <div className="flex flex-shrink-0 flex-col items-start justify-center  rounded-5 ml-[92px] mt-[84px] gap-5">
            <h1 className="text-gray-300 light:text-black purple:text-white font-Lusitana light:font-SourceSans purple:font-Sora text-4xl light:text-5xl purple:text-[32px] font-bold leading-normal tracking-wide capitalize">
              Categorical Resources
            </h1>
            <h3 className="text-[#FFFFFF99] light:text-[#00000099] purple:hidden  font-AnekLatin light:font-SourceSans text-base font-medium leading-8">
              Explore a World of Knowledge with these resources here{" "}
            </h3>
            <h3 className="hidden purple:block text-white text-opacity-60 font-Sora text-base font-medium leading-8">
            At [Institute Name], we are dedicated to fostering a rich 
            </h3>

          </div>

          <div className="flex flex-shrink-0 items-center justify-between">
            <div className="ml-[92px]">
              <button className="text-gray-300 light:text-black purple:text-white py-4 px-4 mr-2 font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                Journals
              </button>
              <button className="text-gray-300 light:text-black purple:text-white py-4 px-4 mr-2  font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                Papers
              </button>
              <button className="text-gray-300 light:text-black purple:text-white py-4 px-4 mr-2  font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                ENews
              </button>
              <button className="text-gray-300  light:text-black purple:text-white py-4 px-4 mr-2  font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                More
              </button>
            </div>
            <div className="flex flex-shrink-0 items-center justify-between mr-[68px]">
              <img src={arrow} alt="arrow icon" />
              <img src={arrow} alt="arrow icon" className="rotate-180" />
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center justify-evenly ml-[76px] mr-[76px]">
            <Explorecard/>
            <Explorecard/>
            <Explorecard/>
            <Explorecard/>
          </div>
        </div>
        <div className="w-full h-[817px] border border-solid border-blue-500 border-opacity-20 bg-[#0E0D0F] light:bg-primary  purple:bg-secondary flex flex-shrink-0 flex-col  justify-evenly mt-[42px] purple:mt-0">
          <div className="flex flex-shrink-0 flex-col items-start justify-center  rounded-5 ml-[92px] mt-[42px] gap-5">
            <div className="purple:hidden">
            <button className="w-[82px] h-[26px]  flex-shrink-0 rounded-5 border border-solid border-white light:border-[#0B2E781A] border-opacity-10 text-gray-300 light:text-[#0B2E78] text-right font-AnekLatin light:font-Outfit text-xs font-medium leading-5 capitalize rounded-[5px] pr-4">
              Featured
            </button>
            </div>
            <h1 className="text-gray-300 light:text-black purple:text-white  font-Lusitana light:font-SourceSans purple:font-Sora text-4xl light:text-5xl purple:text-[32px] font-bold leading-normal tracking-wide capitalize">
              Featured Resources
            </h1>
            <h3 className="text-[#FFFFFF99] light:text-[#00000099] font-AnekLatin light:font-SourceSans text-base font-medium leading-8 purple:hidden">
              Explore a World of Knowledge with these resources here
            </h3>
            <h3 className="hidden purple:block text-white text-opacity-60 font-Sora text-base font-medium leading-8">
            At [Institute Name], we are dedicated to fostering a rich 
            </h3>
          </div>

          <div className="flex flex-shrink-0 items-center justify-between">
            <div className="ml-[145px]">
              <button className="text-gray-300 light:text-black purple:text-white py-4 px-4 mr-2 font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                Medical
              </button>
              <button className="text-gray-300 light:text-black purple:text-white py-4 px-4 mr-2  font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                Pharmacy
              </button>
              <button className="text-gray-300 light:text-black purple:text-white py-4 px-4 mr-2  font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                Dental
              </button>
              <button className="text-gray-300 light:text-black purple:text-white py-4 px-4  mr-2 font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                Social Science
              </button>
              <button className="text-gray-300 light:text-black purple:text-white py-4 px-4  mr-2 font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                Archtecture
              </button>
              <button className="text-gray-300 light:text-black purple:text-white py-4 px-4  mr-2 font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                Life Science
              </button>
              <button className="text-gray-300 light:text-black purple:text-white py-4 px-4 mr-2  font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                Health Science
              </button>
              <button className="text-gray-300 light:text-black purple:text-white py-4 px-4 mr-2  font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary">
                Media
              </button>
            </div>
            <div className="flex flex-shrink-0 items-center justify-between mr-[68px]">
              <img src={arrow} alt="arrow icon" />
              <img src={arrow} alt="arrow icon" className="rotate-180" />
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center justify-evenly ml-[90px] mr-[68px]">
            <Explorecard/>
            <Explorecard/>
            <Explorecard/>
            <Explorecard/>
          </div>
        </div>

        <div className="flex flex-shrink-0 items-center justify-normal mt-[89px]">
          <div className="flex flex-shrink-0  flex-col items-start justify-center ml-[93px] ">
            <div className="purple:hidden">
            <button className="flex flex-col items-center justify-center w-[82px] h-[26px] p-4 flex-shrink-0 border border-solid border-white light:border-[#0B2E781A] border-opacity-10 rounded-md text-right text-[#DBDBDB] light:text-[#0B2E78] font-AnekLatin light:font-Outfit text-xs font-medium leading-5 tracking-wide uppercase">
              Video
            </button>
            </div>
            <h1 className="w-[576px] pt-[28px] text-gray-300 light:text-black purple:text-secondary font-Lusitana light:font-SourceSans purple:font-Sora text-5xl purple:text-[32px] font-bold leading-normal tracking-wider capitalize">
              Watch this video to know more
            </h1>
            <p className="w-[578px] text-white light:text-[#00000099] purple:text-[#696969] text-opacity-60 font-AnekLatin light:font-SourceSans purple:font-Sora text-base font-medium leading-8 pt-4">
              Embark on a journey through our Digital Library by watching our
              informative video. Dive into the world of knowledge, where you can
              explore a treasure trove of resources in various categories.
              Discover our commitment to academic excellence and research
              through this engaging visual tour. Join us in this virtual
              adventure, and get a glimpse of the extensive resources and
              exciting possibilities that await you. Watch the video to know
              more and start your exploration today!
            </p>
          </div>
          <div className="mt-5 ml-[91px]">
            <img src={video_pic} alt="video icon" />
            <img
              className="relative bottom-[238px] left-[254px]"
              src={circle}
              alt="circle icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landinghome;
