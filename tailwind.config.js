module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        blue: "#5AB2FF",
        grey: "#52525b",
        black: "#18181b",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      fontSize: {
        small: "1rem",
        medium: "1.125rem",
        large: "2rem",
        xlarge: "2.5rem",
        header: "3.25rem",
      },
      backdropBlur: {
        primary: "4px",
      },
    },
  },
  plugins: [],
};
