import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  
  useEffect(() => {

    const prefersDarkMode = window.matchMedia(
      ("prefer-color-scheme: dark"),
    ).matches;
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button className="me-3 rounded-circle p-1 border border-dark">
        {theme === "dark" ? (
          <img src={assets.sun_icon} onClick={() => setTheme("light")} />
        ) : (
          <img src={assets.moon_icon} onClick={() => setTheme("dark")} />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
