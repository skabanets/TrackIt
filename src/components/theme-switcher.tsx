"use client";

import { Themes } from "@/constants";
import { Button } from "@/components";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    const newTheme = theme === Themes.Light ? Themes.Dark : Themes.Light;
    setTheme(newTheme);
  };

  return (
    <Button onClick={handleToggleTheme} type="button" className="secondary-btn">
      Switch to {theme === Themes.Light ? Themes.Dark : Themes.Light} theme
    </Button>
  );
};
