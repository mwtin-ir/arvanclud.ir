import React from "react";
import { Link } from "react-router-dom";

function MainRecommendCard({ icon, title, children , link}) {
  return (
    <Link to={link} className="bg-white flex flex-col relative   p-6 rounded-xl  shadow-[0_0_10px_#ccc] hover:border-[1.5px] border-cyan-600   group min-w-[18.5rem] xl:w-1/4 px-5 py-6 z-20">
      <div className=" flex items-center gap-x-3 mb-4 xl:mb-7 group-hover:text-cyan-600">
        <img
          src={icon}
          alt={title}
          draggable="false"
          loading="lazy"
          width="40"
          height="40"
        />
        <div className="text-gray-800 text-xl font-semibold"> {title}</div>
        <img
          src="./images/arrow.svg"
          className="hidden transition-transform duration-300 ease-in-out   scale-75 group-hover:block absolute left-10 opacity-0 group-hover:opacity-100 group-hover:scale-100  "
          alt={title}
          width="24"
                height="24"
                draggable="false"
                loading="lazy"
        />
      </div>
      <div className="text-gray-600 text-sm font-normal">{children}</div>
    </Link>
  );
}

export default MainRecommendCard;
