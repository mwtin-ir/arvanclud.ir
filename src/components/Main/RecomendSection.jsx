import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainRecommendCard from "../Cards/Home/MainRecommendCard";
//2700
function RecomendSection() {
  const [progress, setProgress] = useState(0);
  const [currenTab, setCurrentTab] = useState(0);
  const recommend = useRef(null);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden  ">
      <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto ">
        <div className="flex flex-col overflow-x-auto">
          <div className="text-xl font-semibold text-cyan-600">
            راهکارهای ابری آروان
          </div>
          <div className="font-semibold text-gray-800 text-2xl xl:text-3xl mb-6 z-10">
            راه‌حل‌هایی برای یک معماری امن و پایدار
          </div>
          <p className="font-normal text-base text-gray-600 mb-16 z-10 w-full lg:w-3/4">
            شما می‌توانید متناسب با صنعت و اندازه شرکت خود یکی از راهکارهای ابری
            آروان را به کار گیرید. کار با محصولات ابر آروان آسان است؛ ولی اگر در
            زمینه‌ی راه‌اندازی هر یک از سرویس‌های ما به راهنمایی نیاز داشتید،
            می‌توانید با متخصصان ابری آروان تماس بگیرید تا کوچی امن، سریع و آسان
            را تجربه کنید.
          </p>
        </div>
        <div className="flex lg:grid grid-cols-4 px-4 sm:px-0 justify-start gap-x-4 mb-14 lg:mb-16 overflow-x-auto overflow-y-hidden">
          <div
            className={` ${currenTab ===0 ? 'border-b-2 border-cyan-600 text-cyan-600 ': 'text-gray-800'}  relative min-w-fit `}
            onClick={() => setCurrentTab(0)}
          >
            <div className="relative cursor-pointer">
              <div className="flex items-center justify-start gap-x-3 pb-2 font-semibold text-base xl:text-lg">
                <img src="./images/svgexport-9 (3).svg" alt="" />
                بر اساس صنعت
              </div>
            </div>
          </div>
          <div
        className={` ${currenTab ===1 ? 'border-b-2 border-cyan-600 text-cyan-600 ': 'text-gray-800'}  relative min-w-fit `}
            onClick={() => setCurrentTab(1)}
          >
            <div className="relative cursor-pointer">
              <div className="flex items-center justify-start gap-x-3 pb-2 font-semibold text-base xl:text-lg">
                <img src="./images/svgexport-10.svg" alt="" />
                بر اساس کاربرد
              </div>
            </div>
          </div>
          <div
        className={` ${currenTab ===2 ? 'border-b-2 border-cyan-600 text-cyan-600 ': 'text-gray-800'}  relative min-w-fit `}
            onClick={() => setCurrentTab(2)}
          >
            <div className="relative cursor-pointer">
              <div className="flex items-center justify-start gap-x-3 pb-2 font-semibold text-base xl:text-lg">
                <img src="./images/svgexport-11.svg" alt="" />
                بر اساس اندازه شرکت
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 overflow-x-auto overflow-visible py-3 px-2 ">
          {currenTab === 0 ? (
            <>
              <MainRecommendCard
                to="https://www.arvancloud.ir/blog/fa/"
                title="
خدمات مالی "
                icon="./images/خدمات مالی.svg"
              >
                راهکاری سریع و مقیاس‌پذیر برای ساخت و اجرای نرم‌افزارهای خدمات
                مالی
              </MainRecommendCard>
              <MainRecommendCard
                to="https://www.arvancloud.ir/blog/fa/"
                title="
                                        ارز دیجیتال
                                    "
                icon="./images/ارز دیجیتال.svg"
              >
                راهکاری امن و کارآمد برای تریدرها و صرافی‌های آنلاین ارزهای
                دیجیتال
              </MainRecommendCard>
              <MainRecommendCard
                to="https://www.arvancloud.ir/blog/fa/"
                title="
                                        فروشگاه‌های آنلاین
                                    "
                icon="./images/فروشگاه_های آنلاین.svg"
              >
                راهکار یکپارچه و مقیاس‌پذیر ابری برای زیرساخت فروشگاه‌های
                اینترنتی و آنلاین
              </MainRecommendCard>

              <MainRecommendCard
                to="https://www.arvancloud.ir/blog/fa/"
                title="آموزش آنلاین"
                icon="./images/آموزش آنلاین.svg"
              >
                راهکاری دردسترس برای نسل نوین خدمات آموزشی و تامین نیازهای
                زیرساختی آموزش آنلاین
              </MainRecommendCard>
            </>
          ) : currenTab === 1 ? (
            <>
              <MainRecommendCard
                to="https://www.arvancloud.ir/blog/fa/"
                title="بازیابی پس از دیزستر
                                     "
                icon="./images/بازیابی پس از دیزستر.svg"
              >

راهکاری قابل اتکا برای بازیابی اطلاعات پس از بحران با ارایه طرح Disaster Recovery
                                
              </MainRecommendCard>
              <MainRecommendCard
                to="https://www.arvancloud.ir/blog/fa/"
                title=" CDN بانکی
  "
                icon="./images/CDN بانکی.svg"
              >

راهکاری امن و انعطاف‌پذیر برای بانک‌ها با در نظر گرفتن الزامات شاپرک و شبکه‌ی بانکی ایران
                                
              </MainRecommendCard>
              <MainRecommendCard
                to="https://www.arvancloud.ir/blog/fa/"
                title=" امنیت ابری
 "
                icon="./images/امنیت ابری.svg"
              >
راهکاری قابل اطمینان، دقیق و سریع برای تامین امنیت سایبری کسب‌وکارهای آنلاین

              </MainRecommendCard>
              <MainRecommendCard
                to="https://www.arvancloud.ir/blog/fa/"
                title=" امنیت ابری
 "
                icon="./images/ابر خصوصی.svg"
              >
راهکاری قابل اطمینان، دقیق و سریع برای تامین امنیت سایبری کسب‌وکارهای آنلاین

              </MainRecommendCard>
            </>
          ) : (
            <>
              <MainRecommendCard
                to="https://www.arvancloud.ir/blog/fa/"
                title="
خدمات مالی "
                icon="./images/خدمات مالی.svg" 
              >
                راهکاری سریع و مقیاس‌پذیر برای ساخت و اجرای نرم‌افزارهای خدمات
                مالی
              </MainRecommendCard>
              <MainRecommendCard
                to="https://www.arvancloud.ir/blog/fa/"
                title="
                                        ارز دیجیتال
                                    "
                icon="./images/ارز دیجیتال.svg"
              >
                راهکاری امن و کارآمد برای تریدرها و صرافی‌های آنلاین ارزهای
                دیجیتال
              </MainRecommendCard>

            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default RecomendSection;
