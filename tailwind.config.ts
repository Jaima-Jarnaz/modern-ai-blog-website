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
        primary: "#2ecc71",
        "primary-dark": "#27ae60",
        "primary-subtle": "#2ecc7115",
        "card-bg": "#111111",
        "dark-bg": "#0a0a0a",
        "text-primary": "#ffffff",
        "text-secondary": "#a0a0a0",
        "border-green": "#2ecc7130",
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(135deg, #2ecc71, #27ae60)",
      },
    },
  },
  plugins: [],
};

export default config;
