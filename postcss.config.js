const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    theme: {
        extend: {
          colors: {
            plrza: '#e53e3e',
          },
        },
      },
    variants: {},
}