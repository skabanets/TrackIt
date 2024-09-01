"use client";

import LogoSvg from "public/icons/logo.svg";

export const Logo = () => {
  return (
    <a
      href="/"
      className="group flex items-center justify-center gap-1 text-2xl font-bold text-accentColor hover:text-accentHoverColor"
    >
      <LogoSvg className="h-8 w-8 fill-accentColor group-hover:fill-accentHoverColor" />
      TrackIt
    </a>
  );
};
