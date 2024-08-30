"use client";

import Link from "next/link";
import LogoSvg from "public/logo.svg";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="text-accentColor hover:text-accentHoverColor flex items-center justify-center gap-1 text-2xl font-bold"
    >
      <LogoSvg className="fill-accentColor h-8 w-8" />
      TrackIt
    </Link>
  );
};
