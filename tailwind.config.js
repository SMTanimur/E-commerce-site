module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
