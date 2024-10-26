import React, { useState } from "react";
import EnterPage from "../components/EnterPage";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <EnterPage>
        <div className="text-sm text-[#344456] text-center ">
          اطلاعات حساب کاربری‌تان را بنویسید:
        </div>
        <form className="flex flex-col gap-4 mx-auto mt-4 min-w-[272px]">
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="cursor-pointer absolute top-2 left-2"
              onClick={() => setShowPass((p) => !p)}
            >
              {showPass ? "🫣" : "👁️"}
            </span>
          </div>
          <button className="mb-7 text-white bg-cyan-700 bg-opacity-75 h-10 px-4 rounded-xl">
            ارسال ایمیل
          </button>
        </form>
        <div className="text-sm text-center text-[#253343]">
          <span> حساب کاربری ندارید؟</span>
          <Link to="/register" className="mr-1 font-semibold ">
            ثبت نام
          </Link>
        </div>
        <div className="flex items-center w-[75%] m-[1.25rem_auto_0] gap-1">
          <div className="h-[0.5px] flex-1 bg-[#d1dbe8] "></div>
          <span className="text-sm text-gray-700">یا</span>
          <div className="h-[0.5px] flex-1 bg-[#d1dbe8] "></div>
        </div>
        <div className="flex justify-center gap-4 m-[1.25rem_0_0.5rem]">
          <Link to="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=504093353525-h33btosrd068ampddur28i1l43ln1o70.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Faccounts.arvancloud.ir%2Fsso%2Fgoogle&response_type=code&scope=email%20openid%20profile&state=raFh2TJ7ZE1gqDXNb7RHUY&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow">
            <div className="flex items-center justify-center w-[48px] h-[48px] rounded-[0.75rem] bg-[#e9edf5] text-center hover:bg-gray-300">
              <div className="block text-center w-[100%] ">
                <img
                  src="./images/svgexport-8.svg"
                  alt="ورود با گوگل "
                  className="mr-[11px]"
                />
              </div>
            </div>
          </Link>
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
    </>
  );
}
