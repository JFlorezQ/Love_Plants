/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      chiliRed: "#A5B68D",
      primary: "#A5B68D",       // verde principal,
      eerieBlack: "#1A1A1A",// Negro,
      onyx: "#404145",//gris oscuro
      whiteSmoke: "#F2F2F2",//Humo blanco,
      white: "#FFF",//blanco,
      blue: "#0000ff",
      grey: "#c8c8c8",
      grayLight: "#ECDFCC",     // gris claro 
      red: "E50046",
      yellow: "#facc15",
      green: "#15803d",
      pink: "#FDAB9E",


      
    },
    extend: {
      width: {
        "16vw": "16vw",
        "40vw": "40vw",
        "60vw": "70vw",
        "90vw": "80vw",
      },
      height: {
        "40vh": "50vh",
        "90vh": "89.7vh",
      },
      screens: {
        tablet: "769px",
      },
    },
  },
  plugins: [],
};
