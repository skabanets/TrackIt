"use client";

import { Logo, ThemeSwitcher } from "@/components";

export const Header = () => {
  return (
    <header className="bg-secondaryBgColor shadow-md">
      <div className="container flex items-center justify-between py-4">
        <Logo />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
