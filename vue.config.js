// vue.config.js
const path = require('path');


module.exports = {
  devServer: {
    clientLogLevel: 'debug',
  },
  css: {
    modules: true,
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: '@import "~@/sass/_bootstrap_theme.scss";',
      },
    },
  },
};
