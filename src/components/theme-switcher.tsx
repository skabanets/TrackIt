"use client";

import { useTheme } from "next-themes";

import SunSvg from "public/sun.svg";
import MoonSvg from "public/moon.svg";

import { Themes } from "@/constants";
import { Button } from "@/components";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    const newTheme = theme === Themes.Light ? Themes.Dark : Themes.Light;
    setTheme(newTheme);
  };

  return (
    <Button onClick={handleToggleTheme} type="button" className="secondary-btn mr-4">
      {theme === Themes.Light ? (
        <MoonSvg className="h-5 w-5 fill-textColor" />
      ) : (
        <SunSvg className="h-5 w-5 fill-textColor" />
      )}
    </Button>
  );
};
