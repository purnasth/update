module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        notoSerif: ['"Noto Serif"', "serif"],
      },
      colors: {
        "custom-blue": "#070a0f",
        "custom-gray": "#1f2937",
        "custom-white": "#f9f9f9",
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoSerif: ['"Noto Serif"', "serif"],
      },
      colors: {
        "custom-700": "#070a0f",
        "custom-300": "#1f2937",
        "custom-white": "#f9f9f9",
      },
    },
  },
  plugins: [],
};
