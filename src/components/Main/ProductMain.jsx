import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const productPage = [
  {
    img: "https://www.arvancloud.ir/images/v6/home/products/cloud-computing-desktop.svg",
    icon: "https://www.arvancloud.ir/images/v6/home/products/icons/cloud-computing.svg",
    title: "سریع و آسان سرور بسازید",
    dec: "با سرورهای ابری مقیاس‌پذیر و مقرون به صرفه‌ی ابر آروان در بهترین دیتاسنترهای ایران با منابع و سیستم‌عامل دلخواه به تعداد نامحدود سرور (ابرک) بسازید و به ‌شکل آنی منابع آن را افزایش دهید. شما می‌توانید به‌کمک فایروال و شبکه‌های خصوصی و عمومی سرور ابری آروان، سطوح دسترسی متفاوتی برای سرور خود در نظر بگیرید و با گرفتن اسنپ‌شات به وضعیت قبلی آن بازگردید.",
    link: "https://www.arvancloud.ir/fa/products/cloud-server",
  },
  {
    img: "https://www.arvancloud.ir/images/v6/home/products/cdn-desktop.svg",
    icon: "https://www.arvancloud.ir/images/v6/home/products/icons/cdn.svg",
    title: "سریع‌تر و امن‌تر دیده شوید",
    dec: "شبکه توزیع محتوای ابر آروان شبکه‎‌ای امن و گسترده برای تحویل محتوای وب‌سایت شماست تا به کمک آن برای کاربران‌تان در سراسر جهان در دسترس باشید. با راه‌اندازی سریع، پایداری بالا و امکانات کامل این محصول مانند DNS و امنیت ابری، دیگر دغدغه‌ی تامین منابع زیرساختی و امنیت سرویس خود را نخواهید داشت.",
    link: "https://www.arvancloud.ir/fa/products/cdn",
  },
  {
    img: "https://www.arvancloud.ir/images/v6/home/products/cloud-storage-desktop.svg",
    icon: "https://www.arvancloud.ir/images/v6/home/products/icons/cloud-storage.svg",
    title: "داده‌هایتان را در محیطی امن ذخیره کنید",
    dec: "با فضای ابری آروان از نوع Object Storage، امکان ذخیره‌سازی هر نوع فایل یا داده‌ای را در محیط ابری، به‌شکل کاملن رمزنگاری شده خواهید داشت و از نقاط مختلف دنیا، به‌شکل پایدار به یک سامانه‌ی ذخیره‌سازی امن و مقیاس‌پذیر دسترسی پیدا می‌کنید؛ بدون آن‌که نگران زیرساخت یا از دست رفتن اطلاعات باشید.",
    link: "https://www.arvancloud.ir/fa/products/cloud-storage",
  },
  {
    img: "https://www.arvancloud.ir/images/v6/home/products/video-platform-desktop.svg",
    icon: "https://www.arvancloud.ir/images/v6/home/products/icons/video-platform.svg",
    title: "از بارگذاری تا پخش زنده محتوای ویدیویی",
    dec: "پلتفرم ویدیو ابر آروان بستری امن و در دسترس برای محتوای ویدیویی و صوتی شماست. با سرویس میزبانی ویدیو، فیلم‌ها و ویدیوهای خود را در فضای ابری نامحدود نگهداری کنید و آن را با کیفیت‌ها و فرمت‌های متفاوت به دست کاربران‌تان برسانید. هم‌چنین‌ با پخش زنده‌ ابر آروان می‌توانید استریم خود را با کم‌ترین تاخیر و بهترین کیفیت، بدون اختلال در معرض دید میلیون‌ها کاربر قرار دهید.",
    link: "https://www.arvancloud.ir/fa/products/video-platform",
  },
  {
    img: "https://www.arvancloud.ir/images/v6/home/products/paas-desktop.svg",
    icon: "https://www.arvancloud.ir/images/v6/home/products/icons/paas.svg",
    title: "راه‌اندازی آسان و پایدار اپلیکیشن‌ها",
    dec: "کانتینر ابری یا سکوی ابری آروان مبتنی بر Container و بر اساس استانداردهای Kubernetes است. شما می‌توانید تنها با یک دستور در CLI ایده‌های نرم‌افزاری خود را توسعه دهید و آن‌ها را به محصول تبدیل کنید. فرقی نمی‌کند نرم‌افزاری ساده یا پیچیده دیپلوی کنید؛ در کانتینر ابری (PaaS) آروان تمامی نیازمندی‌های زیرساختی شما به آسانی تامین می‌شود و با کنترل مداوم وضعیت زیرساخت، نرم‌افزارتان همیشه در دسترس خواهد بود.",
    link: "https://www.arvancloud.ir/fa/products/paas",
  },
  {
    img: "https://www.arvancloud.ir/images/v6/home/products/dbaas-desktop.svg",
    icon: "https://www.arvancloud.ir/images/v6/home/products/icons/database.svg",
    title: "خانه امن داده‌های شما",
    dec: "دیتابیس ابری آروان زیرساختی امن، پایدار و مدیریت‌شده است و به شما کمک می‌کند تا به‌سادگی چند کلیک و در سریع‌ترین زمان تمام کارهای مرتبط با راه‌اندازی، مدیریت، پشتیبان‌گیری و به‌روزرسانی پایگاه داده کسب‌وکارتان را انجام دهید و بدون دغدغه‌های زیرساختی روی توسعه‌ی محصولات و خدمات آنلاین خود تمرکز کنید.",
    link: "https://www.arvancloud.ir/fa/products/databases",
  },
];

const ProductMain = React.memo(function ProductMain() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentProduct, setCurrentProduct] = useState();
  useEffect(() => {
    setCurrentProduct(productPage[activeTab]);
  }, [activeTab]);

  return (
    <section className="bg-[#F3F8FC] flex py-24 lg:py-32 overflow-hidden   ">
      <div className="w-[100%] md:max-w[640px] lg:max-w-[768px]  xl:max-w-[1280px] mx-auto py-[1rem] md:py-0 mr-3   lg:mr-0 ">
        <div className="flex flex-col lg:mr-32">
          <div className="font-semibold text-cyan-600 text-sm xl:text-lg mb-3 xl:mb-6 z-10">
            محصولات ابری آروان
          </div>
          <div className="font-semibold text-gray-800 text-2xl xl:text-[38px] mb-14 xl:mb-16 z-10 ">
            پوشش کامل نیازهای شما برای راه‌اندازی کسب‌وکاری آنلاین
          </div>
        </div>
        <div className="flex flex-col  lg:mr-32">
          <div className="flex mb-6 lg:mb-24 overflow-x-auto ">
            {[
              "سرور ابری",
              "شبکه توذیع محتوا",
              "فضای ابری ",
              "پلتفرم ویدیو",
              "کانتینر ابری",
              "دیتابیس ابری",
            ].map((tab, index) => {
              return (
                <h2
                  className={`relative flex justify-center items-center gap-2 text-base xl:text-xl px-6 py-3 min-w-fit text-gray-800 cursor-pointer focus-visible:outline-none transition-all ${
                    activeTab === index &&
                    "!text-gray-800 bg-white rounded-lg shadow-['opx_8px_10px_0px_#0000000A]"
                  } `}
                  key={index}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </h2>
              );
            })}
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className=" col-span-4 xl:max-w-[33rem] z-10  lg:w-2/4">
              <div className="felx flex-col gap-6 mb-6 xl:mb-9">
                <img
                  src={currentProduct?.icon}
                  alt={currentProduct?.title}
                  loading="lazy "
                  draggable="false"
                  className="mr-4 ml-4 w-10 xl:w-12 xl:h-12 "
                />
                <div className="font-semibold text-2xl text-green-800 border-r-2 border-green-600 px-4">
                  {currentProduct?.title}
                </div>
              </div>
              <div className="tet-base text-gray-600 mb-10">
                {currentProduct?.dec}
              </div>
              <Link
                to={currentProduct?.link}
                className="text-lg font-semibold text-green-800 flex gap-x-2 mb-4 xl:mb-0 z-10 "
              >
                بیش‌تر بدانید
                <img
                  src="https://www.arvancloud.ir/images/v6/home/arrow-left.svg"
                  alt="بیشتر بدانید"
                  draggable="false"
                  loading="lazy"
                  width="24"
                  height="24"
                  className="transition-transform duration-500 "
                />
              </Link>
            </div>
            <div className="w-full xl:w-2/4 relative xl:absolute left-0 z-10 ">
              <img
                src={currentProduct?.img}
                alt={currentProduct?.title}
                draggable="false"
                loading="lazy"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex py-24 lg:py-30 bg-[#F3F8FC]"></div>
      </div>
    </section>
  );
});

export default ProductMain;
