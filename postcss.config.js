const postCssNext = require('postcss-cssnext');
const postCssImport = require('postcss-import');
//important for the plugins to be in this order
module.exports = {
  plugins: [postCssImport, postCssNext]
};
