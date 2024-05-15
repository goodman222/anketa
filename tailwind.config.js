/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      
      minLg: {min: '1024px'},

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      l: { max: "424px" },
    },
    extend: {
      colors: {
        backgrundGrey: "#F6F7FB",
        disActive: "#7E7E7E",
        active: "#1E0D1A",
        orange: "#EE6B03",
      },
    },

    fontFamily: {
      inter: "inter",
    },
  },
  plugins: [],
};
