import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="relative py-24 lg:py-32 bg-[rgb(246,249,252)] home-banner-bottom">
      <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto ">
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between">
          <div className="flex flex-col gap-y-6 w-full lg:w-2/3 mb-12 lg:mb-0 z-10">
            <div className=" text-white text-2xl lg:text-[2rem] xl:text-[2.625rem] font-semibold leading-[50px]">
              با زیرساخت یکپارچه ابر آروان سریع‌تر و امن‌تر دیده شوید
            </div>
            <div className="text-cyan-200 text-base xl:text-xl font-normal">
              ابر آروان با شبکه‌ای گسترده از پاپ‌سایت‌ها و دیتاسنترها در نقاط
              پرترافیک و مهم ایران و جهان، زیرساختی امن و پایدار را در اختیار
              بیش از ۱۲۰هزار کسب‌وکار آنلاین قرار می‌دهد تا از همه جای دنیا در
              دسترس کاربران‌شان قرار بگیرند.
            </div>
          </div>
          <div className="flex lg:flex-col justify-center gap-x-3 lg:gap-y-4 z-20">
            <Link
              href="https://accounts.arvancloud.ir/login?lang=fa"
              className="w-44 h-10 text-base font-semibold lg:w-56 lg:h-12 rounded-lg flex justify-center items-center transition-colors bg-white text-darkGreen-200 hover:bg-gray-50"
            >
              شروع کنید
            </Link>
            <Link
              href="https://www.arvancloud.ir/fa/contact/sales"
              className="w-44 h-10 text-base font-semibold lg:w-56 lg:h-12 rounded-lg flex justify-center items-center transition-colors text-white border border-white hover:bg-cyan-900"
            >
              تماس با فروش
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
