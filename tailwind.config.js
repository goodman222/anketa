/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
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
