module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true
  },
  rules: {
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': [1, 'unix']
  }
};
