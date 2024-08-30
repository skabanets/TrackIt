import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Header, ThemeProvider } from "@/components";

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
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
