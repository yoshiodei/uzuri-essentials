/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/js/**/*.js",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/js/**/*.js"
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
              DEFAULT: '#eadeed',
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
    darkMode: "class",
    plugins: [require("tw-elements/plugin.cjs")]
  }