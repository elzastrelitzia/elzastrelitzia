import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mono: {
          bg: "#404040",
          card: "#323232",
          text: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
export default config;
