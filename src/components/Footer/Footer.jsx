import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [showLang, setShowLang] = useState(false);
  const iconSpanRef = useRef(null);
  const lngRef = useRef(null);
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
    <footer>
      <div className="bg-gray-50 py-20">
        <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto">
          <div className="flex lg:grid  gap-x-4 gap-y-12 sm:grid-cols-3 md:grid-cols-5 max-w-[100%] ">
            <div>
              <div className="mb-6 text-xl font-semibold text-cyan-600">
                محصولات
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    href="https://www.arvancloud.ir/fa/products/cloud-server"
                  >
                    سرور ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cdn"
                  >
                    شبکه توزیع محتوا
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/video-platform"
                  >
                    سرویس میزبانی ویدیو
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage"
                  >
                    فضای ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/paas"
                  >
                    کانتینر ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/databases"
                  >
                    دیتابیس ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/edge-computing"
                  >
                    پردازش لبه
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/dedicated-server"
                  >
                    سرور اختصاصی
                  </Link>
                  <span className="text-xs text-white bg-[#F43E88] rounded-[4px] px-2 xl:px-3 py-1 w-fit">
                    جدید
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/vps"
                  >
                    سرور مجازی
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cdn/ssl"
                  >
                    گواهینامه SSL رایگان
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/video-platform/live-streaming"
                  >
                    سرویس پخش زنده
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage/backup"
                  >
                    هاست بکاپ
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage/file-hosting"
                  >
                    هاست دانلود
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/dev/cloud-shell"
                  >
                    Shell ابری
                  </Link>
                </div>
              </div>
            </div>
            <div className='hidden xl:block'>
              <div className="mb-6 text-xl font-semibold text-cyan-600">
                محصولات
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    href="https://www.arvancloud.ir/fa/products/cloud-server"
                  >
                    سرور ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cdn"
                  >
                    شبکه توزیع محتوا
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/video-platform"
                  >
                    سرویس میزبانی ویدیو
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage"
                  >
                    فضای ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/paas"
                  >
                    کانتینر ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/databases"
                  >
                    دیتابیس ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/edge-computing"
                  >
                    پردازش لبه
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/dedicated-server"
                  >
                    سرور اختصاصی
                  </Link>
                  <span className="text-xs text-white bg-[#F43E88] rounded-[4px] px-2 xl:px-3 py-1 w-fit">
                    جدید
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/vps"
                  >
                    سرور مجازی
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cdn/ssl"
                  >
                    گواهینامه SSL رایگان
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/video-platform/live-streaming"
                  >
                    سرویس پخش زنده
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage/backup"
                  >
                    هاست بکاپ
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage/file-hosting"
                  >
                    هاست دانلود
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/dev/cloud-shell"
                  >
                    Shell ابری
                  </Link>
                </div>
              </div>
            </div>
            <div className='hidden xl:block'>
              <div className="mb-6 text-xl font-semibold text-cyan-600">
                محصولات
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    href="https://www.arvancloud.ir/fa/products/cloud-server"
                  >
                    سرور ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cdn"
                  >
                    شبکه توزیع محتوا
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/video-platform"
                  >
                    سرویس میزبانی ویدیو
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage"
                  >
                    فضای ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/paas"
                  >
                    کانتینر ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/databases"
                  >
                    دیتابیس ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/edge-computing"
                  >
                    پردازش لبه
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/dedicated-server"
                  >
                    سرور اختصاصی
                  </Link>
                  <span className="text-xs text-white bg-[#F43E88] rounded-[4px] px-2 xl:px-3 py-1 w-fit">
                    جدید
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/vps"
                  >
                    سرور مجازی
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cdn/ssl"
                  >
                    گواهینامه SSL رایگان
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/video-platform/live-streaming"
                  >
                    سرویس پخش زنده
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage/backup"
                  >
                    هاست بکاپ
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage/file-hosting"
                  >
                    هاست دانلود
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/dev/cloud-shell"
                  >
                    Shell ابری
                  </Link>
                </div>
              </div>
            </div>
            <div className='hidden xl:block'>
              <div className="mb-6 text-xl font-semibold text-cyan-600">
                محصولات
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    href="https://www.arvancloud.ir/fa/products/cloud-server"
                  >
                    سرور ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cdn"
                  >
                    شبکه توزیع محتوا
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/video-platform"
                  >
                    سرویس میزبانی ویدیو
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage"
                  >
                    فضای ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/paas"
                  >
                    کانتینر ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/databases"
                  >
                    دیتابیس ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/edge-computing"
                  >
                    پردازش لبه
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/dedicated-server"
                  >
                    سرور اختصاصی
                  </Link>
                  <span className="text-xs text-white bg-[#F43E88] rounded-[4px] px-2 xl:px-3 py-1 w-fit">
                    جدید
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/vps"
                  >
                    سرور مجازی
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cdn/ssl"
                  >
                    گواهینامه SSL رایگان
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/video-platform/live-streaming"
                  >
                    سرویس پخش زنده
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage/backup"
                  >
                    هاست بکاپ
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage/file-hosting"
                  >
                    هاست دانلود
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/dev/cloud-shell"
                  >
                    Shell ابری
                  </Link>
                </div>
              </div>
            </div>
            <div className='hidden xl:block'>
              <div className="mb-6 text-xl font-semibold text-cyan-600">
                محصولات
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    href="https://www.arvancloud.ir/fa/products/cloud-server"
                  >
                    سرور ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cdn"
                  >
                    شبکه توزیع محتوا
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/video-platform"
                  >
                    سرویس میزبانی ویدیو
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage"
                  >
                    فضای ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/paas"
                  >
                    کانتینر ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/databases"
                  >
                    دیتابیس ابری
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/edge-computing"
                  >
                    پردازش لبه
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/dedicated-server"
                  >
                    سرور اختصاصی
                  </Link>
                  <span className="text-xs text-white bg-[#F43E88] rounded-[4px] px-2 xl:px-3 py-1 w-fit">
                    جدید
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/vps"
                  >
                    سرور مجازی
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cdn/ssl"
                  >
                    گواهینامه SSL رایگان
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/video-platform/live-streaming"
                  >
                    سرویس پخش زنده
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage/backup"
                  >
                    هاست بکاپ
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/products/cloud-storage/file-hosting"
                  >
                    هاست دانلود
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <Link
                    className="footer-link"
                    to="https://www.arvancloud.ir/fa/dev/cloud-shell"
                  >
                    Shell ابری
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-6 px-4 ">
        <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-3 lg:mr-auto  flex flex-col-reverse md:flex-col ">
          <div className="flex   flex-col-reverse  md:flex-row md:items-center md:justify-between md:pb-8 md:border-gray-200 md:border-b-[1.5px]">
            <div className="flex  justify-between  md:justify-between  pt-6 md:pt-0 ">
              <div className="flex items-center justify-center">
                <Link className="text-green-600 transition w-10 h-10 flex items-center justify-center text-center hover:bg-gray-300 bg-transparent rounded-lg">
                  <img
                    src="./images/svgexport-13.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </Link>
                <Link className="text-green-600 transition w-10 h-10 flex items-center justify-center text-center hover:bg-gray-300 bg-transparent rounded-lg">
                  <img
                    src="./images/svgexport-14.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </Link>
                <Link className="text-green-600 transition w-10 h-10 flex items-center justify-center text-center hover:bg-gray-300 bg-transparent rounded-lg">
                  <img
                    src="./images/svgexport-15.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </Link>
                <Link className="text-green-600 transition w-10 h-10 flex items-center justify-center text-center hover:bg-gray-300 bg-transparent rounded-lg">
                  <img
                    src="./images/svgexport-16.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </Link>
                <Link className="text-green-600 transition w-10 h-10 flex items-center justify-center text-center hover:bg-gray-300 bg-transparent rounded-lg">
                  <img
                    src="./images/svgexport-17.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </Link>
              </div>
              <div className="flex gap-3">
                <div className="block md:hidden">
                  <div className="flex justify-center items-center rounded p-[10px] relative before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:right-0 before:bg-gray-300 before:opacity-20 before:rounded">
                    <img
                      src="https://www.arvancloud.ir/images/v6/footer/samandehi.webp"
                      width="46"
                      height="46"
                      alt=""
                    />
                  </div>
                </div>
                <div className="block md:hidden">
                  <div className="flex justify-center items-center rounded p-[10px] relative before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:right-0 before:bg-gray-300 before:opacity-20 before:rounded">
                    <img
                      src="./images/download.png"
                      width="46"
                      height="46"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-center  pb-6 md:pb-0 border-b-gray-200 border-b md:border-none">
              <div className="flex items-center">
                <Link
                  className="text-xs font-medium text-gray-900 lg:text-sm"
                  href="https://www.arvancloud.ir/fa/legal/terms"
                >
                  شرایط استفاده از خدمات
                </Link>

                <span className="mx-2 h-4 w-[1px] bg-gray-800"></span>

                <Link
                  className="text-xs font-medium text-gray-900 lg:text-sm"
                  href="https://www.arvancloud.ir/fa/legal/sla"
                >
                  توافق‌نامه‌ سطح خدمات
                </Link>

                <span className="mx-2 h-4 w-[1px] bg-gray-800"></span>

                <Link
                  className="text-xs font-medium text-gray-900 lg:text-sm"
                  href="https://www.arvancloud.ir/fa/legal/privacy-policy"
                >
                  سیاست حفظ حریم خصوصی
                </Link>
              </div>{" "}
            </div>
          </div>
          <div className="flex items-center justify-between mb-10 md:mb-0">
            <div className="flex items-start gap-4 mt-0 md:mt-6">
              <div
                className=" bg-white rounded-md px-3 h-10 gap-2 flex items-center text-sm font-medium relative "
                onClick={() => {
                  setShowLang((p) => !p);
                }}
              >
                <img
                  src="./images/svgexport-2.svg"
                  alt="زبان"
                  width="16"
                  height="16"
                />
                <span className="pt-1 min-w-[66px] text-start">فارسی</span>
                <img
                  src="./images/svgexport-19.svg"
                  alt=""
                  width="16"
                  height="16"
                  className={` transition-all duration-300 ${
                    showLang && "rotate-180"
                  }`}
                  ref={iconSpanRef}
                />
                {showLang && (
                  <div
                    ref={lngRef}
                    className="flex flex-col gap-2 p-2  right-0 bg-white absolute -top-[12rem] shadow-2xl rounded-lg"
                  >
                    {["English", "العربية", "Türkiye", "Portuguese"].map(
                      (li) => {
                        return (
                          <span className="py-2 px-6 rounded-lg hover:bg-gray-300 hover:text-[none] text-center cursor-pointer">
                            {li}
                          </span>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
              <div className="hidden lg:block">
                <div className="flex justify-center items-center rounded p-[10px] relative before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:right-0 before:bg-gray-300 before:opacity-20 before:rounded">
                  <img
                    src="https://www.arvancloud.ir/images/v6/footer/samandehi.webp"
                    width="46"
                    height="46"
                    alt=""
                  />
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex justify-center items-center rounded p-[10px] relative before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:right-0 before:bg-gray-300 before:opacity-20 before:rounded">
                  <img
                    src="./images/download.png"
                    width="46"
                    height="46"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                className="text-cyan-500 hover:text-cyan-600 transition"
                to="https://www.arvancloud.ir/fa"
                aria-label="ArvanCloud Logo"
              >
                <svg
                  width="153"
                  height="28"
                  viewBox="0 0 153 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M96.4609 10.0787C94.8101 10.0787 93.9849 10.9039 93.9849 12.5549V14.3086C93.9849 15.8357 94.7276 16.5784 96.2547 16.5784H101.826V18.4355H96.3576C93.2417 18.4355 91.7148 16.9087 91.7148 13.7927V13.1737C91.7148 9.85158 93.3449 8.2215 96.667 8.2215H97.5748C98.2971 8.2215 99.432 8.24215 101.496 8.38667L101.33 10.2439C99.3291 10.0993 98.1938 10.0787 97.5748 10.0787H96.4609ZM41.1707 11.9355C41.1707 9.43865 39.9533 8.22117 37.4564 8.22117H31.8851V9.97512H37.2502C38.4264 9.97512 39.0042 10.5529 39.0042 11.7291V16.6816H33.763C33.1439 16.6816 32.8345 16.3719 32.8345 15.7528V14.6795C32.8345 14.0608 33.1442 13.7508 33.763 13.7508H39.4168V11.9968H33.9694C31.7616 11.9968 30.668 13.0904 30.668 15.2983C30.668 17.4235 31.679 18.4349 33.7426 18.4349H38.1793C40.1807 18.4349 41.1711 17.4445 41.1711 15.4428V11.9355H41.1707ZM46.2261 11.8323C46.2261 10.5942 46.8452 9.97512 48.0833 9.97512H51.4054V8.22117H48.1862C45.4213 8.22117 44.0596 9.58284 44.0596 12.3481V18.332H46.2261V11.8323ZM55.6563 17.1558C55.9037 17.94 56.4199 18.332 57.2451 18.332H59.3084C60.1339 18.332 60.6704 17.94 60.9182 17.1558L63.6831 8.22117H61.4133L58.8961 16.6813H57.658L55.223 8.22117H52.9536L55.6563 17.1558ZM137.317 12.7607C137.317 9.70705 138.803 8.22117 141.857 8.22117H146.541V10.0784H141.651C140.268 10.0784 139.587 10.759 139.587 12.1417V14.5147C139.587 15.8974 140.268 16.578 141.651 16.578H146.19V5.43555H148.46V15.1338C148.46 17.3416 147.366 18.4352 145.158 18.4352H141.857C138.803 18.4352 137.317 16.9497 137.317 13.8956V12.7607H137.317ZM128.238 18.4355C125.473 18.4355 124.111 17.0739 124.111 14.3086V8.22217H126.381V14.6179C126.381 15.9383 127.02 16.5784 128.341 16.5784H132.158V8.22217H134.428V15.1338C134.428 17.3416 133.335 18.4352 131.127 18.4352H128.238V18.4355ZM118.953 14.515C118.953 15.8977 118.272 16.5784 116.889 16.5784H114C112.618 16.5784 111.937 15.8977 111.937 14.515V12.142C111.937 10.7594 112.618 10.0787 114 10.0787H116.889C118.272 10.0787 118.953 10.7594 118.953 12.142V14.515ZM116.682 18.4355C119.716 18.4355 121.222 16.929 121.222 13.896V12.7611C121.222 9.72803 119.716 8.2215 116.682 8.2215H114.206C111.173 8.2215 109.667 9.72803 109.667 12.7611V13.896C109.667 16.929 111.173 18.4355 114.206 18.4355H116.682ZM106.778 5.43555H104.508V18.332H106.778V5.43555ZM84.4412 9.97512C85.7616 9.97512 86.4013 10.6148 86.4013 11.9355V18.332H88.5679V12.3485C88.5679 9.58317 87.2059 8.2215 84.4409 8.2215H81.6759C79.4681 8.2215 78.3748 9.3151 78.3748 11.5229V18.3323H80.5414V9.97512H84.4412ZM75.4856 11.9355C75.4856 9.43865 74.2682 8.22117 71.7713 8.22117H66.2V9.97512H71.5651C72.7413 9.97512 73.3187 10.5529 73.3187 11.7291V16.6816H68.0779C67.4588 16.6816 67.1494 16.3719 67.1494 15.7528V14.6795C67.1494 14.0608 67.4588 13.7508 68.0779 13.7508H73.732V11.9968H68.2843C66.0765 11.9968 64.9829 13.0904 64.9829 15.2983C64.9829 17.4235 65.9939 18.4349 68.0572 18.4349H72.4939C74.4953 18.4349 75.4856 17.4445 75.4856 15.4428V11.9355Z"
                    fill="black"
                  ></path>
                  <path
                    d="M16.9663 5.80828L17.006 5.88837L23.6726 19.2213C23.8833 19.6583 24.0017 20.1486 24.0017 20.6667C24.0017 22.5078 22.5094 24 20.6683 24C19.4023 24 18.3016 23.2947 17.7373 22.2556L17.7301 22.2419C17.6994 22.1859 17.6716 22.1293 17.6449 22.0716L17.6442 22.0698L11.0544 8.89158L11.0511 8.88509C11.0324 8.85009 11.014 8.81437 10.997 8.77829L10.9905 8.76458C10.7838 8.33092 10.668 7.84601 10.668 7.33369C10.668 6.05542 11.387 4.94563 12.4423 4.38677C12.4871 4.36259 12.5322 4.33986 12.5776 4.3193L12.5823 4.31677C13.0127 4.11401 13.4937 4 14.0017 4C15.2933 3.99964 16.4132 4.73457 16.9663 5.80828Z"
                    fill="#00BABA"
                  ></path>
                  <path
                    d="M10.6667 20.6673C10.6667 22.5084 9.17408 24.0007 7.33333 24.0007C5.49223 24.0007 4 22.5084 4 20.6673C4 18.8262 5.49223 17.334 7.33333 17.334C9.17408 17.334 10.6667 18.8266 10.6667 20.6673Z"
                    fill="#00BABA"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
