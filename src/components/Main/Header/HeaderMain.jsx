import React from "react";
import "../../../style/home.css";
import { NavLink } from "react-router-dom";
function HeaderMain() {
  return (
    <section className="main-header overflow-hidden relative pt-[26px] pb-[262px] sm:pt-[106px] sm:pb-[458px] md:py-[140px] lg:pt-[128px] lg:pb-[146px]  w-[100%]  flex  items-center justify-center xl:justify-start flex-col xl:flex-row  lg:max-h-[620px]">
      <div className="flex flex-col items-start justify-center xl:px-[12rem] px-[2rem] lg:px-[1rem] gap-2 lg:gap-0">
        <h2 className="text-[28px] md:text-[35px] lg:text-[42px] xl:text-[50px] font-semibold text-gray-800 mb-1">
          زیر ساخت یکپارچه ابری
        </h2>
        <h3 className="text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] mb-2 text-[#394460]">
          جهانی امن تر , سریع تر و در دسترس تر
        </h3>
        <p className="text-[16px] lg:text-[18px] font-normal md:max-w-[350px]  xl:max-w-[580px] mb-3 max-w-[100%] lg:max-w-[400px] text-gray-700">
          با استفاده از زیرساخت یکپارچه، پایدار، امن و همیشه در دسترس ابر آروان،
          بدون دغدغه‌های زیرساختی به وب‌سایت و سرویس‌های خود سرعت ببخشید و
          تجربه‌ی کاربران‌تان را به شکل چشم‌گیری بهبود دهید.
        </p>
        <div className="flex items-center gap-4">
          <NavLink  to='/login'  className='text-sm lg:text-base rounded-lg px-5 py-3 font-semibold border text-center  bg-cyan-600 hover:bg-cyan-800  text-white  w-44 lg:w-auto transition-all z-10 '>شروع کنید</NavLink>
          <NavLink to='https://www.arvancloud.ir/fa/contact/sales' className='text-sm lg:text-base rounded-lg text-center px-4 py-3 font-semibold border border-cyan-600  text-cyan-800 hover:text-white  hover:bg-cyan-700 w-44 lg:w-auto transition-all z-10'>تماس با فروش</NavLink>
        </div>
      </div>
    </section>
  );
} 

export default HeaderMain;
