import React from 'react'
import Header from '../components/Header/Header'
import { Link } from 'react-router-dom'
//w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto
export default function Devops() {
  return (
    <>
<Header/>
<section className="overflow-hidden">
<div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-1 lg:mr-auto relative">
<div className="flex flex-col pt-20 md:pt-0 md:flex-row justify-between items-center lg:items-start xl:mb-14 lg:mb-0">
            <div className="md:w-7/12 lg:mt-[105px] xl:w-2/3 relative z-10">
                <h1 className="  lg:text-title-xxlarge text-gray-900 mb-4 lg:mb-6">
                    خدمات دواپس آروان‌کلاد
                </h1>
                <div className=" text-caption-large lg:text-paragraph-large text-gray-800 mb-8 md:mb-11">
                    با بهره‌گیری از خدمات DevOps آروان‌کلاد می‌توانید در کوتاه‌ترین زمان و با بهینه‌ترین معماری زیرساخت‌‌های کسب‌وکارتان را توسعه دهید و در مسیر رشد قرار بگیرید.
                </div>
                <div className="flex gap-4 justify-start mb-3 lg:mb-0">
                    <Link to="#request" className="whitespace-nowrap flex items-center w-full md:w-fit justify-center px-6 h-10 md:h-12 rounded-lg text-button-large py-3 bg-cyan-600 bg-opacity-70 text-white hover:bg-cyan-700" >
                        ثبت درخواست
                    </Link>
                </div>
            </div>
            <div className="relative w-full md:w-fit flex justify-center">
                <img src="https://www.arvancloud.ir/images/v6/products/hero/product-blur.webp" alt="blur" draggable="false" loading="eager" width="601" height="" className="blur-sm" />
                <img src="https://www.arvancloud.ir/images/v6/devops/hero-lg.png" alt="خدمات دواپس آروان‌کلاد" draggable="false" loading="eager" width="600" height="496" className="hidden md:block md:w-3/4 lg:w-[620px] max-w-max xl:-mb-14 relative z-10" />
                <img src="https://www.arvancloud.ir/images/v6/devops/hero.png" alt="خدمات دواپس آروان‌کلاد" draggable="false" loading="eager" width="260" height="260" className="md:hidden relative z-10" />
            </div>
        </div>
    </div>
</section>
    </>
  )
}
