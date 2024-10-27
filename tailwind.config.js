/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Gray2: "#F0F0F0",
        Gray5: "#979797",
        AccentBlue: "#2B56F6",
        TextBlack: "#252525",
        BackgroundGrey: "#F6F6F6",
        ErrorRed: "#EB5757",
        Purple1: "#D5ABFF",
        Green1: "#6FCF97",
        Green2: "#27AE60",
        Gray6: "#4F4F4F",
        Gray4: "#BDBDBD",
      },
      boxShadow: {
        custom: "0px 14px 35px 0px rgba(40, 48, 63, 0.08)", // 8% equals 0.08 opacity
      },
    },
  },
  plugins: [],
};
