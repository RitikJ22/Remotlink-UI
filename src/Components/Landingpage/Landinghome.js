import React from "react";
import banr from "../../images/948b3ad28ed67e63c760b2ae2c01e709.png";
import library_cover from "../../images/Group 3247.svg";
import search_icn from "../../images/magnifying-glass.svg";
import menu_icn from "../../images/menu-04.svg";
import menu_icn2 from "../../images/menu-04-light.svg";
import menu_icn3 from "../../images/menu-04-purple.svg";
import books from "../../images/book.svg";
import arrow from "../../images/bi_arrow-left-short.svg";
import abt_us1 from "../../images/Rectangle 522.png";
import abt_us2 from "../../images/Rectangle 523.png";
import Explorecard from "../Explorecard";
import Showcard from "../Showcard";
import video_pic from "../../images/Rectangle 255.png";
import video_pic_mobile from "../../images/Rectangle 255_mobile.png";
import circle from "../../images/play-circle.svg";
import scenery from "../../images/Rectangle 550.png";

const Landinghome = () => {
  const btnclass=`text-gray-300  light:text-black purple:text-white py-4 px-4 m-2  font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary hover:bg-[#B17E41] light:hover:bg-[#0B2E784D] light:hover:bg-opacity-30  duration-300 purple:hover:bg-[#FEFEFE] purple:hover:text-secondary`;
  const navheading=`text-white light:text-[#0B2E78] purple:text-black font-AnekLatin light:font-Outfit purple:font-Sora text-base font-medium leading-normal pr-[35px] hover:underline light:hover:text-[#0B2E78] light:hover:underline purple:hover:text-[#6F1AB6] purple:hover:underline   `;
  return (
    <>
      <div
        className="w-full "
        class="background overflow-y-scroll no-scrollbar"
      >
        <div className="w-full h-[103px] lg:h-[69px] border-b border-solid border-white border-opacity-20 bg-opacity-33 bg-[#16131E54] light:bg-brand light:bg-opacity-[68] purple:bg-primary shadow-md backdrop-blur-[8px] flex  items-center justify-between overflow-y-scroll no-scrollbar">
          <div className="flex  items-center justify-center ">
            {/* <img className="w-[43px] h-[57.683px]" src={banr} alt="banner" /> */}
            <div className="logo-pic  purple:logo-pic-purple w-[43px] h-[57.683px]  ml-6  md:max-xl:ml-16 xl:ml-32  "></div>
            <div className="mr-4">
              <h1 className="text-white light:text-black purple:hidden font-Lusitana light:font-SourceSans text-base font-bold leading-6 max-[360px]:leading-4 w-44 min-[360px]:w-60 sm:w-72 lg:w-96 pl-3 md:pl-6 ">
                Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital
              </h1>
            </div>
            <h1 className="hidden purple:block text-[#6F1AB6]  text-base font-Sora font-bold leading-6 w-40 min-[360px]:w-56 sm:w-72 lg:w-96 pl-3 md:pl-6">
              Indian Institute of Medical Sciences
            </h1>
          </div>
          <div className="hidden lg:block">
            <ul>
              <l1 className={`${navheading}`}> Home
              </l1>
              <l1 className={`${navheading}`}>About Us
              </l1>
              <l1 className={`${navheading}`}> Categories
              </l1>
              <l1 className={`${navheading}`}> Featured
              </l1>
            </ul>
          </div>
          <div className="lg:hidden mr-6 md:mr-20">
            <img
              src={menu_icn}
              alt="menu"
              className="light:hidden purple:hidden"
            />
            <img src={menu_icn2} alt="menu" className="hidden light:block" />
            <img src={menu_icn3} alt="menu" className="hidden purple:block" />
          </div>
        </div>
        <div>
          <div className="hidden purple:block w-11/12 min-[1180px]:w-2/3 h-[820px] min-[341px]:h-[750px] min-[430px]:h-[650px] min-[673px]:h-[600px] lg:h-[517px] xl:h-[455px] bg-[#3D1766] bg-opacity-50 absolute inset-0 top-56"></div>
          <div className="pt-12  sm:pt-32 lg:pt-36 purple:pt-28 purple:sm:pt-32 purple:lg:pt-36 flex mx-auto items-center justify-normal ml-6  min-[480px]:ml-12 md:ml-24 min-w-[258px]  ">
            {/* <img src={library_cover} alt="library cover" className="light" /> */}
            <div className="bg-pic light:bg-pic-light purple:bg-pic-purple purple:ellipse "></div>
            <div className="flex   items-center justify-between relative max-[410px]:w-full right-56">
              <div className="hidden purple:min-[500px]:block  ellipse-icon w-[43px] h-[43px] absolute right-[159px]"></div>
              <img
                src={books}
                alt="books icon"
                className="max-[420px]:hidden"
              />
              <h2 className="text-white font-AnekLatin light:font-SourceSans text-base font-normal leading-8 pl-3 whitespace-nowrap">
                Institute Digital Library
              </h2>
            </div>
          </div>
          <div className="z-10 relative ml-6  min-[480px]:ml-12 md:ml-24  ">
            <h1 className="w-11/12 sm:w-3/4 xl:w-[992px]  purple:w-11/12 purple:sm:w-2/3 purple:xl:w-[725px] text-white font-Lusitana  light:font-SourceSans purple:font-Sora  text-5xl purple:text-[35px] font-bold leading-[68px] capitalize   mt-3">
              Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital
            </h1>
            <h1 className="w-3/4 lg:w-[992px] purple:w-3/4 purple:xl:w-[692px]  mt-3 purple:mt-5 text-white font-Lusitana purple:font-Sora  light:font-SourceSans light:italic text-[21px] purple:text-[18px] font-bold leading-20 capitalize">
              Your gateway to a world of Dental information and research
              resources.
            </h1>
            <div className=" mt-[66px] flex  items-start gap-6 justify-normal w-4/5 sm:w-[420px] min-[840px]:w-[661px] px-[18px] py-4 rounded-md border border-solid border-white border-opacity-45 opacity-60 purple:opacity-100 bg-gray-900 purple:bg-white  ">
              {/* <img src={search_icn} alt="search icon" /> */}
              <div className="search-icon  purple:search-icon-purple w-[21px] h-[21px] "></div>
              <input
                className="text-white purple:text-[#3D1766]   bg-gray-900 purple:bg-white font-AnekLatin light:font-SourceSans purple:font-Sora text-base purple:text-[13px] font-medium leading-125 capitalize w-52 h-6"
                placeholder="Search ebooks,journals,papers"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full  bg-[#06040E] light:bg-primary purple:bg-primary ">
        <div className="hidden purple:block">
          <div className=" flex    items-center justify-center bg-[#3D1766] w-full h-full flex-wrap gap-10 max-[955px]:pt-10">
            <div className="ml-6">
              <h1 className="text-white w-11/12 sm:w-[408px] min-[1211px]:w-[664px] font-feature-settings-[clig-off liga-off] font-Sora text-[32px]  font-bold leading-56 capitalize">
                Our Commitment to Academic Excellence
              </h1>
              <p className="text-white  w-11/12 sm:w-[408px] min-[1211px]:w-[539px] font-feature-settings-[clig-off liga-off] font-Sora text-[16px] opacity-60  font-light leading-32 capitalize pt-8">
                At [Institute Name], we are dedicated to fostering a rich
                learning environment through our comprehensive digital library.
                Our mission is to provide a diverse collection of resources,
                including journals, research papers, and educational materials,
                to support the academic pursuits of our students and faculty.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-between mx-6 max-[520px]:w-11/12 ">
              <img
                className="w-[459px] h-[401px]"
                src={scenery}
                alt="scenery"
              />
              <div className=" w-full max-w-[459px] h-[39px] bg-[#B096FA] mt-3"></div>
            </div>
          </div>
        </div>
        <div className="purple:hidden flex items-center   justify-center flex-col  pt-[72px] ">
          <div className="">
            <button className="flex items-center justify-center  h-[26px] p-4 gap-2  border rounded-[5px] border-solid border-white light:border-[#0B2E781A] border-opacity-10 text-[#AE9F0F] light:text-[#0B2E78] text-right font-AnekLatin  light:font-Outfit text-xs font-medium leading-5 capitalize">
              About Us
            </button>
          </div>
          <div className="flex  items-center justify-center min-[1331px]:justify-between mt-[28px] mx-2 flex-wrap">
            <h1 className="w-11/12 sm:w-[576px] text-center text-[#DBDBDB] light:text-[#000000] font-Lusitana  light:font-SourceSans  uppercasetext-gray-300 text-4xl sm:text-5xl font-bold leading-normal tracking-tight uppercase">
              Quality Practical Medical Education
            </h1>
            <p className="w-11/12 md:w-[651px] text-white light:text-[#00000099] light:text-opacity-60 font-AnekLatin  light:font-SourceSans text-base font-medium leading-8">
              Dvirtual Library (DVL) is a leading digital resource hub dedicated
              to empowering excellence in medical education and research. With a
              rich history of serving the community, DVL provides access to a
              comprehensive database of over 25,000 records from 1,000+
              publishers, spanning diverse subjects in medicine, clinical
              sciences, engineering, management, and more .
            </p>
          </div>
          <div className="flex  items-center justify-center min-[1331px]:justify-between min-[1238px]:mt-24 flex-wrap mt-12">
            <img
              className="w-3/4 md:w-[465px]  h-[284px] rounded-[5px] pr-3 "
              src={abt_us1}
              alt="syringe pic"
            />
            <img
              className="w-3/4 md:w-[774px] h-[284px] rounded-[5px] max-[1238px]:mt-4 max-lg:m-7"
              src={abt_us2}
              alt="dental checkup"
            />
          </div>
        </div>
        <div className="flex  flex-col items-center justify-center mt-[39px]">
          <div className="purple:hidden">
            <button className="flex items-center justify-center w-[82px] h-[26px] p-4 gap-2  border rounded-[5px] border-solid border-white light:border-[#0B2E781A] border-opacity-10 text-[#AE9F0F] light:text-[#0B2E78] text-right font-AnekLatin light:font-Outfit text-xs font-medium leading-5 capitalize">
              Statistis
            </button>
          </div>
          <div className="flex  flex-col items-center justify-center mt-[28px] gap-5">
            <h1 className="w-11/12 sm:w-[679px] text-center  text-gray-300 light:text-black purple:text-secondary font-Lusitana light:font-SourceSans purple:font-Sora text-5xl purple:text-4xl font-bold  leading-normal tracking-tight capitalize  ">
              Access to Various resources
            </h1>
            <p className="w-11/12 sm:w-[320px] sm:max-lg:w-[540px] lg:w-[808px] text-white light:text-[#00000099] purple:text-[#696969] text-opacity-60 text-center font-AnekLatin light:font-SourceSans purple:font-Sora text-base font-medium leading-8 ">
              Dvirtual Library (DVL) is a leading digital resource hub dedicated
              to empowering excellence in medical education and research. With a
              rich history of serving the{" "}
            </p>
          </div>
          <div className="flex  items-center flex-wrap mt-[12px] mb-[24px] justify-center">
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
              bgcolor="bg-[#18151F]  light:bg-[#FFFFFF] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
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
              bgcolor="bg-[#18151F] light:bg-[#FFFFFF] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
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
        <div className="w-full h-full  border border-solid border-white light:border-[#3461FF33] border-opacity-20 bg-[#0E0D0F] light:bg-primary purple:bg-secondary flex  flex-col  justify-evenly">
          <div className="flex  flex-col items-start justify-center  rounded-5 ml-7 sm:max-lg:ml-12 lg:ml-24 mt-[42px] gap-5">
            <div className="purple:hidden">
              <button className="w-[82px] h-[26px]   rounded-5 border border-solid border-white light:border-[#0B2E781A] border-opacity-10 text-gray-300 light:text-[#0B2E78] text-right font-AnekLatin light:font-Outfit text-xs font-medium leading-5 capitalize rounded-[5px] pr-4">
                Categories
              </button>
            </div>
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

          <div className="flex  items-center justify-between">
            <div className=" ml-7 sm:max-lg:ml-12 lg:ml-24 mb-2">
              <button className={`${btnclass}`}>
                Journals
              </button>
              <button className={`${btnclass}`}>
                Papers
              </button>
              <button className={`${btnclass}`}>
                ENews
              </button>
              <button className={`${btnclass}`}>
                More
              </button>
            </div>
            {/* <div className="flex  items-center justify-between mr-[68px] max-sm:hidden">
              <button><img src={arrow} alt="arrow icon" /></button>
              <button><img src={arrow} alt="arrow icon" className="rotate-180" /></button>
            </div> */}
          </div>

          <div className="mb-10">
            <Explorecard />
          </div>
          {/* 
          <div className="flex  items-center justify-normal mx-auto sm:hidden">
              <button><img src={arrow} alt="arrow icon" /></button>
              <button><img src={arrow} alt="arrow icon" className="rotate-180" /></button>
            </div> */}
        </div>
        <div className="w-full h-full   border border-solid border-blue-500 border-opacity-20 bg-[#0E0D0F] light:bg-primary  purple:bg-secondary flex  flex-col  justify-evenly mt-[42px] max-md:mt-0 purple:mt-0">
          <div className="flex  flex-col items-start justify-center  rounded-5 ml-7 sm:max-lg:ml-12 lg:ml-24 mt-[42px] gap-5">
            <div className="purple:hidden">
              <button className="w-[82px] h-[26px]   rounded-5 border border-solid border-white light:border-[#0B2E781A] border-opacity-10 text-gray-300 light:text-[#0B2E78] text-right font-AnekLatin light:font-Outfit text-xs font-medium leading-5 capitalize rounded-[5px] pr-4">
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

          <div className="flex  items-center justify-between  sm:w-3/4">
            <div className=" ml-7 mb-2 sm:max-lg:ml-12 lg:ml-24">
              <button className={`${btnclass}`}>   Medical
              </button>
              <button className={`${btnclass}`}>      Pharmacy
              </button>
              <button className={`${btnclass}`}>     Dental
              </button>
              <button className={`${btnclass}`}>   Social Science
              </button>
              <button className={`${btnclass}`}>   Archtecture
              </button>
              <button className={`${btnclass}`}>    Life Science
              </button>
              <button className={`${btnclass}`}> Health Science
              </button>
              <button className={`${btnclass}`}>   Media
              </button>
            </div>
            {/* <div className="flex  items-center justify-between mr-[68px]">
              <img src={arrow} alt="arrow icon" />
              <img src={arrow} alt="arrow icon" className="rotate-180" />
            </div> */}
          </div>

          <div className="mb-10">
            <Explorecard />
          </div>
        </div>

        <div className="flex  items-center justify-center mt-[89px] pb-36  flex-wrap">
          <div className="flex   flex-col items-start justify-center mx-10 ">
            <div className="purple:hidden">
              <button className="flex flex-col items-center justify-center w-[82px] h-[26px] p-4  border border-solid border-white light:border-[#0B2E781A] border-opacity-10 rounded-md text-right text-[#DBDBDB] light:text-[#0B2E78] font-AnekLatin light:font-Outfit text-xs font-medium leading-5 tracking-wide uppercase">
                Video
              </button>
            </div>
            <h1 className="w-11/12 sm:w-[576px] pt-[28px] text-gray-300 light:text-black purple:text-secondary font-Lusitana light:font-SourceSans purple:font-Sora text-5xl purple:text-[32px] font-bold leading-normal tracking-wider capitalize">
              Watch this video to know more
            </h1>
            <p className="w-11/12 sm:w-[578px] text-white light:text-[#00000099] purple:text-[#696969] text-opacity-60 font-AnekLatin light:font-SourceSans purple:font-Sora text-base font-medium leading-8 pt-4">
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
          <div className="mt-5 mx-4 relative ">
            <img
              src={video_pic}
              alt="video icon"
              className="w-full h-auto hidden sm:block"
            />
            <img
              src={video_pic_mobile}
              alt="video icon mobile"
              className="w-full h-auto sm:hidden"
            />
            <img
              className="absolute bottom-[157px] left-48 sm:left-64  h-auto max-[455px]:hidden"
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
