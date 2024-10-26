import React, { memo, useState } from "react";

function ButtonMenu({ children, text, func }) {
    const[clickBtn,setClickBtn]=useState(false)
  function clickButtonHandler() {
    func && func(text)
    setClickBtn(p=>!p)
  }
  return (

    <button
      className="xl:flex items-center gap-2 text-[1.1rem] font-medium  hidden  p-[4px_8px] hover:rounded-lg hover:bg-[rgb(0,167,167)] hover:bg-opacity-10 transition-transform duration-300 "
      onClick={clickButtonHandler}
    >
      <span className="pt-1 "> {text}</span>
      <div
                  className={`transition-transform duration-400 ${
                    !clickBtn ? "rotate-0" : "rotate-180"
                  }`}
                >
                   {children}
                </div>
      
    </button>
  );
}

export default memo(ButtonMenu);
// olor: rgb(0 112 112 / var(--tw-bg-opacity));