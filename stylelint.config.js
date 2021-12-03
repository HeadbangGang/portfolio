module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx'
  ],
  rules: {
    'length-zero-no-unit': null,
    'no-descending-specificity': null
  }
}
