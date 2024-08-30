"use client";

import { useTheme } from "../hooks";
import { themes } from "../constants";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    const newTheme = theme === themes.Light ? themes.Dark : themes.Light;
    setTheme(newTheme);
  };

  return (
    <button onClick={handleToggleTheme} type="button">
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};
