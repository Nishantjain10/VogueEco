/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      alice: ["Alice"],
    },
    extend: {
      colors: {
        greenish: "#3d5725",
        greenishtxt: "#96b26c",
      },
    },
  },
  plugins: [],
};