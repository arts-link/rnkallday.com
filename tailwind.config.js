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
        accent: {
          DEFAULT: '#666666',
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
          950: '#0D0D0D'
        },
      },
      backgroundImage: {
        "hero-video": "url('/images/hero-bg.webp')",
      },
      fontFamily: {
        sans: ["Fredoka", ...defaultTheme.fontFamily.sans],
        display: ["Boldonse", ...defaultTheme.fontFamily.sans]
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
              color: '#666666',
              '&:hover': {
                color: '#333333',
              },
            },
          },
        },
        dark: {
          css: {
            color: '#f3f4f6',
            a: {
              color: '#666666',
              '&:hover': {
                color: '#999999',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
