/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './themes/word-nerd/layouts/**/*.html',
    './content/**/*.md',
    './assets/js/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'boldnese': ['Boldnese', 'serif'],
        'fredoka': ['Fredoka', 'sans-serif'],
      },
      colors: {
        'turquoise-blue': '#6BE5D8',
        'hero-accent': '#000000',
        'about-accent': '#ff0000',
        'work-accent': '#00ff00',
        'contact-accent': '#ffff00',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
