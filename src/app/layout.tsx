import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "modern-normalize/modern-normalize.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrackIt",
  description: "Simplifying Parcel Tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
