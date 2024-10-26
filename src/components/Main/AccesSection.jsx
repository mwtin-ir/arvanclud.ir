import React from "react";
import { Link } from "react-router-dom";
import MainRecommendCard from "../Cards/Home/MainRecommendCard";

function AccesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[rgb(246,249,252)]">
      <div className="w-[100%] md:max-w-[640px] lg:max-w-[786px] xl:max-w-[1280px] mx-auto mr-3 lg:mr-auto">
        <div className="flex flex-col mb-16">
          <div className="font-semibold text-cyan-600 text-sm xl:text-lg mb-3 xl:mb-6 z-10">
            دسترسی‌های مفید
          </div>
          <div className="font-semibold text-gray-900 text-2xl xl:text-3xl z-10 mb-3 xl:mb-6">
            هر آن‌چه درباره محصولات ابر آروان باید بدانید
          </div>
          <div className="flex gap-2 lg:gap-12 xl:grid xl:grid-cols-4 px-4 sm:px-0 overflow-x-auto xl:overflow-visible">
            <MainRecommendCard
              to="https://www.arvancloud.ir/blog/fa/"
              title="وبلاگ"
              icon="https://www.arvancloud.ir/images/v6/home/access/weblog.svg"
            >
              در وبلاگ ابر آروان به گزارش‌ها، مقالات و یادداشت‌هایی در حوزه‌ی
              رایانش و زیرساخت ابری دسترسی دارید.
            </MainRecommendCard>

            <MainRecommendCard
              to="https://www.arvancloud.ir/blog/fa/"
              title="راهنمای فنی"
              icon="https://www.arvancloud.ir/images/v6/home/access/users.svg"
            >
              در راهنمای ابر آروان برای مشکلات فنی شما در کار با محصولات ابری،
              راه‌حل‌های متنوعی ارایه داده‌ایم.
            </MainRecommendCard>

            <MainRecommendCard
              to="https://www.arvancloud.ir/blog/fa/"
              title="مستندات API "
              icon="https://www.arvancloud.ir/images/v6/home/access/users.svg"
            >
              مستندات کامل کار با هر یک از محصولات و فیچرهای ابر آروان از طریق
              API را در این بخش جست‌وجو کنید.
            </MainRecommendCard>
            <MainRecommendCard
              to="https://www.arvancloud.ir/blog/fa/"
              title="انجمن"
              icon="https://www.arvancloud.ir/images/v6/home/access/users.svg"
            >
              در انجمن کاربری ابر آروان با کارشناسان و متخصصان ابری آروان،
              درباره محصولات ما گفت‌وگو وتبادل نظر کنید.
            </MainRecommendCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccesSection;
