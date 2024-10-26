import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ButtonMenu from "./ButtonMenu";
import { FaGripLines } from "react-icons/fa";

function Header() {
  const [showLang, setShowLang] = useState(false);
  const iconSpanRef = useRef(null);
  const lngRef = useRef(null);
  const {path}=useLocation()
  
  const clickHandler = (e) => {
    if (
      lngRef.current &&
      !iconSpanRef.current.contains(e.target) &&
      iconSpanRef.current &&
      !lngRef.current.contains(e.target)
    ) {
      setShowLang(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);
  return (
    <header className="flex xl:flex-col items-center justify-between  bg-white sticky  top-0 left-0  z-40   w-[100%] ">

        <div className=" flex items-center justify-between py-5 px-4 xl:px-[3rem] xl:w-[1280px]">
          <Link className="flex items-center" to="/">
            <img
              src="https://www.arvancloud.ir/images/v6/svg/logo-header-desktop-v6.svg"
              alt="arvandlogo"
              width="154"
              height="20"
               className="flex items-center ml-5 xl:ml-0" 
            />
          </Link>

          <div className="xl:flex items-center hidden gap-6 text-gray-700 text-sm font-medium ">
            <Link
              to="https://news.arvancloud.ir/fa/"
              className="hover:text-green-600 transform duration-200"
            >
              اتاق خبر
            </Link>
            <Link
              to="https://www.arvancloud.ir/blog/fa/"
              className="hover:text-green-600 transform duration-200"
            >
              بلاگ
            </Link>
            <Link
              to="https://www.arvancloud.ir/fa/contact"
              className="hover:text-green-600 transform duration-200"
            >
              تماس با ما
            </Link>
            <span className="text-gray-400 text-[1.2rem]">|</span>
            <span
              className="flex items-center gap-[5px]  relative"
              onClick={() => setShowLang((show) => !show)}
              ref={iconSpanRef}
            >
              <span className="hover:text-green-600 flex items-center gap-1 transform duration-200">
                <div
                  className={`transition-transform duration-400 ${
                    !showLang ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <IoIosArrowUp />
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9987 14.6693C11.6806 14.6693 14.6654 11.6845 14.6654 8.0026C14.6654 4.32071 11.6806 1.33594 7.9987 1.33594C4.3168 1.33594 1.33203 4.32071 1.33203 8.0026C1.33203 11.6845 4.3168 14.6693 7.9987 14.6693Z"
                    className="stroke-current"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M1.33203 8H14.6654"
                    className="stroke-current"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7.9987 1.33594C9.66622 3.16151 10.6139 5.53063 10.6654 8.0026C10.6139 10.4746 9.66622 12.8437 7.9987 14.6693C6.33118 12.8437 5.38353 10.4746 5.33203 8.0026C5.38353 5.53063 6.33118 3.16151 7.9987 1.33594V1.33594Z"
                    className="stroke-current"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              {showLang && (
                <div
                  ref={lngRef}
                  className="flex flex-col gap-2 p-2  left-0 bg-white absolute top-10 shadow-2xl rounded-lg"
                >
                  {["English", "العربية", "Türkiye", "Portuguese"].map((li) => {
                    return (
                      <span className="py-2 px-6 rounded-lg hover:bg-gray-300 hover:text-[none] text-center cursor-pointer">
                        {li}
                      </span>
                    );
                  })}
                </div>
              )}
            </span>
          </div>
        </div>
     

        <div className=" flex items-center justify-between md:pt-2 md:pb-4  md:px-4 xl:px-[3rem] gap-4 xl:gap-0 px-3 xl:w-[1280px]">
          <div className=" items-center gap-9 hidden lg:flex ">
            <ButtonMenu text="محصولات">
              <IoIosArrowDown className="w-[20px] h-[16px]" />
            </ButtonMenu>
            <ButtonMenu text="راهکارها">
              <IoIosArrowDown className="w-[20px] h-[16px]" />
            </ButtonMenu>
            <ButtonMenu text="قیمت گذاری ">
              <IoIosArrowDown className="w-[20px] h-[16px]" />
            </ButtonMenu>
            <ButtonMenu text="منابع دانش">
              <IoIosArrowDown className="w-[20px] h-[16px]" />
            </ButtonMenu>
            
<Link to='/enterprise' ><ButtonMenu text="خدمات سازمانی" ></ButtonMenu></Link>
           <Link to='/devops'> <ButtonMenu text="خدمات دواپس"></ButtonMenu></Link>
          </div>
          <div className="hidden md:flex items-center justify-center gap-2">
            <Link to='/login' className="border bg-inherit border-gray-200 text-center min-w-[72px]  text-gray-700 text-sm rounded-lg px-5 h-10  py-2 font-semibold ">
              ورود
            </Link>
            <Link to='/register' className="border bg-[rgb(0,112,112)]   border-gray-200 text-center text-white  text-sm rounded-lg min-w-[72px] px-5 h-10  py-2 font-semibold">
              ثبت نام
            </Link>
          </div>
         <div className="flex items-center xl:hidden">
          <FaGripLines className="text-[2.3rem] "/>
          </div>         
        </div>

    </header>
  );
}

export default Header;
