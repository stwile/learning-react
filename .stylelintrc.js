/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'max-line-length': null,
    'order/properties-alphabetical-order': true,
    'string-quotes': 'single',
  },
};
