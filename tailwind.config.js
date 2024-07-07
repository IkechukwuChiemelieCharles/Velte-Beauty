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
        // Greydarker: "hsl(187, 24%, 22%)",
      },
      spacing: {
        128: "32rem",
        120: "26rem",
        140: "42rem",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
