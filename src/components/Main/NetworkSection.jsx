import React from "react";

function NetworkSection() {
  return (
    <section className="relative py-24  lg:py-32  overflow-hidden home-globe ">
      <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-3 lg:mr-auto   ">
        <div className="flex flex-col lg:flex-row justify-between relative xl:mb-[13.375rem] ">
          <div className="flex flex-col w-full xl:max-w-[22rem]  pb-0 ">
            <div className="font-semibold text-cyan-600 text-sm xl:text-lg mb-4 z-10">
              شبکه ابر آروان
            </div>
            <div className="text-2xl xl:text-4xl font-semibold text-white mb-6 ltr:leading-[3rem]">
              گستره‌ای به وسعت جهان
            </div>
            <div className="text-base lg:text-lg text-cyan-200 font-normal mb-8 lg:mb-20 text-balance max-w-[98%]">
              ابر آروان با در اختیار داشتن ۴۰ پاپ‌سایت در بیش از ۳۰ کشور و ۴
              دیتاسنتر در نقاط مختلف ایران به کسب‌وکارهای مختلف امکان می‌دهد تا
              به‌کمک امن‌ترین و پایدارترین زیرساخت‌های ابری سرویس‌های خود را
              توسعه دهند.
            </div>
          </div>
          <div className="xl:absolute xl:-left-28 xl:ltr:-right-28 hidden xl:block">
            <div className="relative  ">
              <img
                src="https://www.arvancloud.ir/images/v6/home/globe.svg"
                alt=""
                draggable="false"
                loading="lazy "
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-y-4 ">
          <div className="flex flex-col relative p-4 font-semibold  ">
            <div className="text-xl  mb-2 lg:mb-3   text-cyan-300 px-2 flex items-center   before:contents-[''] before:bg-cyan-300 before:h-6 before:w-0.5 before:absolute before:right-0">
              99.99%
            </div>
            <div className="text-base text-white">آپ‌تایم در محصولات</div>
          </div>
          <div className="flex flex-col relative p-4 font-semibold  ">
            <div className="text-xl  mb-2 lg:mb-3   text-cyan-300 px-2 flex items-center   before:contents-[''] before:bg-cyan-300 before:h-6 before:w-0.5 before:absolute before:right-0">
              ۵۰۰ میلیون
            </div>
            <div className="text-base text-white"> درخواست در ساعت </div>
          </div>
          <div className="flex flex-col relative p-4 font-semibold  ">
            <div className="text-xl  mb-2 lg:mb-3   text-cyan-300 px-2 flex items-center   before:contents-[''] before:bg-cyan-300 before:h-6 before:w-0.5 before:absolute before:right-0">
              ۴۰
            </div>
            <div className="text-base text-white"> پاپ‌سایت در دنیا</div>
          </div>
          <div className="flex flex-col relative p-4 font-semibold  ">
            <div className="text-xl  mb-2 lg:mb-3   text-cyan-300 px-2 flex items-center   before:contents-[''] before:bg-cyan-300 before:h-6 before:w-0.5 before:absolute before:right-0">
              ۲۰۰+ هزار
            </div>
            <div className="text-base text-white"> مشتری فعال </div>
          </div>
        </div>
        <div className="block mt-10 text-center xl:hidden">
          <img
            src="https://www.arvancloud.ir/images/v6/home/globe.png"
            alt="شبکه ابر آروان"
            draggable="false"
            loading="lazy"
            width=""
            height=""
          />
        </div>
      </div>
    </section>
  );
}

export default NetworkSection;
