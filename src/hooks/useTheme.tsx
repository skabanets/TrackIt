import { useLayoutEffect, useState } from "react";

import { themes } from "../constants";

export const useTheme = () => {
  const initialTheme = localStorage.getItem("theme") || themes.Light;

  const [theme, setTheme] = useState(initialTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
