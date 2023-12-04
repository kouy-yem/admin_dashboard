// craco.config.js
export const style = {
    postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ],
    },
};

// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  };