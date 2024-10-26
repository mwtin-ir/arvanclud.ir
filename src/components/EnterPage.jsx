import React from "react";
import "../style/home.css";
import { Link } from "react-router-dom";
function EnterPage({ children }) {
  return (
    <div className="h-[100vh] bg-gray-50">
      <Link
        to="/"
        className="left-0 text-sm bg-white fixed z-30 flex ites-center gap-2 justify-between min-h-[24px] p-[4px_12px_4px_4px] rounded-[12px] m-[32px]  text-gray-600"
      >
        <span className="text-sm">بازگشت به خانه</span>
        <img src="./images/svgexport-3.svg" alt="بازگشت به خانه" width='18'  height='18'/>
      </Link>
      <div className="flex ">
        <div className="xl:items-end xl:flex-[0.2] flex flex-col justify-center items-center m-auto">
          <div className="xl:-ml-[184px] shadow-[0_4px_20px_#00000008] p-6 rounded-lg bg-white flex w-[368px] flex-col justify-center items-center z-20 mt-[6rem] lg:mt-1   ">
            <div>{children}</div>
          </div>
        </div>
        <div className="xl:flex hidden  overflow-hidden lg:rounded-r-[25px] flex-[.8] ">
          <div className="relative flx flex-cl jstify-center items-center m-auto w-[100%]  pr-[184px] c-banner h-[100vh]">
            <div className="max-w-[90%] max-h-[850px] mx-auto xl:mt-[8rem] xl:mr-[9rem] ">
              <img
                src="./images/telegram-login-fa-BLCwuvLU.png"
                alt=""
                className="max-w-[100%] max-h-[100%] "
              />
            </div>
            <div className="max-w-[627px] mt-[10px] flex items-center  justify-center xl:mr-[7rem] ">
              <Link
                to="https://t.me/arvancloud"
                className="bg-[rgb(255,0,102)] text-14px] w-[200px] h-[48px] rounded-[16px] flex item-center justify-center text-center  text-white shadow-[0_6px_15px_-4px_#0a3a4180] transition-all duration-200 mt-3 "
              >
                <span className="mt-3">عضویت در کانال تلگرام</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterPage;
