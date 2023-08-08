"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { dispatch, payload } = useContext(ThemeContext);
  return (
    <div
      className="flex rounded-full px-[2px] border-emerald-500 border-2 relative cursor-pointer gap-1"
      onClick={() => {
        dispatch();
      }}>
      <div>🌙</div>
      <div>☀️</div>
      <div
        className={`bg-emerald-500 rounded-full h-[20px] w-[20px] absolute top-[2px] ${
          payload === "dark" ? "" : "translate-x-[calc(100%+8px)]"
        } transition-all`}></div>
    </div>
  );
};
export default DarkModeToggle;
