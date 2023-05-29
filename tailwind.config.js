/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyFont: ["Jost", "sans-serif"],
      titleFont: ["Josefin Sans", "sans-serif"]
      },

      colors: {
        mainColor:"rgb(237,29,36)",
        blackColor: "rgb(0,0,0)",
        headingColor:"rgb(1,1,1)",
        ashColor:"rgb(121,123,121)",
      }
    },
  },
  plugins: [],
}