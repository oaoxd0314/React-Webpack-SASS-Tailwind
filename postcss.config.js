module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-preset-env'),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
  