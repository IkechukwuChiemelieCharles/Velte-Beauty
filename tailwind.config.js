/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "rgba(52, 152, 219, 1)",
        pink: "rgba(196, 136, 142, 1)",
        Green: "rgba(46, 204, 113, 1)",
        LightGrey: "rgba(236, 240, 241, 1)",
        milk: "rgba(252, 248, 243, 1)",
        Greydarker: "rgba(44, 62, 80, 1)",
        overlay: "rgba(58, 58, 58, 1)",
        tomato: "rgba(233, 113, 113, 1)",
        lightPink: "rgba(250, 243, 234, 1)",
        lightBlue: "rgba(52, 152, 219, 0.25)",
      },
      spacing: {
        120: "26rem",
        124: "32rem",
        128: "36rem",
        130: "37rem",
        140: "42rem",
        142: "46rem",
        150: "50rem",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
