const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.svelte", "./src/app.html", "./blog/*.md"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      g: colors.emerald[500],
      black: colors.black,
      white: colors.white,
      primary: colors.emerald,
      secondary: colors.cyan,
      tertiary: colors.rose,
      trasparent: colors.transparent,
      dark: {
        50: "hsl(210,   5.0%,   39.0%)",
        100: "hsl(210,  6.5%,   33.5%)",
        200: "hsl(210,  7.0%,   29.6%)",
        300: "hsl(210,  8.5%,   27.6%)",
        400: "hsl(210,  9.0%,   23.3%)",
        500: "hsl(210,  10.0%,   22.2%)",
        600: "hsl(210,  12.5%,   21.4%)",
        700: "hsl(210,  15.0%,   20.6%)",
        800: "hsl(210,  17.5%,   19.4%)",
        900: "hsl(210,  22.5%,   15.9%)",
      },
      light: {
        50: "hsl(210,   99%,    99.0%)",
        100: "hsl(210,  55%,    97.5%)",
        200: "hsl(210,  45%,    96.2%)",
        300: "hsl(210,  35%,    94.5%)",
        400: "hsl(210,  27%,    92.0%)",
        500: "hsl(210,  26%,    90.7%)",
        600: "hsl(210,  23%,    88.4%)",
        700: "hsl(210,  20%,    86.2%)",
        800: "hsl(210,  18%,    84.0%)",
        900: "hsl(210,  17%,    81.9%)",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
