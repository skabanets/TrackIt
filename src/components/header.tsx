"use client";

import { Logo, ThemeSwitcher } from "@/components";

export const Header = () => {
  return (
    <header className="bg-secondaryBgColor shadow-lg">
      <div className="container flex items-center justify-between p-4">
        <Logo />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
