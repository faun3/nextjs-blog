"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext<ThemeContextValue>({
  dispatch: () => {},
  payload: "dark",
});

type Mode = "light" | "dark";

interface ThemeContextValue {
  dispatch: () => void;
  payload: Mode;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ dispatch: toggle, payload: mode }}>
      <div className={`${mode === "light" ? "light dark" : ""} transition-all`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
