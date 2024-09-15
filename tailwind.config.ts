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
        primary: {
          DEFAULT: '#B261C7',
          light: '#F0E0F5',
          dark: '',
        },
        secondary: {
          DEFAULT: '#e9d0f0',
          light: '',
          dark: '',
        },
        font: {
          primary: '#B261C7',
          secondary: '',
          light: '#FFFFFF',
          dark: '',
        },
        background: {
          DEFAULT: '#F4F1F5',
          light: '',
          dark: '',
        },
      },
    },
  },
  plugins: [],
};
export default config;
