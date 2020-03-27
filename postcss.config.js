const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    autoprefixer(),
    tailwind('tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
    ),
  ],
};
