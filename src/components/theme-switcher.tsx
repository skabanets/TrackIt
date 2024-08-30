"use client";

import { useTheme } from "@/hooks";
import { themes } from "@/constants";
import { Button } from "@/components";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    const newTheme = theme === themes.Light ? themes.Dark : themes.Light;
    setTheme(newTheme);
  };

  return (
    <Button onClick={handleToggleTheme} type="button" className="secondary-btn">
      Switch to {theme === "light" ? "dark" : "light"} theme
    </Button>
  );
};
