"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { dispatch, payload } = useContext(ThemeContext);
  return (
    <div
      className={`flex rounded-full px-[2px] border-emerald-500 border-2 relative cursor-pointer gap-2 h-[1.5rem] w-[3rem] ${
        payload === "dark" ? "bg-slate-200" : "bg-slate-700"
      }`}
      onClick={() => {
        dispatch();
      }}
    >
      {/* <div>🌙</div> */}
      {/* <div>☀️</div> */}
      <div
        className={`bg-emerald-500 rounded-full h-[1.4rem] w-[1.4rem] absolute left-[-1px] top-[-1px] ${
          payload === "dark" ? "" : "translate-x-[calc(100%+1px)]"
        } transition-all`}
      ></div>
    </div>
  );
};
export default DarkModeToggle;
