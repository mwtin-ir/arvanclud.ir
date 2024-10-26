import React from "react";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <section className="relative scroll-mt-16 xl:scroll-mt-[8.75rem] home-banner">
      <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto ">
        <div className="home-banner__content flex flex-wrap justify-between px-4 py-16 lg:px-20 lg:py-[4.5rem] rounded-3xl w-full relative overflow-hidden">
          <div className="flex flex-col justify-between max-w-full lg:max-w-lg xl:max-w-3xl gap-y-6 mb-16 lg:mb-0 w-full lg:w-3/4">
            <div className="text-white text-2xl lg:text-[2rem] xl:text-[2.625rem] font-semibold">
              تجربه‌ای نو از توسعه فنی زیرساخت
            </div>
            <div className="text-white text-base lg:text-xl font-normal">
              با استفاده از خدمات DevOps آروان‌کلاد، پباده‌سازی و نگهداری
              سرویس‌های پیچیده‌ی کسب‌وکار خود را به ما بسپارید و زیرساختی به‌روز
              و مطابق با استاندارهای جهانی تحویل بگیرید.
            </div>
          </div>
          <div className="absolute rtl:left-0 ltr:right-0 bottom-0 rtl:xl:top-0">


          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-x-4 lg:flex-col gap-y-4 justify-between w-full lg:w-fit">
            <Link
              to="https://www.arvancloud.ir/fa/devops"
              className="w-full h-10 font-semibold sm:w-56 sm:h-12 rounded-lg flex justify-center items-center text-base transition-colors bg-white text-darkGreen-200 hover:bg-gray-50 z-10"
              id="home-solutions-cta_start-btn"
            >
              درخواست مشاوره
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
