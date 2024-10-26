import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function Enterprise() {
  return (
    <>
      <Header />
      <section className="relative overflow-hidden pb-0 pt-14 lg:py-16 lg:max-h-[530px] lg:h-[530px] lg:pt-32 lg:pb-[136px] mt-[4.5rem] xl:mt-0">
        <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto relative">
          <img
            src="https://www.arvancloud.ir/images/v6/contact/enterprise/hero/Vector.jpg"
            alt=""
            draggable="false"
            loading="eager"
            className="absolute w-[700px] h-[600px] scale-[2.2] top-0  -left-[200px] hidden lg:block"
          />
          <img
            src="https://www.arvancloud.ir/images/v6/contact/enterprise/hero/bottom-right.svg"
            alt=""
            draggable="false"
            loading="eager"
            className="absolute w-[full] h-full xl:h-[800px] top-0  left-0 right-0 block lg:hidden"
          />
          <img
            src="https://www.arvancloud.ir/images/v6/contact/enterprise/hero/top-left.svg"
            alt=""
            draggable="false"
            loading="eager"
            className="absolute w-[full] h-full xl:h-[800px] top-32 ltr:top-32 left-[200px] block lg:hidden"
          />
          <img
            src="https://www.arvancloud.ir/images/v6/contact/enterprise/hero/bottom-left.svg"
            alt=""
            draggable="false"
            loading="eager"
            className="absolute w-[full] h-full xl:h-[800px] top-24  left-0  block lg:hidden"
          />
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-full lg:max-w-sm xl:max-w-[585px] text-start lg:text-start z-20">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl  xl:leading-[3.75rem] text-gray-900 font-semibold mb-6">
                خدمات سازمانی ابر آروان
              </h1>
              <div className="text-sm lg:text-lg text-gray-700 mb-6 lg:mb-14">
                اگر سازمان یا شرکتی با مقیاس بزرگ هستید و به زیرساخت‌های
                سفارشی‌سازی‌شده نیاز دارید، می‌توانید با استفاده از خدمات
                سازمانی ابر آروان به‌تناسب شرایط کسب‌وکار خود از محصولات متنوع
                ابری استفاده کنید.
              </div>
              <div
                className="flex gap-x-4 justify-start"
                x-data=""
                x-products-nav=""
              >
                <Link
                  to="#request"
                  className="flex items-center justify-center w-44 h-12 rounded-lg text-base font-semibold py-3 bg-cyan-700 text-white hover:bg-cyan-800 cursor-pointer transition-all"
                >
                  ثبت درخواست
                </Link>
              </div>
            </div>
            <div className="relative lg:absolute top-0 bottom-0 mt-14 lg:-mt-32">
              <img
                src="https://www.arvancloud.ir/images/v6/contact/enterprise/hero/hero-fa.svg"
                alt="خدمات سازمانی ابر آروان"
                draggable="false"
                loading="eager"
                className="hidden lg:block lg:mr-[28.5rem] xl:mr-[37.5rem]"
              />
              <img
                src="https://www.arvancloud.ir/images/v6/contact/enterprise/hero/hero-fa.svg"
                alt="خدمات سازمانی ابر آروان"
                draggable="false"
                loading="lazy"
                className="block mx-auto mb-0 lg:-mb-24 lg:hidden"
              />
            </div>
          </div>
        </div>
      </section>
      <nav className="bg-[#F6F9FC] shadow-md sticky lg:top-[4.4rem] xl:top-[7.5rem] z-30 hidden lg:block">
        <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto relative">
          <div className="flex justify-center items-center gap-x-8 relative text-base">
            <button className="w-[8rem] text-center py-5">
              <Link
                to="#benifits"
                className="products-nav__link text-base text-gray-800 hover:text-cyan-600"
              >
                مزیت‌ها
              </Link>
            </button>
            <button className="w-[8rem] text-center py-5">
              <Link
                to="#special-facilities"
                className="products-nav__link text-base text-gray-800 hover:text-cyan-600"
              >
                امکانات ویژه
              </Link>
            </button>
            <button className="w-[8rem] text-center py-5">
              <Link
                to="#certificates"
                className="products-nav__link text-base text-gray-800 hover:text-cyan-600"
              >
                گواهی‌نامه‌ها
              </Link>
            </button>
            <button className="w-[8rem] text-center py-5">
              <Link
                to="#support"
                className="products-nav__link text-base text-gray-800 hover:text-cyan-600"
              >
                پشتیبانی
              </Link>
            </button>
            <button className="w-[8rem] text-center py-5">
              <Link
                to="#contract-path"
                className="products-nav__link text-base text-gray-800 hover:text-cyan-600"
              >
                مسیر عقد قرارداد
              </Link>
            </button>
            <button className="w-[8rem] text-center py-5">
              <Link
                to="#request"
                className="products-nav__link text-base text-gray-800 hover:text-cyan-600"
              >
                ثبت درخواست
              </Link>
            </button>
            <div
              className="products-nav__li-border opacity-0"
              style={{ left: "928px" }}
            ></div>
          </div>
        </div>
      </nav>

      <section className="relative py-24 lg:py-32">
        <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-10">
            <div className="flex flex-col relative px-4">
              <img
                src="https://www.arvancloud.ir/images/v6/contact/enterprise/intro/customize-product.svg"
                alt="محصولات سفارشی"
                draggable="false"
                loading="lazy"
                width="48"
                height="48"
                className="mb-5 lg:mb-6 w-10 h-10 lg:w-12 lg:h-12"
              />
              <div className="text-lg text-gray-800 font-semibold before:content-[''] before:absolute before:rtl:right-0 before:ltr:left-0 before:w-0.5 before:h-6 before:bg-cyan-600 mb-4 xl:mb-5">
                محصولات سفارشی
              </div>
              <div className="text-base text-gray-500">
                می‌توانید بر اساس نیازهای کسب‌وکارتان، از محصولات
                سفارشی‌سازی‌شده‌ی ابر آروان استفاده کنید و بدون دغدغه‌ سرویس‌های
                خود را توسعه دهید.
              </div>
            </div>
            <div className="flex flex-col relative px-4">
              <img
                src="https://www.arvancloud.ir/images/v6/contact/enterprise/intro/support.svg"
                alt="پشتیبانی سازمانی"
                draggable="false"
                loading="lazy"
                width="48"
                height="48"
                className="mb-5 lg:mb-6 w-10 h-10 lg:w-12 lg:h-12"
              />
              <div className="text-lg text-gray-800 font-semibold before:content-[''] before:absolute before:right-0  before:w-0.5 before:h-6 before:bg-cyan-600 mb-4 xl:mb-5">
                پشتیبانی سازمانی
              </div>
              <div className="text-base text-gray-500">
                شما می‌توانید در سریع‌ترین زمان به کارشناس‌های فنی ابر آروان
                دسترسی داشته باشید و به‌راحتی مشکلات خود را برطرف کنید.
              </div>
            </div>
            <div className="flex flex-col relative px-4">
              <img
                src="https://www.arvancloud.ir/images/v6/contact/enterprise/intro/security.svg"
                alt="امنیت بالا"
                draggable="false"
                loading="lazy"
                width="48"
                height="48"
                className="mb-5 lg:mb-6 w-10 h-10 lg:w-12 lg:h-12"
              />
              <div className="text-lg text-gray-800 font-semibold before:content-[''] before:absolute before:right-0 before:w-0.5 before:h-6 before:bg-cyan-600 mb-4 xl:mb-5">
                امنیت بالا
              </div>
              <div className="text-base text-gray-500">
                می‌توانید از همه‌ی قابلیت‌های امنیتی آروان در شبکه توزیع محتوا
                یا سایر محصول‌ها استفاده کنید و سطح امنیت زیرساخت‌های خود را
                ارتقا دهید.
              </div>
            </div>
            <div className="flex flex-col relative px-4">
              <img
                src="https://www.arvancloud.ir/images/v6/contact/enterprise/intro/price.svg"
                alt="قیمت ثابت"
                draggable="false"
                loading="lazy"
                width="48"
                height="48"
                className="mb-5 lg:mb-6 w-10 h-10 lg:w-12 lg:h-12"
              />
              <div className="text-lg text-gray-800 font-semibold before:content-[''] before:absolute before:right-0  before:w-0.5 before:h-6 before:bg-cyan-600 mb-4 xl:mb-5">
                قیمت ثابت
              </div>
              <div className="text-base text-gray-500">
                هزینه‌ی تمام‌شده‌ی محصولات شما هنگام افزایش قیمت‌های دوره‌ای،
                تغییر نمی‌کند و می‌توانید با نرخ‌های قبلی صورت‌حساب خود را
                پرداخت کنید.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32 bg-[#EEF4FB]">
        <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto ">
          <div className="w-full text-sm lg:text-base xl:text-lg text-cyan-600 font-semibold mb-6">
            امکانات ویژه
          </div>
          <div className="flex flex-col gap-x-4  mb-12 lg:mb-32 lg:flex-row">
            <div className="w-full lg:w-2/4 flex flex-col relative">
              <div className="flex flex-col">
                <div className="text-[1.75rem] lg:text-[2.125rem] xl:text-[2.375rem] text-gray-800 font-semibold mb-10 z-10">
                  قرارداد و شیوه‌ی پرداخت منعطف
                </div>
                <div className="text-base lg:text-lg text-gray-600 mb-8 lg:mb-10 z-10">
                  با استفاده از خدمات سازمانی شما می‌توانید به‌تناسب نیاز
                  کسب‌وکارتان از بسته‌های چند محصولی و قابلیت‌های
                  سفارشی‌سازی‌شده‌ی محصولات و خدمات ابر آروان استفاده کنید و
                  هزینه‌های آن را در بازه‌های زمانی ماهانه، سه‌ماهه یا سالانه
                  بپردازید. سرویس‌های مشتریان سازمانی در وایت‌لیست آروان قرار
                  می‌گیرد و با منفی شدن اعتبار کیف پول دسترسی به زیرساخت‌های
                  مورد استفاده قطع نمی‌شود.
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 z-10">
                <div className="flex gap-x-2 items-center bg-white rounded-lg py-5 px-4 border border-gray-50 shadow-lg">
                  <img
                    src="https://www.arvancloud.ir/images/v6/contact/enterprise/special-facilities/contract-icon.svg"
                    alt="قرارداد منعطف"
                    draggable="false"
                    loading="lazy"
                    width="20"
                    height="20"
                  />
                  <div className="text-sm lg:text-base text-gray-900 font-semibold">
                    قرارداد منعطف
                  </div>
                </div>
                <div className="flex gap-x-2 items-center bg-white rounded-lg py-5 px-4 border border-gray-50 shadow-lg">
                  <img
                    src="https://www.arvancloud.ir/images/v6/contact/enterprise/special-facilities/packages.svg"
                    alt="بسته‌های چندمحصولی"
                    draggable="false"
                    loading="lazy"
                    width="20"
                    height="20"
                  />
                  <div className="text-sm lg:text-base text-gray-900 font-semibold">
                    بسته‌های چندمحصولی
                  </div>
                </div>
                <div className="flex gap-x-2 items-center bg-white rounded-lg py-5 px-4 border border-gray-50 shadow-lg">
                  <img
                    src="https://www.arvancloud.ir/images/v6/contact/enterprise/special-facilities/packages.svg"
                    alt="پرداخت‌های مدت‌دار"
                    draggable="false"
                    loading="lazy"
                    width="20"
                    height="20"
                  />
                  <div className="text-sm lg:text-base text-gray-900 font-semibold">
                    پرداخت‌های مدت‌دار
                  </div>
                </div>
                <div className="flex gap-x-2 items-center bg-white rounded-lg py-5 px-4 border border-gray-50 shadow-lg">
                  <img
                    src="https://www.arvancloud.ir/images/v6/contact/enterprise/special-facilities/item.svg"
                    alt="امکان پس پرداخت"
                    draggable="false"
                    loading="lazy"
                    width="20"
                    height="20"
                  />
                  <div className="text-sm lg:text-base text-gray-900 font-semibold">
                    امکان پس پرداخت
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/4 z-10 flex">
              <img
                src="https://www.arvancloud.ir/images/v6/contact/enterprise/special-facilities/contract.svg"
                alt="قرارداد و شیوه‌ی پرداخت منعطف"
                draggable="false"
                loading="lazy"
                className="mx-auto lg:mx-auto z-10"
              />
            </div>
          </div>
          <div className="flex flex-col gap-x-4 mb-4  lg:flex-row-reverse">
            <div className="w-full lg:w-2/4 flex flex-col relative">
              <div className="flex flex-col">
                <div className="text-[1.75rem] lg:text-[2.125rem] xl:text-[2.375rem] text-gray-800 font-semibold mb-10 z-10">
                  مدیر مشتری اختصاصی
                </div>
                <div className="text-base lg:text-lg text-gray-600 mb-8 lg:mb-10 z-10">
                  پس از عقد قرارداد سازمانی یک مدیر مشتری (Account Manager) در
                  ابر آروان به شما اختصاص داده می‌شود و پیگیری همه‌ی کارها شامل
                  قرارداد، پرداخت‌ها، رفع مشکلات و … را با اولویت بالا بر عهده
                  می‌گیرد.
                  <br />
                  علاوه‌بر این، شما می‌توانید با کمک مدیر مشتری فنی نیز در
                  سریع‌ترین زمان تمام تنظیمات و پیکربندی‌های فنی مورد نیاز
                  کسب‌وکارتان را انجام دهید و با اطمینان خاطر از پایداری
                  سرویس‌های خود بدون تحمل فشارهای کاری بزنگاه‌های خطر را مدیریت
                  کنید.
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 z-10">
                <div className="flex gap-x-2 items-center bg-white rounded-lg py-5 px-4 border border-gray-50 shadow-lg">
                  <img
                    src="https://www.arvancloud.ir/images/v6/contact/enterprise/special-facilities/follow.svg"
                    alt="پیگیری‌های اداری و مالی"
                    draggable="false"
                    loading="lazy"
                    width="20"
                    height="20"
                  />
                  <div className="text-sm lg:text-base text-gray-900 font-semibold">
                    پیگیری‌های اداری و مالی
                  </div>
                </div>
                <div className="flex gap-x-2 items-center bg-white rounded-lg py-5 px-4 border border-gray-50 shadow-lg">
                  <img
                    src="https://www.arvancloud.ir/images/v6/contact/enterprise/special-facilities/manage.svg"
                    alt="مدیریت و پیکربندی اختصاصی"
                    draggable="false"
                    loading="lazy"
                    width="20"
                    height="20"
                  />
                  <div className="text-sm lg:text-base text-gray-900 font-semibold">
                    مدیریت و پیکربندی اختصاصی
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/4 z-10 flex">
              <img
                src="https://www.arvancloud.ir/images/v6/contact/enterprise/special-facilities/speed.svg"
                alt="مدیر مشتری اختصاصی"
                draggable="false"
                loading="lazy"
                className="mx-auto lg:mx-auto z-10"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="pb-24 pt-2 lg:pb-32 relative bg-[#EEF4FB]">
    
    <div class="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto">
        <div class="flex flex-col">
            <div class="text-gray-900 text-2xl lg:text-[40px] font-semibold mb-10 lg:mb-14 z-20">
                گواهی‌نامه‌های ابر آروان
            </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-2">
                            <div class="flex items-center justify-center bg-white rounded-lg py-4 px-4 border border-gray-50 shadow-lg z-20">
                    <img src="https://www.arvancloud.ir/images/v6/contact/enterprise/certificates/afta.svg" alt="گواهی‌نامه‌های ابر آروان" draggable="false" loading="lazy" />
                </div>
                            <div class="flex items-center justify-center bg-white rounded-lg py-4 px-4 border border-gray-50 shadow-lg z-20">
                    <img src="https://www.arvancloud.ir/images/v6/contact/enterprise/certificates/padafand.svg" alt="گواهی‌نامه‌های ابر آروان" draggable="false" loading="lazy" />
                </div>
                            <div class="flex items-center justify-center bg-white rounded-lg py-4 px-4 border border-gray-50 shadow-lg z-20">
                    <img src="https://www.arvancloud.ir/images/v6/contact/enterprise/certificates/senf.svg" alt="گواهی‌نامه‌های ابر آروان" draggable="false" loading="lazy" />
                </div>
                            <div class="flex items-center justify-center bg-white rounded-lg py-4 px-4 border border-gray-50 shadow-lg z-20">
                    <img src="https://www.arvancloud.ir/images/v6/contact/enterprise/certificates/danesh.svg" alt="گواهی‌نامه‌های ابر آروان" draggable="false" loading="lazy" />
                </div>
                            <div class="flex items-center justify-center bg-white rounded-lg py-4 px-4 border border-gray-50 shadow-lg z-20">
                    <img src="https://www.arvancloud.ir/images/v6/contact/enterprise/certificates/manrs.svg" alt="گواهی‌نامه‌های ابر آروان" draggable="false" loading="lazy" />
                </div>
                    </div>
    </div>
</section>
      <section className="relative py-24 lg:py-32 products-globe support overflow-hidden">
        <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto relative z-10">
          <div className="text-cyan-400 mb-4">پشتیبانی</div>
          <div className="text-white text-3xl lg:text-[38px] font-semibold mb-16">
            دسترسی به کارشناس فنی در سریع‌ترین زمان
          </div>
        </div>

        <div className="relative z-20 lg:container mx-4 lg:mx-auto">
          <div className="overflow-auto no-scrollbar -ml-4 ">
            <div className="who-to-create-tabs-border !mt-0">
              <div className="who-to-create-tabs"></div>
            </div>

            <div className="lg:absolute lg:-top-[142px] lg:-left-[170px]">
              <img
                className=" left-0 lg:-top-[126px] mx-auto lg:mx-0 max-w-full w-[780px]"
                alt="پشتیبانی"
                src="https://www.arvancloud.ir/images/v6/contact/enterprise/support/feedback.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto">
          <div className="flex flex-col">
            <div className="text-base lg:text-lg text-cyan-600 font-semibold mb-4 lg:mb-5">
              مسیر عقد قرارداد
            </div>
            <div className="text-3xl lg:text-[40px] font-semibold text-gray-900 mb-[72px] z-10">
              عقد قرارداد اختصاصی و منعطف
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-10 relative">
            <div className="absolute left-0 right-4 top-4 hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="900"
                height="2"
                viewBox="0 0 900 2"
                fill="none"
              >
                <path
                  d="M0 1L900 0.999921"
                  stroke="#b2c2d6"
                  stroke-width="1.2"
                  stroke-dasharray="4.5 4.5"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col relative px-4">
              <div className="w-8 h-8 rounded-full bg-cyan-200 flex justify-center items-center text-cyan-900 text-lg mb-6">
                ۱
              </div>
              <div className="text-lg text-gray-900 font-semibold before:content-[''] before:absolute before:right-0  before:w-0.5 before:h-6 before:bg-cyan-600 mb-4 xl:mb-5">
                ثبت درخواست
              </div>
              <div className="text-base text-gray-600">
                مشخصات و اطلاعات اولیه سازمان و نیازهای اساسی کسب‌وکارتان را از
                طریق فرم زیر دریافت می‌کنیم.
              </div>
            </div>
            <div className="flex flex-col relative px-4">
              <div className="w-8 h-8 rounded-full bg-cyan-200 flex justify-center items-center text-cyan-900 text-lg mb-6">
                ۲
              </div>
              <div className="text-lg text-gray-900 font-semibold before:content-[''] before:absolute before:right-0  before:w-0.5 before:h-6 before:bg-cyan-600 mb-4 xl:mb-5">
                جلسه نیازسنجی
              </div>
              <div className="text-base text-gray-600">
                در جلسه‌ای مشترک با حضور نماینده سازمان شما و کارشناس فروش
                آروان، نیازهای زیرساختی کسب‌وکارتان را بررسی می‌کنیم.
              </div>
            </div>
            <div className="flex flex-col relative px-4">
              <div className="w-8 h-8 rounded-full bg-cyan-200 flex justify-center items-center text-cyan-900 text-lg mb-6">
                ۳
              </div>
              <div className="text-lg text-gray-900 font-semibold before:content-[''] before:absolute before:right-0  before:w-0.5 before:h-6 before:bg-cyan-600 mb-4 xl:mb-5">
                پیشنهاد قیمت
              </div>
              <div className="text-base text-gray-600">
                براساس درخواست‌ها و نیازهای مطرح‌شده در جلسه‌ی مشاوره، پیشنهاد
                قیمت و پیش‌فاکتور را ارسال می‌کنیم.
              </div>
            </div>
            <div className="flex flex-col relative px-4">
              <div className="w-8 h-8 rounded-full bg-cyan-200 flex justify-center items-center text-cyan-900 text-lg mb-6">
                ۴
              </div>
              <div className="text-lg text-gray-900 font-semibold before:content-[''] before:absolute before:right-0  before:w-0.5 before:h-6 before:bg-cyan-600 mb-4 xl:mb-5">
                عقد قرارداد
              </div>
              <div className="text-base text-gray-600">
                پس از تایید پیش‌فاکتور و قیمت پیشنهادی از سمت شما، نسخه‌ی نهایی
                قرارداد را امضا می‌‌کنیم.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
