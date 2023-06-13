/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlueEb: "hsl(217, 28%, 15%)",
        DarkBlueMb: "hsl(218, 28%, 13%)",
        DarkBlueFb: "hsl(216, 53%, 9%)",
        DarkBlueTb: "hsl(219, 30%, 18%)",
        Cyan: "hsl(176, 68%, 64%)",
        Blue: "hsl(198, 60%, 50%)",
        LightRed: "hsl(0, 100%, 63%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      xl: "1440px",
    },
  },
  plugins: [],
};
