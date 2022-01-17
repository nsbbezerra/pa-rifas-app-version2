module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          100: "#ffe5b9",
          200: "#ffd897",
          300: "#ffcb74",
          400: "#febe4f",
          500: "#f9b220",
          600: "#cb9220",
          700: "#a0731e",
          800: "#76551b",
          900: "#4f3916",
        },
        green: {
          100: "#b0cbb8",
          200: "#8ab296",
          300: "#649975",
          400: "#3c8055",
          500: "#006837",
          600: "#0b562f",
          700: "#104527",
          800: "#11351f",
          900: "#102517",
        },
      },
      fontFamily: {
        sans: ["Roboto Condensed", "Acme", "sans-serif"],
        serif: ["Acme", "sans-serif"],
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
