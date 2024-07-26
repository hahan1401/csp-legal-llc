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
        "outer-background": "rgb(var(--color-outer-background) / <alpha-value>)",
        "inner-background": "rgb(var(--color-inner-background) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        active: "rgb(var(--color-active) / <alpha-value>)",
      },
      screens: {
        'md-l': '992px',
      }
    },
  },
  plugins: [],
};
export default config;
