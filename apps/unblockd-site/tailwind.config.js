const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      lineClamp: {
        7: '7',
      },
      colors: {
        'my-light-bg': '#f1f2f6',
        'my-dark-bg': '#161b33',
        'my-light-icon': '#161b33',
        'my-dark-icon': '#f1f2f6',
        'my-light-text': '#343a40',
        'my-dark-text': '#f8f9fa',
        'my-light-subtext': '#6c757d',
        'my-dark-subtext': '#ced4da',
        'my-light-border': '#212529',
        'my-dark-border': '#ced4da',
        'my-light-component': '#f1f0ea',
        'my-dark-component': '#14213d',
        'my-yellow': '#f5cb5c',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
