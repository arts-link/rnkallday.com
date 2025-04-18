/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./hugo_stats.json",
    "./layouts/**/*.html",
    "./config/**/*.toml",
    "./content/**/*.md",
    "./themes/word-nerd/layouts/**/*.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        turquoise: {
          DEFAULT: '#6BE5D8',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#DFFAF7',
          300: '#B7F3EC',
          400: '#91ECE2',
          500: '#6BE5D8',
          600: '#39DBC9',
          700: '#22C3B2',
          800: '#1A9589',
          900: '#13675F',
          950: '#0F504A'
        },
      },
      backgroundImage: {
        "hero-video": "url('/images/hero-bg.webp')",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',
            a: {
              color: '#6BE5D8',
              '&:hover': {
                color: '#39DBC9',
              },
            },
          },
        },
        dark: {
          css: {
            color: '#f3f4f6',
            a: {
              color: '#6BE5D8',
              '&:hover': {
                color: '#91ECE2',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
