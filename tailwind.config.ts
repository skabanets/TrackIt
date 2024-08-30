import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBgColor: "var(--primary-bg-color)",
        textColor: "var(--text-color)",
        accentColor: "var(--accent-color)",
        accentHoverColor: "var(--accent-hover-color)",
        paginationBgColor: "var(--pagination-bg-color)",
        paginationTextColor: "var(--pagination-text-color)",
        searchBarColor: "var(--search-bar-color)",
        editIconColor: "var(--edit-icon-color)",
        deleteIconColor: "var(--delete-icon-color)",
        sortArrowColor: "var(--sort-arrow-color)",
        processBgColor: "var(--process-bg-color)",
        processTextColor: "var(--process-text-color)",
        deliveredBgColor: "var(--delivered-bg-color)",
        deliveredTextColor: "var(--delivered-text-color)",
        canceledBgColor: "var(--canceled-bg-color)",
        canceledTextColor: "var(--canceled-text-color)",
      },
    },
  },
  plugins: [],
};
export default config;
