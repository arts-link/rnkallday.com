/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./hugo_stats.json",
    "./layouts/**/*.html",
    "./config/**/*.toml",
    "./content/**/*.md",
    "./../../themes/ryder/layouts/**/*.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "hidden-home": " url('/ryder/images/hidden-home-cover.webp')",
        "header-sunset-mb": " url('/ryder/images/hidden-home-cover.webp')",
        "header-ryder": " url('/ryder/images/ryder-theme-og.webp')",
      },
      fontFamily: {
        bebasneue: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1280',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#000000', // Set the color for the base font
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
