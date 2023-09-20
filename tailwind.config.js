/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'main-orange': 'hsl(25, 97%, 53%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'normal-grey': 'hsl(216, 12%, 54%)',
        'medium-grey': 'hsl(216, 12%, 25%)',
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
      },
    },
  },
  plugins: [],
};
