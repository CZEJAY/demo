import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        skyAqua: "#47c6cf",
        deepTeal: "#3fa7d6",
        skyBlue: "#8ed1e8",
        charcoal: "#333333",
      },

      fontFamily: {
        lora: ["var(--font-lora)"],
      },
    },
  },
  plugins: [],
};
export default config;
