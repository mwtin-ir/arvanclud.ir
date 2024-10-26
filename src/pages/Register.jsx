import React, { useState } from "react";
import EnterPage from "../components/EnterPage";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [passqualit, setPasswordQuality] = useState([]);
  const passwordConditions = {
    length: /^.{8,}$/,
    upperLowerCase: /(?=.*[a-z])(?=.*[A-Z])/,
    numbers: /(?=.*\d)/,
    specialChar: /(?=.*[!@#$%^&*])/,
  };
  const checkPassword = (password) => {
    return {
      length: passwordConditions.length.test(password),
      upperLowerCase: passwordConditions.upperLowerCase.test(password),
      numbers: passwordConditions.numbers.test(password),
      specialChar: passwordConditions.specialChar.test(password),
    };
  };
  function passwordHandler(e) {
    setPassword(e.target.value);
    setPasswordQuality(checkPassword(e.target.value));
  }

  return (
    <EnterPage>
      <div className="text-sm text-[#344456] text-center ">
        اطلاعات حساب کاربری‌تان را بنویسید:
      </div>
      <form className="flex flex-col gap-4 mx-auto mt-4 min-w-[272px]">
        <div className="flex flex-col relative flex-1 items-center border border-gray-300 rounded-md px-4 py-2 w-[100%]">
          <input
            type="text"
            className="text-sm flex-1 bg-[unset] border-none shadow-none outline-none w-full "
            placeholder="نام"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col relative flex-1 items-center border border-gray-300 rounded-md px-4 py-2 w-[100%]">
          <input
            type="text"
            className="text-sm flex-1 bg-[unset] border-none shadow-none outline-none w-full "
            placeholder=" نام خنوادگی"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col relative flex-1 items-center border border-gray-300 rounded-md px-4 py-2 w-[100%]">
          <input
            type="text"
            className="text-sm flex-1 bg-[unset] border-none shadow-none outline-none w-full "
            placeholder="نشانی ایمیل"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex  relative flex-1 items-center border border-gray-300 rounded-md px-4 py-2 w-[100%]">
          <input
            type={showPass ? "text" : "password"}
            className="text-sm flex-1 bg-[unset] border-none shadow-none outline-none w-full "
            placeholder="رمز"
            name="password"
            value={pasword}
            onChange={passwordHandler}
          />
          <span
            className="cursor-pointer absolute top-2 left-2"
            onClick={() => setShowPass((p) => !p)}
          >
            {showPass ? "🫣" : "👁️"}
          </span>
        </div>
        <div className="mt-4">
          <div className="flex flex-row-reverse pl-2 justify-between">
            <div className="flex gap-[3px] flex-row-reverse items-center ">
              <div
                className={`w-[10px] h-[3px] ${
                  passqualit.length ? "bg-cyan-600" : "bg-[#b2c2d6]"
                } rounded-[0.75rem_0px_0px_0.125rem]`}
              ></div>
              <div
                className={`w-[10px] h-[3px] ${
                  passqualit.upperLowerCase ? "bg-cyan-600" : "bg-[#b2c2d6]"
                } rounded-[0.75rem_0px_0px_0.125rem]`}
              ></div>
              <div
                className={`w-[10px] h-[3px] ${
                  passqualit.numbers ? "bg-cyan-600" : "bg-[#b2c2d6]"
                } rounded-[0.75rem_0px_0px_0.125rem]`}
              ></div>
              <div
                className={`w-[10px] h-[3px] ${
                  passqualit.specialChar ? "bg-cyan-600" : "bg-[#b2c2d6]"
                } rounded-[0.75rem_0px_0px_0.125rem]`}
              ></div>
            </div>
            <span className="h-[10px] text-sm text-cyan-600 ">
              {" "}
              رمز عبور باید:{" "}
            </span>
          </div>
        </div>
        <ul className="flex flex-col gap-[6px] mt-5 list-none pr-0 text-[#566e88] ">
          <li className="flex text-sm gap-1 ">
            {passqualit.length && <img src="./images/svgexport-4.svg" alt="" />}
            حداقل ۸ کاراکتر باشد
          </li>
          <li className="flex text-sm gap-1 ">
            {passqualit.upperLowerCase && (
              <img src="./images/svgexport-4.svg" alt="" />
            )}
            ترکیبی از حروف کوچک و بزرگ باشد
          </li>
          <li className="flex text-sm gap-1 ">
            {passqualit.numbers && (
              <img src="./images/svgexport-4.svg" alt="" />
            )}
            شامل اعداد باشد
          </li>
          <li className="flex text-sm gap-1 items-center ">
            {passqualit.specialChar && (
              <img src="./images/svgexport-4.svg" alt="" />
            )}
            شامل کاراکترهای خاص (نمادها) باشد
          </li>
        </ul>
        <button className="mb-7 text-white bg-cyan-700 bg-opacity-75 h-10 px-4 rounded-xl">
          ارسال ایمیل
        </button>
      </form>
      <div className="text-sm text-center text-[#253343]">
        <span>نام کاربری دارم.</span>
        <Link to="/login" className="mr-1 font-semibold ">
          {" "}
          می‌خواهم وارد شوم{" "}
        </Link>
      </div>
      <div className="flex items-center w-[75%] m-[1.25rem_auto_0] gap-1">
        <div className="h-[0.5px] flex-1 bg-[#d1dbe8] "></div>
        <span className="text-sm text-gray-700">یا</span>
        <div className="h-[0.5px] flex-1 bg-[#d1dbe8] "></div>
      </div>
      <div className="flex justify-center gap-4 m-[1.25rem_0_0.5rem]">
        <div className="flex items-center justify-center w-[48px] h-[48px] rounded-[0.75rem] bg-[#e9edf5] text-center hover:bg-gray-300">
          <div className="block text-center w-[100%] ">
            <img
              src="./images/svgexport-8.svg"
              alt="ورود با گوگل "
              className="mr-[11px]"
            />
          </div>
        </div>
      </div>
      <div className="text-sm text-center py-0 px-6">
        ورود شما به معنای پذیرش
        <Link
          to="https://www.arvancloud.ir/fa/legal/terms"
          className="text-[#32b0f6]"
        >
          {" "}
          شرایط استفاده از خدمات{" "}
        </Link>
        و
        <Link
          to="https://www.arvancloud.ir/fa/legal/privacy-policy"
          className="text-[#32b0f6]"
        >
          {" "}
          سیاست حفظ حریم خصوصی{" "}
        </Link>
        آروان کلاد است
      </div>
    </EnterPage>
  );
}
