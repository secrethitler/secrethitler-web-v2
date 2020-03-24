const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        gold: '#c80409',
      },
      fontFamily: {
        sans: [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          'Roboto Slab',
          ...defaultTheme.fontFamily.serif,
        ],
        old: [
          'Pirata One',
        ],
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {},
  plugins: [],
};
