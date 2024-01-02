/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      strokeWidth: {
        3: "3px",
      },
      colors: {
        primaryA1: "#533322",
        primaryA2: "#B99D87",
        primaryA3: "EADCD7",
        primaryB1: "#958A86",
        primaryB2: "#D0BEB7",
        primaryB3: "#F3EAE7",
      },
      height: { 0.5: "1px", 850: "85vh" },
      width: { 0.5: "1px" },
      fontFamily: {
        modern: ["Bonvivantserif, sans-serif"],
      },
    },
  },
  plugins: [],
};
